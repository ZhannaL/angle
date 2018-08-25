import {SCROLLED} from "./AppConstants";
const initialState = {

}
const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SCROLLED:
		console.log("appReducer=", action.payload.scrollTop)
			return {
				...state,
				scrollTop:action.payload.scrollTop
			}
		default:
			return state
	}
}

export default appReducer
