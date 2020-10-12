let token = localStorage.getItem("token") ? localStorage.getItem("token") : '';

export const initialState = {
  errorMessage: null,
  loading: false,
  user: null,
  token: null || token,
};

export const UserReducer = (state = initialState, action) => {
  switch(action.type){
    case "REQUEST_LOGIN":
      return{
        ...state,
        loading: true,
      }
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.data.signinUser.token);
      return{
          ...state,
          user: action.payload.data.signinUser.user,
          token: action.payload.data.signinUser.token,
          loading: false
      };
    case "LOGOUT":
      localStorage.clear();
      return{
          ...state,
          user: null,
          token: null
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}