import {
    SUBMIT_POPUP_FORM_REQUEST,
    SUBMIT_POPUP_FORM_SUCCESS,
    SUBMIT_POPUP_FORM_FAILURE,
    CLEAR_MESSAGES
} from "../actions/contactActions";

const initialState = {
    loading: false,
    message: "",
    error: "",
};

const popUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_POPUP_FORM_REQUEST:
            return { ...state, loading: true, error: "" };

        case SUBMIT_POPUP_FORM_SUCCESS:
            return { ...state, loading: false, message: action.payload };

        case SUBMIT_POPUP_FORM_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case CLEAR_MESSAGES:
            return { ...state, message: "", error: "" };

        default:
            return state;
    }
};

export default popUpReducer;
