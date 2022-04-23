import React from "react";
import { Button, Divider, List, Popover, Typography } from "antd";
import { useProjects } from "../utils/project";
import styled from "@emotion/styled";
import { ButtonNoPadding } from "./lib";
import { useProjectModel } from "../screens/project-list/util";

export const ProjectPopover = () => {
  const { open } = useProjectModel();
  const { data: projects, isLoading } = useProjects();
  const pinnedProjects = projects?.filter(
    (project: { pin: any }) => project.pin
  );
  const content = (
    <ContentContainer>
      <Typography.Text type={"secondary"}>收藏项目</Typography.Text>
      <List>
        {pinnedProjects?.map(
          (project: {
            name:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          }) => (
            <List.Item>
              <List.Item.Meta title={project.name} />
            </List.Item>
          )
        )}
      </List>
      <Divider />
      <ButtonNoPadding onClick={open} type={"link"}>
        创建项目
      </ButtonNoPadding>
    </ContentContainer>
  );
  return (
    <Popover placement={"bottom"} content={content}>
      <span>项目</span>
    </Popover>
  );
};

const ContentContainer = styled.div`
  min-width: 30rem;
`;
