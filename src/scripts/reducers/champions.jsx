import { CHAMPIONS_FETCHED } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
};

export default (state = initialState, action = {}) => {
  console.log('action', action);
  console.log('state', state);
  switch (action.type) {
    case CHAMPIONS_FETCHED:
      return {
        ...state,
        ...action.champions
      };
    default: return state;
  }
}