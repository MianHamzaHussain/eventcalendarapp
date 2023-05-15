import {LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,LOGOUT_REQUEST} from '../constants/constants';
const initialState = {
  loading: false,
  user: {},
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
      case LOGOUT_REQUEST:
        return initialState
    default:
      return state;
  }
};

export default authReducer;
