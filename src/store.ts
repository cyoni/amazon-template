import { configureStore } from "@reduxjs/toolkit";
import GeneralReducer from "./reducers/general.reducer";
import createSagaMiddleware from "redux-saga";
import TaskSaga from "./sagas/task.saga";
import UserReducer from "./reducers/user.reducer";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    general: GeneralReducer,
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(TaskSaga);
