import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className={styles.containerLogin}>
      <Form
        name="normal_login"
        style={{ width: 300 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Veuillez entrer votre email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Veuillez entrer votre mot de passe!" },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mot de passe"
          />
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Button
            style={{ width: 300, border: 0 }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Se connecter
          </Button>
          <div style={{ marginTop: 18 }}>
            Ou <Link to={"#"}>inscrire!</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
