import { CHAMPIONS_FETCHED, CHAMPIONS_FILTER, CHAMPIONS_FETCHING } from '../actions/types';

const initialState = {
  filter: '',
  champions: [],
  loading: false
};

export default (state = initialState, action = {}) => {
  let sortChampions = () => {
    action.champions.sort(function (a, b) {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    });
  }


  switch (action.type) {
    case CHAMPIONS_FETCHED:
      sortChampions();

      return {
        ...state,
        ...action,
      }

    case CHAMPIONS_FILTER:
      sortChampions();


      return {
        ...state,
        ...action,
      }

    case CHAMPIONS_FETCHING:
      return {
        ...state,
        ...action,
      }

    default: return state;
  }
}