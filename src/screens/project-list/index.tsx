import React from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce, useMount } from "../../utils";
import * as qs from "qs";
import { useAuth } from "../../context/auth-context";
import { useHttp } from "../../utils/http";
import styled from "@emotion/styled";
import { Typography, Button } from "antd";
import { useAsync } from "../../utils/use-async";
import { useProjects } from "../../utils/project";
import { useUrlQueryParam } from "../../utils/url";
import { useProjectModel, useProjectsSearchParams } from "./util";
import { ButtonNoPadding, Row } from "../../components/lib";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const { open } = useProjectModel();
  const [users, setUsers] = useState([]);

  //基本类型可以放在依赖里;组件状态可以放在依赖里;非组件组件状态的对象绝不可以放在依赖里
  const [param, setParam] = useProjectsSearchParams();
  const client = useHttp();
  const {
    isLoading,
    error,
    data: list,
    retry,
  } = useProjects(useDebounce(param, 200));

  useMount(() => {
    client("users").then(setUsers);
  });
  return (
    <Container>
      <Row between={true}>
        <h1>项目列表</h1>
        <ButtonNoPadding onClick={open} type={"link"}>
          创建项目
        </ButtonNoPadding>
      </Row>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List
        refresh={retry}
        loading={isLoading}
        users={users}
        dataSource={list || []}
      />
    </Container>
  );
};

ProjectListScreen.whyDidYouRender = false;
const Container = styled.div`
  padding: 3.2rem;
`;
