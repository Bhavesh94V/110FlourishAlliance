import {
    SUBMIT_APPOINTMENT_REQUEST,
    SUBMIT_APPOINTMENT_SUCCESS,
    SUBMIT_APPOINTMENT_FAILURE,
    CLEAR_MESSAGES
} from "../actions/contactActions";

const initialState = {
    loading: false,
    message: "",
    error: "",
};

const appointmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_APPOINTMENT_REQUEST:
            return { ...state, loading: true, error: "" };

        case SUBMIT_APPOINTMENT_SUCCESS:
            return { ...state, loading: false, message: action.payload };

        case SUBMIT_APPOINTMENT_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case CLEAR_MESSAGES:
            return { ...state, message: "", error: "" };

        default:
            return state;
    }
};

export default appointmentReducer;
