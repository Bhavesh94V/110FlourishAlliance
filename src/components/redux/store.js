import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import contactReducer from "./reducers/contactReducer";
import { watchContactSaga, watchEligibilitySaga, watchAppointmentSaga } from "./sagas/contactSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        contact: contactReducer,
        eligibility: contactReducer,
        appointment: contactReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchContactSaga);
sagaMiddleware.run(watchEligibilitySaga);
sagaMiddleware.run(watchAppointmentSaga);

export default store;