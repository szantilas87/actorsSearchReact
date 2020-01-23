import {
  SEARCH_ACTORS,
  SET_LOADING,
  CLEAR_ACTORS,
  GET_ACTOR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_ACTORS:
      return {
        ...state,
        actors: action.payload,
          loading: false
      };
    case GET_ACTOR:
      return {
        ...state,
        actor: action.payload,
          loading: false
      };
    case CLEAR_ACTORS:
      return {
        ...state,
        actors: [],
          loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};