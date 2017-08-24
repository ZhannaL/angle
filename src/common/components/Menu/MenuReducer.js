import {
	CONTENT_SELECTED
} from "./MenuConstants.js";

const initialState = {

}

const menuReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONTENT_SELECTED:
		console.log("menuReducer=", action.payload.content)
			return {
				...state,
				content:action.payload.content
			}
		default:
			return state
	}
}

export default menuReducer
