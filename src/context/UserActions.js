export const loginUser = (dispatch, data) => {
  try {
    dispatch({
      type: 'REQUEST_LOGIN'
    })
      if (data && data.data && data.data.signinUser !== null) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        return data;
      }
      dispatch({ type: 'LOGIN_ERROR', errorMessage: "There was a problem signing in!" });
      return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', errorMessage: error });
  }
}

export const logout = (dispatch) => {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}