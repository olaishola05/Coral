import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

const postData = async (url: string, data: any) => {
  const { data: response } = await axios.post(url, data);
  return response;
}

const usePost = (url: string) => {
  const { data, status, error, mutate } = useMutation(['data'], (data: any) => postData(url, data));
  return { data, status, error, mutate };
}

export default usePost;