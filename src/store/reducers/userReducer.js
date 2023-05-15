import {USER_REQUEST, USER_SUCCESS, USER_FAIL} from '../constants/constants';
const initialState = {
  loading: false,
  users: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: null,
        loading: false,
      };
    case USER_FAIL:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
