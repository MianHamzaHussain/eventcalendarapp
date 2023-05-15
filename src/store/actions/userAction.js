import {
    USER_FAIL,
    USER_REQUEST,
    USER_SUCCESS,
  } from '../constants/constants';
  import eventAxios from '../../config/eventAxios';
  export const getUsers = () => async (dispatch,getState) => {
    try {
      dispatch({type: USER_REQUEST});
      const { user } = getState().auth
      const url = `/user`;
      const res = await eventAxios(user?.token).get(url);
      const events = res.data.users;
      dispatch({
        type: USER_SUCCESS,
        payload: events,
      });
    } catch (error) {
      dispatch({
        type: USER_FAIL,
        payload: error.message,
      });
    }
  };