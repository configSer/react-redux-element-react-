

const ADD_COUNT = 'ADD_COUNT';
const DEL_COUNT = 'DEL_COUNT';

export function counter (state=0,action) {
    switch (action.type) {
        case ADD_COUNT:
            return state + 1;
        case DEL_COUNT:
            return state - 1;
        default:
            return state;
    }
}

export function addCount () {
    return {type:ADD_COUNT}
}
export function delCount () {
    return {type:DEL_COUNT}
}

export function addCountAsync () {
    return dispatch => {
        setTimeout(() => {
            dispatch(addCount())
        },1000)
    }
}