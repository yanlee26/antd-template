import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { LoginParams } from 'interface/user/login'
import { loginAsync } from 'store/userSlice'
import { LoginContainer } from './style'

const initialValues: LoginParams = {
  username: 'guest',
  password: 'guest'
  // remember: true
}

const LoginForm = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const onFinished = async (form: any) => {
    const res = dispatch(await loginAsync(form))
    if (!!res) {
      const from = (location.state as any)?.from || { pathname: '/dashboard' }
      navigate(from)
    }
  }

  return (
    <LoginContainer>
      <Form onFinish={onFinished} className="login-page-form" initialValues={initialValues}>
        <h2>REACT ANTD ADMIN</h2>
        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名！' }]}>
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]}>
          <Input type="password" placeholder="密码" />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>记住用户</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" className="login-page-form_button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </LoginContainer>
  )
}

export default LoginForm
