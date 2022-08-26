import Head from "next/head";
import { Form, Input, Button } from "antd";
import styles from "../styles/login.module.scss";
import { signIn, signOut } from "next-auth/react";
import axios from "axios";

export default function SignIn({ csrfToken }) {
  const onFinish = async (values) => {
    console.log("Success:", values);
    // signIn("Credentials", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Head>
        <title>登录</title>
        <meta name="description" content="管理登录" />
      </Head>

      <main className={styles.container}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          // method="post"
          // action="/api/auth/callback/credentials"
        >
          {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
