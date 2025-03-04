import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
    SUBMIT_CONTACT_REQUEST,
    submitContactSuccess,
    submitContactFailure,

    submitEligibilitySuccess,
    submitEligibilityFailure,

    SUBMIT_APPOINTMENT_REQUEST,
    submitAppointmentSuccess,
    submitAppointmentFailure,

    SUBMIT_POPUP_FORM_REQUEST,
    submitPopUpFormSuccess,
    submitPopUpFormFailure
} from "../actions/contactActions";

import {
    submitEligibilityForm,
    submitAppointmentForm,
    submitPopUpForm
} from "../../helpers/api";

function* submitContactSaga(action) {
    try {
        const response = yield call(axios.post, "http://localhost:5000/api/contact", action.payload);
        yield put(submitContactSuccess(response.data.message));
    } catch (error) {
        yield put(submitContactFailure("Failed to submit form."));
    }
}

function* handleSubmitEligibility(action) {
    try {
        yield call(submitEligibilityForm, action.payload);
        yield put(submitEligibilitySuccess('Form submitted successfully!'));
    } catch (error) {
        yield put(submitEligibilityFailure(error.message));
    }
}

function* submitAppointmentSaga(action) {
    try {
        const response = yield call(submitAppointmentForm, action.payload);
        yield put(submitAppointmentSuccess(response.data.message));
    } catch (error) {
        yield put(submitAppointmentFailure("Failed to book appointment."));
    }
}

function* handleSubmitPopUpForm(action) {
    try {
        yield call(submitPopUpForm, action.payload);
        yield put(submitPopUpFormSuccess("Form submitted successfully!"));
    } catch (error) {
        yield put(submitPopUpFormFailure("Failed to submit form. Try again."));
    }
}

export function* watchPopUpFormSubmission() {
    yield takeLatest(SUBMIT_POPUP_FORM_REQUEST, handleSubmitPopUpForm);
}

export function* watchContactSaga() {
    yield takeLatest(SUBMIT_CONTACT_REQUEST, submitContactSaga);
}

export function* watchEligibilitySaga() {
    yield takeLatest('SUBMIT_ELIGIBILITY_REQUEST', handleSubmitEligibility);
}

export function* watchAppointmentSaga() {
    yield takeLatest(SUBMIT_APPOINTMENT_REQUEST, submitAppointmentSaga);
}