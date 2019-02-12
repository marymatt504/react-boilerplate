import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchRestaurants() {
  return axios({
    method: "get",
    url: "/restaurants"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchRestaurants);
    // console.log('response.data from fetchRestaurants', response.data);
    const restaurantList = response.data;

    // dispatch a success action to the store with the new restaurants
    yield put({ type: "API_CALL_SUCCESS", restaurantList });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
