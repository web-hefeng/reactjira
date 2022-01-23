import React, { FormEvent } from "react";
import * as qs from "qs";
import { cleanObject } from "../../utils";
import { useAuth } from "../../context/auth-context";
import { Form, Input, Button } from "antd";

export const LoginScreen = () => {
  const { login, user } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
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
        <Button htmlType={"submit"} type={"primary"}>
          密码
        </Button>
        <Button type={"primary"}>啊啊</Button>
      </Form.Item>
    </Form>
  );
};
