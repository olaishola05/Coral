import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchData = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
}

const useFetch = (url: string) => {
  const { data, status } = useQuery(['process'], () => fetchData(url));
  return { data, status };
}

export default useFetch;
