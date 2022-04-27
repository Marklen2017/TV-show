import { Synchronous } from "../ActionCreatorFactory"

const ADD_IN_BAG = 'bagReducerDuck/ADD_IN_BAG';
const REMOVE_FROM_BAG = 'bagReducerDuck/REMOVE_FROM_BAG';


const defaultState = []

export default function bagReducerDuck(state = defaultState, { type, payload } = {}) {
	switch (type) {
		case ADD_IN_BAG: {
			return state.concat(payload)
		};
		case REMOVE_FROM_BAG: {
			return state.filter(gameObj => gameObj.id !== payload)
		};
		default: return state;
	}
}

export const addInBag = Synchronous(ADD_IN_BAG)
export const removeFromBag = Synchronous(REMOVE_FROM_BAG)