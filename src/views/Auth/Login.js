import React, { memo } from 'react';
import { Form, Input, Button } from 'antd';
// import './Login.css'
import { login } from '../../redux/actions';
import { connect } from 'react-redux';

const Login = memo((props) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const response = await props.login(values)
    if(response?.status === 'successStatus'){
      props.history.push('/group')
    }
  };

  return (
    <div className="flex bg-white h-screen">
      <div className="w-full flex flex-row bg-lightgreen">
        <div className="w-2/5 flex flex-col items-center justify-center">
          <p>Chat <br/> Hangour <br/> & more</p>
        </div>
        <div className="w-3/5 bg-white py-20 login-card flex flex-col items-center justify-center">
          <h4 className="font-bold text-center text-xl">Sign in</h4>
          <div className="w-1/2">
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
                label="Email"
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'Please type a valid email',
                  },
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
              <button className="w-full h-9 text-white bg-greenborder rounded-lg" type="submit">
                Login
              </button>
              <div className="cursor-pointer">
                <p className="text-green-600 text-center no-underline pt-5" onClick={() => props.history.push('/signup')}>Sign up</p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
})

export default connect(null, {login})(Login)