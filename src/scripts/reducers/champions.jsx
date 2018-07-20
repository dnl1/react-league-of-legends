import { CHAMPIONS_FETCHED } from '../actions/types';

const initialState = {
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHAMPIONS_FETCHED:
      return {
        ...state,
        ...action.champions
      };
    default: return state;
  }
}