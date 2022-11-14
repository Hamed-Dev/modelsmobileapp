import { CURRENT_USER } from '../actions/Auth';

const initialState = {
    currentUser: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_USER:
           
            return {currentUser: action.payload }

        default:
            return state;
    }
};
