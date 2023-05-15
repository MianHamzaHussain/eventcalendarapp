import {
  PUBLIC_EVENT_REQUEST,
  PUBLIC_EVENT_SUCCESS,
  PUBLIC_EVENT_FAIL,
  PRIVATE_EVENT_REQUEST,
  PRIVATE_EVENT_FAIL,
  PRIVATE_EVENT_SUCCESS,
  ADD_EVENT_REQUEST,
  ADD_EVENT_FAIL,
  ADD_EVENT_SUCCESS,
  REMOVE_EVENT_FAIL,
  REMOVE_EVENT_SUCCESS,
  REMOVE_EVENT_REQUEST,
} from '../constants/constants';
const initialState = {
  loading: false,
  publicEvents: [],
  privateEvents: [],
  isPrivateLoading: false,
  error: null,
  privateError: [],
  addEventLoading: false,
  removeEventLoading: false,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUBLIC_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PUBLIC_EVENT_SUCCESS:
      return {
        ...state,
        publicEvents: action.payload,
        error: null,
        loading: false,
      };
    case PUBLIC_EVENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case PRIVATE_EVENT_REQUEST:
      return {
        ...state,
        isPrivateloading: true,
      };
    case PRIVATE_EVENT_SUCCESS:
      return {
        ...state,
        privateEvents: action.payload,
        privateError: null,
        isPrivateloading: false,
      };
    case PRIVATE_EVENT_FAIL:
      return {
        ...state,
        privateError: action.payload,
        isPrivateloading: false,
      };
    case ADD_EVENT_REQUEST:
      return {
        ...state,
        addEventLoading: true,
      };
    case ADD_EVENT_SUCCESS:
      return {
        ...state,
        error: null,
        addEventLoading: false,
        ...(action.payload.isPublic
          ? {publicEvents: [...state.publicEvents, action.payload]}
          : {privateEvents: [...state.privateEvents, action.payload]}),
      };
    case ADD_EVENT_FAIL:
      return {
        ...state,
        error: action.payload,
        addEventLoading: false,
      };
    case REMOVE_EVENT_REQUEST:
      return {
        ...state,
        removeEventLoading: false,
      };
    case REMOVE_EVENT_SUCCESS:
      return {
        ...state,
        error: null,
        removeEventLoading: false,
        ...(action.payload.isPublic
          ? {
              publicEvents: state.publicEvents.filter(
                item => item?.['_id'] === id,
              ),
            }
          : {
              privateEvents: state.privateEvents.filter(
                item => item?.['_id'] === id,
              ),
            }),
      };
    case REMOVE_EVENT_FAIL:
      return {
        ...state,
        error: action.payload,
        removeEventLoading: false,
      };
    default:
      return state;
  }
};

export default eventsReducer;
