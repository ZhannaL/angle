import {
	GOOD_ADDED
} from "./acuteConstants";

const initialState = {

}

const acuteReducer = (state = initialState, action) => {
	switch (action.type) {
		case GOOD_ADDED:
			return {
				...state,

			}
		default:
			return state
	}
}

export default acuteReducer
