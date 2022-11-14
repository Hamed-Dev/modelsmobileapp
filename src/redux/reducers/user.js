import {LOG_IN} from '../actions/user';

const intialState = {
  isLoggedIn: false,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        isLoggedIn: !state.isLoggedIn,
      };

    default:
      return state;
  }
};
