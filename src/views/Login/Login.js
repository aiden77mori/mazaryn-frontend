import React from 'react';
import { Form, Input, Button } from 'antd';
import './Login.css'

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="flex bg-lightgreen h-screen">
      <div className="m-auto">
        <div className="bg-white py-20 login-card">
          <h4 className="font-bold text-center text-xl">Log in to Mazaryn</h4>
          <div className="mx-20 mt-6">
            <Form
              form={form}
              layout="vertical"
              autoComplete="off"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email',
                  },
                ]}
              >
                <Input placeholder="Email Address" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password',
                  },
                ]}
              >
                <Input placeholder="Password" type="password" />
              </Form.Item>
              <p className="flex justify-end -mt-3">Forgot Password?</p>
              <div className="flex justify-center">
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </div>
              <div className="cursor-pointer">
                <p className="text-green-600 text-center underline pt-5">Don't have an account? Sign up here</p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login