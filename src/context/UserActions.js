export const loginUser = (dispatch, data) => {
  try {
    dispatch({
      type: 'REQUEST_LOGIN'
    })
      if (data) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        return data;
      }
      dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
      return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error });
  }
}

export const logout = (dispatch) => {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}