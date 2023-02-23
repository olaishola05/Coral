import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

function useLogin(url: string) {
  const loginMutation = useMutation<LoginResponse, Error, LoginData>(
    async (data: LoginData) => {
      const response = await axios.post<LoginResponse>(url, data);
      return response.data;
    }
  );

  return loginMutation;
}

export default useLogin;
