import React, { useState, useContext } from "react";
import { Input, Form, Button, Checkbox, Row, Col, message } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import users from "../../dummy/index";
import { UserAddOutlined } from "@ant-design/icons";
import AuthContext from "../../contexts/Auth/index";

interface Props {}

const LoginPage: React.FC<Props> = () => {
  //@ts-ignore
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: {
    email: string;
    password: string;
    remember: boolean;
  }) => {
    setLoading(true);
    setTimeout(() => {
      const loggedInUser = users.find(
        (dummyUser) =>
          dummyUser.email === values.email &&
          dummyUser.password === values.password
      );
      if (loggedInUser) {
        if (values.remember) {
          localStorage.setItem("user", JSON.stringify(loggedInUser));
        } else {
          sessionStorage.setItem("user", JSON.stringify(loggedInUser));
        }
        setUser(loggedInUser);
        message.success(`Welcome ${loggedInUser.name}`);
        navigate("/home");
        setLoading(false);
      } else {
        message.error("Invalid Credentials");
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <Row justify='center' align='middle' className={styles.container}>
      <Col xs={22} md={20} lg={16} xl={10}>
        <Form
          className={styles.form}
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <h1>Login</h1>
          <Form.Item
            label='Email'
            name='email'
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type='email' />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name='remember'
            valuePropName='checked'
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type='primary'
              htmlType='submit'
              loading={loading}
              icon={<UserAddOutlined />}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
