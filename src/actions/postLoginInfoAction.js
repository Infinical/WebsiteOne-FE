import axios from "axios";
import { POST_LOGIN_INFO } from "../types";

export let getUser = user => ({ type: POST_LOGIN_INFO, payload: user });

export let postLoginInfo = props => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:3000/users/sign_in",
    data: {
      user: {
        email: props.email,
        password: props.password
      }
    }
  }).then(response => {
    console.log(response.data)
    dispatch(getUser(response.data));
    if (response.data.authorization) {
      sessionStorage.setItem("jwt-token", response.headers.authorization);
    }
  });
};
