import React, { memo } from 'react';
import { Form, Input, Button } from 'antd';
import './Login.css'
import { connect } from 'react-redux';
import {signUp} from '../../redux/actions'

const SignUp = memo((props) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    delete values['password2']
    const response = await props.signUp(values)
    if(response?.status === 'successStatus'){
      props.history.push('/login')
    }  
  };

  return (
    <div className="flex bg-lightgreen h-screen">
      <div className="m-auto">
        <div className="bg-white py-20 login-card">
          <h4 className="font-bold text-center text-xl">Sign up to Mazaryn</h4>
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
                    required: true,
                    message: 'Please insert your password',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || value.length >=8 ) {
                        return Promise.resolve();
                      }
        
                      return Promise.reject(new Error('The password must contain atleast 8 characters'));
                    }})
                ]}
              >
                <Input placeholder="Password" type="password" />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="password2"
                rules={[
                  {
                    required: true,
                    message: 'Please insert your password',
                  }, 
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
        
                      return Promise.reject(new Error('The passwords do not match!'));
                    }})
                ]}
              >
                <Input placeholder="Confirm Password" type="password" />
              </Form.Item>
              <div className="flex justify-center">
                <Button type="primary" htmlType="submit">
                  Create Account
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
})

export default connect(null, {signUp})(SignUp)