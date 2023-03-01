import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchData = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
}

const useFetch = (url: string) => {
  const { data, status, error } = useQuery(['data'], () => fetchData(url));
  return { data, status, error };
}

export default useFetch;
