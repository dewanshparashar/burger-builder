import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-51618-default-rtdb.firebaseio.com/",
});

export default instance;
