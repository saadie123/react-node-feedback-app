import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user: null
}

export default (state=initialState, actions) => {
    switch (actions.type) {
        case actionTypes.FETCH_USER:
            return actions.payload || false;
        default:
            return state;
    }
}