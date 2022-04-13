import React from "react";
import { Button, Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  projectListActions,
  projectListSlice,
  selectProjectModelOpen,
} from "./project-list.slice";

export const ProjectModel = () => {
  const dispatch = useDispatch();
  const projectModelOpen = useSelector(selectProjectModelOpen);
  return (
    <Drawer
      onClose={() => dispatch(projectListActions.closeProjectModel())}
      visible={projectModelOpen}
      width={"100%"}
    >
      <h1>Project Model</h1>
      <Button onClick={() => dispatch(projectListActions.closeProjectModel())}>
        关闭
      </Button>
    </Drawer>
  );
};
