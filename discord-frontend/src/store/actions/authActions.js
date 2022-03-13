import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    register: (userDetails, navigate) =>
      dispatch(register(userDetails, navigate)),
    setUserDetails: (userDetails)=> dispatch(setUserDetails(userDetails)),
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

const login = (userDetails, navigate) => {
  return async (dispatch) => {
    let res = {};
    api
      .login(userDetails)
      .then((response) => {
        res = response;
        if (res.error) {
          dispatch(openAlertMessage(res?.exception?.response?.data?.message));
        } else {
          const { userDetails } = response?.data;
          localStorage.setItem("user", JSON.stringify(userDetails));
          dispatch(setUserDetails(userDetails));
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        // show error message;
        console.log(error.message);
        dispatch(openAlertMessage(error));
      });
  };
};

const register = (userDetails, navigate) => {
  return async (dispatch) => {
    let res = {};
    api
      .register(userDetails)
      .then((response) => {
        
        res = response;
        if(res.error){
            dispatch(openAlertMessage(res?.exception?.response?.data?.message));
        }
        const { userDetails } = response?.data;
        localStorage.setItem("user", JSON.stringify(userDetails));
        dispatch(setUserDetails(userDetails));
        navigate("/dashboard");
      })
      .catch((error) => {
        // show error message
        dispatch(openAlertMessage(error.message));
      });
  };
};
