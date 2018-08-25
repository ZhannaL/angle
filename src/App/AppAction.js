import {SCROLLED} from "./AppConstants";

export const setScroll = (scrollTop) => {
	return {
	    type: SCROLLED,
		payload:{
			scrollTop
		}
	}
}
