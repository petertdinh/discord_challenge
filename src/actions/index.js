import * as TYPES from './types';

export const createTab = (tab) => {
	if(tab) {
		return (dispatch) => {
			dispatch({type: TYPES.CREATE_TAB, payload: tab});
			dispatch({type: TYPES.CHANGE_INPUT, payload: ''});
		}
	}
}

export const changeInput = ({target}) => {
	return (dispatch) => {
		dispatch({type: TYPES.CHANGE_INPUT, payload: target.value});
	}
}

export const setActiveTab = (tab) => {
	console.log(tab);
	return (dispatch) => {
		dispatch({type: TYPES.SET_ACTIVE_TAB, payload: tab});
	}
}

export const removeTab = (tab) => {
	return (dispatch) => {
		dispatch({type: TYPES.REMOVE_TAB, payload: tab});
	}
}