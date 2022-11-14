import { MODELS } from '../actions/MODELS';

const initialState = {
    models: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MODELS:

            return { models: action.payload }

        default:
            return state;
    }
};
