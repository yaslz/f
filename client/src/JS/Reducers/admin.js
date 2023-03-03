import { CURRENT_ADMIN, LOAD_ADMIN, LOGOUT_ADMIN } from "../ActionType/admin";

  
  const initialState = {
    admin: null,
    loadAdmin: false,
    errors: [],
    isAuthAdmin: false,
  };
  
  const adminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOAD_ADMIN:
        return { ...state, loadAdmin: true };
      case LOGOUT_ADMIN:
        localStorage.removeItem("token");
        return { admin: null, loadAdmin: false, errors: [], isAuthAdmin: false };
      case CURRENT_ADMIN:
        return { ...state, loadAdmin: false, admin: payload, isAuthAdmin: true };
      default:
        return state;
    }
  };
  
  export default adminReducer;
  