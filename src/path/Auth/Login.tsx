import { useCookies } from 'react-cookie';
import { useMutation } from '@tanstack/react-query';
import { Form, Input, Button } from 'antd';
import { instance } from '../../hooks';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

interface LoginData {
  email: string;
  password: string;
}

interface ApiResponse {
  data: {
    tokens: {
      accessToken: string;
    };
  };
}

const Login = () => {
  const [, setCookie] = useCookies(['token']);

  const LoginFn = useMutation<ApiResponse, AxiosError, LoginData>({
    mutationFn: (data) => instance().post('/auth/login', data),

    onSuccess: (res) => {
      toast.success('Successfully signed!');

      // Tokenni cookie ga saqlash
      setCookie('token', res.data.tokens.accessToken, {
        path: '/',
      });
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || 'Login failed!');
    },
  });

  const onFinish = (values: LoginData) => {
    LoginFn.mutate(values);
  };

  return (
    <div className="h-screen bg-slate-900/50 flex items-center justify-center">
      <Form
        className="bg-white p-5 rounded-xl"
        autoComplete="off"
        name="login"
        style={{ minWidth: 400 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input placeholder="example@gmail.com" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password placeholder="******" />
        </Form.Item>

        <Form.Item>
          <Button
            loading={LoginFn.isPending}
            className="bg-amber-600 font-bold"
            block
            type="primary"
            htmlType="submit"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
