import {
	CONTENT_SELECTED
} from "./MenuConstants";

export const selectСontent = (content) => {
	console.log("action=", content)
	return {
		type: CONTENT_SELECTED,
		payload:{
			content
		}
	}
}
