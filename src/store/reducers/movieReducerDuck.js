import { Asynchronous } from "../ActionCreatorFactory"

const SET_FEATURED = 'movieReducer/SET_FEATURED';
const SET_TRENDING = 'movieReducer/SET_TRENDING';


const defaultState = {
	trendingFeatured:{},
	trendingMovie:[],
}

export default function authReducer(state = defaultState, { type, payload } = {}) {
	switch (type) {
		case SET_FEATURED: {
			return { 
				...state,
				trendingFeatured: payload
			}
		}
		case SET_TRENDING: {
			return { 
				...state,
				trendingMovie: payload
			}
		}
		default: return state;
	}
}

export const setFeatured = Asynchronous(SET_FEATURED)
export const setTrending = Asynchronous(SET_TRENDING)



