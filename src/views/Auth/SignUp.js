import React, { memo } from 'react';
import { Form, Input } from 'antd';
import './Login.css'
import { connect } from 'react-redux';
import { signUp } from '../../redux/actions'

const SignUp = memo((props) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    delete values['password2']
    const response = await props.signUp(values)
    if (response?.status === 'successStatus') {
      props.history.push('/login')
    }
  };

  return (
    <div className="flex bg-white h-screen">
      <div className="w-full flex flex-row bg-lightgreen">
        <div className="w-2/5 flex flex-col items-center justify-center">
          <p className="chat-logo text-4xl">
            Chat
            <br />
            <p className="m-0 text-greenborder font-extrabold text-5xl">
              Hangout
            </p>
            &#38; more
          </p>
          <img src={process.env.PUBLIC_URL + '/assets/images/woman_illustrations.svg'} alt='' className='right-45 absolute' />
        </div>
        <div className="w-3/5 bg-white py-20 login-card flex flex-col items-center justify-center">
          <h4 className="font-bold text-center text-xl page-name">Sign up</h4>
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
                    message: 'Please insert your email',
                  },
                  {
                    type: 'email',
                    message: 'Please type a valid email',
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
                    message: 'Please insert your password',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || value.length >= 8) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error('The password must contain atleast 8 characters'));
                    }
                  })
                ]}
              >
                <Input placeholder="Password" type="password" />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="password2"
                rules={[
                  {
                    message: 'Please insert your password',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error('The passwords do not match!'));
                    }
                  })
                ]}
              >
                <Input placeholder="Confirm Password" type="password" />
              </Form.Item>
              <button className="btn w-full h-9 text-white bg-greenborder rounded-lg" type="submit">
                Sign up
              </button>
              <div className="cursor-pointer">
                <p className="text-green-600 text-center no-underline pt-5" onClick={() => props.history.push('/login')}>Sign in</p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
})

export default connect(null, { signUp })(SignUp)