export const CLEAR_MESSAGES = "CLEAR_MESSAGES";

export const SUBMIT_CONTACT_REQUEST = "SUBMIT_CONTACT_REQUEST";
export const SUBMIT_CONTACT_SUCCESS = "SUBMIT_CONTACT_SUCCESS";
export const SUBMIT_CONTACT_FAILURE = "SUBMIT_CONTACT_FAILURE";

export const SUBMIT_APPOINTMENT_REQUEST = "SUBMIT_APPOINTMENT_REQUEST";
export const SUBMIT_APPOINTMENT_SUCCESS = "SUBMIT_APPOINTMENT_SUCCESS";
export const SUBMIT_APPOINTMENT_FAILURE = "SUBMIT_APPOINTMENT_FAILURE";

export const SUBMIT_POPUP_FORM_REQUEST = "SUBMIT_POPUP_FORM_REQUEST";
export const SUBMIT_POPUP_FORM_SUCCESS = "SUBMIT_POPUP_FORM_SUCCESS";
export const SUBMIT_POPUP_FORM_FAILURE = "SUBMIT_POPUP_FORM_FAILURE";

export const SUBMIT_ELIGIBILITY_REQUEST = "SUBMIT_ELIGIBILITY_REQUEST";
export const SUBMIT_ELIGIBILITY_SUCCESS = "SUBMIT_ELIGIBILITY_SUCCESS";
export const SUBMIT_ELIGIBILITY_FAILURE = "SUBMIT_ELIGIBILITY_FAILURE";

export const SUBMIT_EMAIL_REQUEST = "SUBMIT_EMAIL_REQUEST";
export const SUBMIT_EMAIL_SUCCESS = "SUBMIT_EMAIL_SUCCESS";
export const SUBMIT_EMAIL_FAILURE = "SUBMIT_EMAIL_FAILURE";


export const submitContactRequest = (formData) => ({
    type: SUBMIT_CONTACT_REQUEST,
    payload: formData,
});

export const submitContactSuccess = (message) => ({
    type: SUBMIT_CONTACT_SUCCESS,
    payload: message,
});

export const submitContactFailure = (error) => ({
    type: SUBMIT_CONTACT_FAILURE,
    payload: error,
});

export const submitEligibilityRequest = (formData) => ({
    type: SUBMIT_ELIGIBILITY_REQUEST,
    payload: formData,
});

export const submitEligibilitySuccess = (message) => ({
    type: SUBMIT_ELIGIBILITY_SUCCESS,
    payload: message,
});

export const submitEligibilityFailure = (error) => ({
    type: SUBMIT_ELIGIBILITY_FAILURE,
    payload: error,
});


export const submitAppointmentRequest = (formData) => ({
    type: SUBMIT_APPOINTMENT_REQUEST,
    payload: formData,
});

export const submitAppointmentSuccess = (message) => ({
    type: SUBMIT_APPOINTMENT_SUCCESS,
    payload: message,
});

export const submitAppointmentFailure = (error) => ({
    type: SUBMIT_APPOINTMENT_FAILURE,
    payload: error,
});


export const submitPopUpFormRequest = (formData) => ({
    type: SUBMIT_POPUP_FORM_REQUEST,
    payload: formData,
});

export const submitPopUpFormSuccess = (message) => ({
    type: SUBMIT_POPUP_FORM_SUCCESS,
    payload: message,
});

export const submitPopUpFormFailure = (error) => ({
    type: SUBMIT_POPUP_FORM_FAILURE,
    payload: error,
});

export const submitEmailRequest = (formData) => ({
    type: SUBMIT_EMAIL_REQUEST,
    payload: formData,
});

export const submitEmailSuccess = (message) => ({
    type: SUBMIT_EMAIL_SUCCESS,
    payload: message,
});

export const submitEmailFailure = (error) => ({
    type: SUBMIT_EMAIL_FAILURE,
    payload: error,
});



export const clearMessages = () => ({
    type: CLEAR_MESSAGES,
});