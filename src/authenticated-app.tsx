import { ProjectListScreen } from "./screens/project-list";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";
import React from "react";
import { Row } from "./components/lib";

/**
 *
 * */

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <h2>Logo</h2>
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <button onClick={logout}>登出</button>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};

const HeaderItem = styled.h3`
  margin-right: 3rem;
`;

const Container = styled.div`
  //display: grid;
  //grid-template-rows: 6rem 1fr 6rem;
  //grid-template-columns: 20rem 1fr 20rem;
  //grid-template-areas:
  //"header header header"
  //"nav main aside"
  //"footer footer footer";
  height: 100vh;
`;
const Header = styled(Row)``;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;

const Main = styled.main`
  grid-area: main;
`;
