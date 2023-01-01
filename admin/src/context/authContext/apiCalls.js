import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logout } from "./AuthAction";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8800/api/auth/login", user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logOut = async (dispatch) => {
  try {
    dispatch(logout());
  } catch (err) {
    console.log(err);
  }
};
