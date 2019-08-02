import * as t from '../../actions/types.js';

export const InitialState = '';

export default (state =  InitialState, { type, payload }) => {
    switch(type) {
        case t.ADD_RESULT_SUCCESS:
            return payload;
        default:
            return state;
    }
}