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
        <div className="w-2/5 flex flex-col items-center justify-center login-left relative">
          <p className="relative chat-logo text-white text-6xl z-1 font-bold tracking-wider">
            Maz<span className="underline">ar</span>y<span className="underline">n</span>
            <span className="absolute top-full right-0 text-3xl text-black font-bold tracking-normal">social</span>
          </p>
          <img src={process.env.PUBLIC_URL + '/assets/images/loginVector.svg'} alt='' className='absolute left-0 bottom-0 w-3/4' />
        </div>
        <div className="w-3/5 bg-white py-20 login-card flex flex-col items-center justify-center">
          <h4 className="font-bold text-center text-xl page-name">Sign up</h4>
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
              <div className="flex flex-row justify-between items-center flex-wrap">
                <p className="text-center no-underline pt-5">Already have an account? <span className="text-green-600 cursor-pointer" onClick={() => props.history.push('/login')}>Sign in</span></p>
                <button className="py-3 px-12 text-white bg-greenborder rounded-3xl transition-colors hover:bg-btnhover" type="submit">
                  Sign up
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
})

export default connect(null, { signUp })(SignUp)