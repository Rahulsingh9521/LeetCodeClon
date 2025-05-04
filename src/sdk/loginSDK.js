import axios from "../routes/commandinterceptor";

const login = {
  authenticate(payload) {
    const url = "http://localhost:9090/api/login";
    return axios.post(url, payload);
  },
};

export default login;
