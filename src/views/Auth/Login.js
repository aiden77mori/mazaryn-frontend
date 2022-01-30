import React, { memo } from 'react';
import { Form, Input } from 'antd';
import './Login.css'
import { login } from '../../redux/actions';
import { connect } from 'react-redux';

const Login = memo((props) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const response = await props.login(values)
    if (response?.status === 'successStatus') {
      props.history.push('/group')
    }
  };

  return (
    <div className="flex bg-white h-screen">
      <div className="w-full flex flex-row">
        <div className="w-2/5 flex flex-col items-center justify-center login-left relative">
          <p className="relative chat-logo text-white text-6xl z-1 font-bold tracking-wider">
            Maz<span className="underline">ar</span>y<span className="underline">n</span>
            <span className="absolute top-full right-0 text-3xl text-black font-bold tracking-normal">social</span>
          </p>
          <img src={process.env.PUBLIC_URL + '/assets/images/loginVector.svg'} alt='' className='absolute left-0 bottom-0 w-3/4' />
        </div>
        <div className="w-3/5 bg-white py-20 login-card flex flex-col items-center justify-center">
          <h4 className="font-bold text-center text-xl page-name">Sign in</h4>
          <div className="w-1/2 max-w-md">
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
                    message: 'Please input your email',
                  },
                ]}
              >
                <Input placeholder="Email Address" />
              </Form.Item>
              <div className="flex flex-row justify-between items-center">
                <p>Password</p>
                <p className="text-center pt-5 text-red-400">forgot Password?</p>
              </div>
              <Form.Item
                name="password"
                rules={[
                  {
                    message: 'Please input your password',
                  },
                ]}
              >
                <Input placeholder="Password" type="password" />
              </Form.Item>
              <div className="flex flex-row justify-between items-center">
                <div>
                  <input type="checkbox" /> Remember me
                </div>
                <button className="py-3 px-12 text-white bg-greenborder rounded-3xl transition-colors hover:bg-btnhover" type="submit">
                  Login
                </button>
              </div>
                <p className="text-center no-underline pt-5">Don’t have an account? <span className="text-green-600 cursor-pointer" onClick={() => props.history.push('/signup')}>Sign Up</span></p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
})

export default connect(null, { login })(Login)