// export const SUBMIT_CONTACT_REQUEST = "SUBMIT_CONTACT_REQUEST";
// export const SUBMIT_CONTACT_SUCCESS = "SUBMIT_CONTACT_SUCCESS";
// export const SUBMIT_CONTACT_FAILURE = "SUBMIT_CONTACT_FAILURE";


// export const submitContactRequest = (formData) => ({
//     type: SUBMIT_CONTACT_REQUEST,
//     payload: formData,
// });

// export const submitContactSuccess = (message) => ({
//     type: SUBMIT_CONTACT_SUCCESS,
//     payload: message,
// });

// export const submitContactFailure = (error) => ({
//     type: SUBMIT_CONTACT_FAILURE,
//     payload: error,
// });




export const SUBMIT_CONTACT_REQUEST = "SUBMIT_CONTACT_REQUEST";
export const SUBMIT_CONTACT_SUCCESS = "SUBMIT_CONTACT_SUCCESS";
export const SUBMIT_CONTACT_FAILURE = "SUBMIT_CONTACT_FAILURE";

export const SUBMIT_APPOINTMENT_REQUEST = "SUBMIT_APPOINTMENT_REQUEST";
export const SUBMIT_APPOINTMENT_SUCCESS = "SUBMIT_APPOINTMENT_SUCCESS";
export const SUBMIT_APPOINTMENT_FAILURE = "SUBMIT_APPOINTMENT_FAILURE";

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

// Eligibility actions
export const submitEligibilityRequest = (formData) => ({
    type: 'SUBMIT_ELIGIBILITY_REQUEST',
    payload: formData,
});

export const submitEligibilitySuccess = (message) => ({
    type: 'SUBMIT_ELIGIBILITY_SUCCESS',
    payload: message,
});

export const submitEligibilityFailure = (error) => ({
    type: 'SUBMIT_ELIGIBILITY_FAILURE',
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