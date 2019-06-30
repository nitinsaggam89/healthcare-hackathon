import { ADD_USERID } from './actions';

export interface IAppState {
    userId: number
}
export const INITIAL_STATE: IAppState = {
    userId: 1
}
export function rootReducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case ADD_USERID: 
            return Object.assign({}, state, {
                userId: action.payload
            })
        default:
            return state
    }
}