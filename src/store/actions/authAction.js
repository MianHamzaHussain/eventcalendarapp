import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
} from '../constants/constants';
import eventAxios from '../../config/eventAxios';
export const login = (value, nav) => async dispatch => {
  try {
    dispatch({type: LOGIN_REQUEST});
    const res = await eventAxios().post('/login', {...value});
    const data = res.data;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {...data.user, token: data.token},
    });
    nav('PrivateEvent');
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message || error.message,
    });
  }
};

export const register = (value, nav) => async dispatch => {
  try {
    dispatch({type: LOGIN_REQUEST});
    const res = await eventAxios().post('/register', {...value});
    const data = res.data;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        name: value.name,
        email: value.email,
        isAdmin: false,
        token: data.token,
      },
    });
    nav('PrivateEvent');
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message || error.message,
    });
  }
};

export const logout = () => async dispatch => {
  try {
    dispatch({type: LOGOUT_REQUEST, payload: {}});
  } catch (error) {
    console.error(error);
  }
};
