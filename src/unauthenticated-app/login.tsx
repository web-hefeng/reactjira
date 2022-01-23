import React, { FormEvent } from "react";
import * as qs from "qs";
import { useAuth } from "../context/auth-context";
import { Button, Form, Input } from "antd";
import { LongButton } from "./index";

const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
  const { login, user } = useAuth();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder={"密码"} type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType={"submit"} type={"primary"}>
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};
