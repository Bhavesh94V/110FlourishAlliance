import {
    SUBMIT_CONTACT_REQUEST,
    SUBMIT_CONTACT_SUCCESS,
    SUBMIT_CONTACT_FAILURE,
    SUBMIT_APPOINTMENT_REQUEST,
    SUBMIT_APPOINTMENT_SUCCESS,
    SUBMIT_APPOINTMENT_FAILURE
} from "../actions/contactActions";

const initialState = {
    loading: false,
    message: "",
    error: "",
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_CONTACT_REQUEST:
        case 'SUBMIT_ELIGIBILITY_REQUEST':
        case SUBMIT_APPOINTMENT_REQUEST:
            return { ...state, loading: true, error: "" };
        case SUBMIT_CONTACT_SUCCESS:
        case 'SUBMIT_ELIGIBILITY_SUCCESS':
        case SUBMIT_APPOINTMENT_SUCCESS:
            return { ...state, loading: false, message: action.payload };
        case SUBMIT_CONTACT_FAILURE:
        case 'SUBMIT_ELIGIBILITY_FAILURE':
        case SUBMIT_APPOINTMENT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case 'CLEAR_MESSAGES':
            return {
                ...state,
                message: null,
                error: null
            };
        default:
            return state;
    }
};

export default contactReducer; 
