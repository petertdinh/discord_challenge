import * as TYPES from '../actions/types';

export default (state = {
	tabs: {},
	activeTab: '',
}, action) => {
	switch(action.type) {
		case TYPES.CREATE_TAB:
			const content = `${action.payload}: `;
			return {...state, tabs: {...state.tabs, [action.payload]: {name: action.payload, content}}};
		case TYPES.SET_ACTIVE_TAB:
			return {...state, activeTab: state.tabs[action.payload].content};
		case TYPES.REMOVE_TAB:
			const tabsCopy = {...state.tabs};
			delete tabsCopy[action.payload];
			if(state.activeTab === state.tabs[action.payload].content) {
				return {...state, activeTab: '', tabs: tabsCopy};
			}
			return {...state, tabs: tabsCopy};
		default:
			return state;
	}
};