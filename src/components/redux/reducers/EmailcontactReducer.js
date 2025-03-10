import {
    SUBMIT_EMAIL_REQUEST,
    SUBMIT_EMAIL_SUCCESS,
    SUBMIT_EMAIL_FAILURE
} from "../actions/contactActions";

const initialState = {
    loading: false,
    message: null,
    error: null,
};

const EmailcontactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_EMAIL_REQUEST:
            return { ...state, loading: true, message: null, error: null };
        case SUBMIT_EMAIL_SUCCESS:
            return { ...state, loading: false, message: action.payload };
        case SUBMIT_EMAIL_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default EmailcontactReducer;
