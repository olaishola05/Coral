
import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();
  return navigate as (path: string, option?: any) => void;
}