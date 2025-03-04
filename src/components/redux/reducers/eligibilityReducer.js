import {
    SUBMIT_ELIGIBILITY_REQUEST,
    SUBMIT_ELIGIBILITY_SUCCESS,
    SUBMIT_ELIGIBILITY_FAILURE,
    CLEAR_MESSAGES
} from "../actions/contactActions";

const initialState = {
    loading: false,
    message: "",
    error: "",
};

const eligibilityReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_ELIGIBILITY_REQUEST:
            return { ...state, loading: true, error: "" };

        case SUBMIT_ELIGIBILITY_SUCCESS:
            return { ...state, loading: false, message: action.payload };

        case SUBMIT_ELIGIBILITY_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case CLEAR_MESSAGES:
            return { ...state, message: "", error: "" };

        default:
            return state;
    }
};

export default eligibilityReducer;
