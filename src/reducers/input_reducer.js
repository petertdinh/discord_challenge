import * as TYPES from '../actions/types';

export default (state = {
	input: ''
}, action) => {
	switch(action.type) {
		case TYPES.CHANGE_INPUT:
			return {...state, input: action.payload};
		default:
			return state;
	}
}