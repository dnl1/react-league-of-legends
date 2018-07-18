import { CHAMPIONS_FETCHED } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isFetched: false,
  data: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHAMPIONS_FETCHED:
      return {
        isFetched: !isEmpty(action.user),
        data: action.data
      };
    default: return state;
  }
}