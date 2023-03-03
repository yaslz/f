import {
  CURRENT_ADMIN,
  LOAD_ADMIN,
  LOGIN_ADMIN,
  LOGOUT_ADMIN,
} from "../ActionType/admin";
import axios from "axios";

export const login = (admin, history) => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });
  try {
    let result = await axios.post("/api/admin/login", admin);
    dispatch({ type: LOGIN_ADMIN, payload: result.data });
    history.push("/admin");
  } catch (error) {
    console.log(error);
  }
};

export const currentAdmin = () => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api/admin/current", config);
    dispatch({ type: CURRENT_ADMIN, payload: result.data });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_ADMIN });
};
