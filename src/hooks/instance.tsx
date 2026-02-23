import axios from 'axios';

const baseURL = import.meta.env.VITE_API;
const instance = () => {
  // const {token} = useContext(Context)
  return axios.create({ baseURL });
};

export default instance;
