import * as t from '../types.js';
import store from '../../store';

export const addResult =  (status) => {

    let mess = `Со счетом ${status.userX} - ${status.user0} выиграл игрок ${status.winner}`;

    return store.dispatch({ type: t.ADD_RESULT_SUCCESS, payload: mess })
};

