import {
  PRIVATE_EVENT_FAIL,
  PUBLIC_EVENT_FAIL,
  PUBLIC_EVENT_REQUEST,
  PUBLIC_EVENT_SUCCESS,
  PRIVATE_EVENT_REQUEST,
  PRIVATE_EVENT_SUCCESS,
  ADD_EVENT_REQUEST,
  ADD_EVENT_FAIL,
  ADD_EVENT_SUCCESS,
  REMOVE_EVENT_REQUEST,
  REMOVE_EVENT_SUCCESS,
  REMOVE_EVENT_FAIL,
} from '../constants/constants';
import eventAxios from '../../config/eventAxios';
export const getPublicEvents = (start, end, title) => async dispatch => {
  try {
    dispatch({type: PUBLIC_EVENT_REQUEST});
    let queryString = '';
    if (start) {
      queryString += `start=${encodeURIComponent(start)}&`;
    }
    if (end) {
      queryString += `end=${encodeURIComponent(end)}&`;
    }
    if (title) {
      queryString += `title=${encodeURIComponent(title)}&`;
    }
    if (queryString) {
      // Remove the last "&" character
      queryString = queryString.slice(0, -1);
    }
    const url = `/event?${queryString}`;
    const res = await eventAxios().get(url);
    const events = res.data.events;
    dispatch({
      type: PUBLIC_EVENT_SUCCESS,
      payload: events,
    });
  } catch (error) {
    dispatch({
      type: PUBLIC_EVENT_FAIL,
      payload: error.message,
    });
  }
};
export const getPrivateEvents =
  (start, end, title) => async (dispatch, getState) => {
    try {
      const {user} = getState().auth;
      dispatch({type: PRIVATE_EVENT_REQUEST});
      let queryString = '';
      if (start) {
        queryString += `start=${encodeURIComponent(start)}&`;
      }
      if (end) {
        queryString += `end=${encodeURIComponent(end)}&`;
      }
      if (title) {
        queryString += `title=${encodeURIComponent(title)}&`;
      }
      if (queryString) {
        // Remove the last "&" character
        queryString = queryString.slice(0, -1);
      }
      const url = `/privateEvent?${queryString}`;
      const res = await eventAxios(user?.token).get(url);
      const events = res.data.events;
      dispatch({
        type: PRIVATE_EVENT_SUCCESS,
        payload: events,
      });
    } catch (error) {
      dispatch({
        type: PRIVATE_EVENT_FAIL,
        payload: error.message,
      });
    }
  };

export const addEvent = (values, nav) => async (dispatch, getState) => {
  try {
    const {user} = getState().auth;
    dispatch({type: ADD_EVENT_REQUEST});
    const url = `/event`;
    const {category, ...rest} = values;
    const isPublic = category === 'true';
    const screen=isPublic?'Home':'PrivateEvent'
   const res= await eventAxios(user?.token).post(url, {isPublic,...rest});
    dispatch({
      type: ADD_EVENT_SUCCESS,
      payload:res?.data?.event,
    });
    nav(screen);

  } catch (error) {
    console.log(error);
    dispatch({
      type: ADD_EVENT_FAIL,
      payload: error.message,
    });
  }
};
export const removeEvent = (id, isPublic) => async (dispatch, getState) => {
  try {
    const {user} = getState().auth;
    dispatch({type: REMOVE_EVENT_REQUEST});
    const url = `/event/${id}`;
    await eventAxios(user?.token).delete(url);
    dispatch({
      type: REMOVE_EVENT_SUCCESS,
      payload: {isPublic, id},
    });
  } catch (error) {
    dispatch({
      type: REMOVE_EVENT_FAIL,
      payload: error.message,
    });
  }
};
