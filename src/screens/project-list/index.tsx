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
import { useProjectsSearchParams } from "./util";
import { Row } from "../../components/lib";
import { useDispatch, useSelector } from "react-redux";
import {
  projectListActions,
  selectProjectModelOpen,
} from "./project-list.slice";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);
  const projectModelOpen = useSelector(selectProjectModelOpen);

  //基本类型可以放在依赖里;组件状态可以放在依赖里;非组件组件状态的对象绝不可以放在依赖里
  const [param, setParam] = useProjectsSearchParams();
  const client = useHttp();
  const { isLoading, error, data: list } = useProjects(useDebounce(param, 200));
  const dispatch = useDispatch();

  useMount(() => {
    client("users").then(setUsers);
  });
  return (
    <Container>
      <Row between={true}>
        <h1>项目列表</h1>
        <Button onClick={() => dispatch(projectListActions.openProjectModel())}>
          创建项目
        </Button>
      </Row>
      <SearchPanel users={users || []} param={param} setParam={setParam} />

      <List loading={isLoading} users={users} dataSource={list || []} />
    </Container>
  );
};

ProjectListScreen.whyDidYouRender = false;
const Container = styled.div`
  padding: 3.2rem;
`;
