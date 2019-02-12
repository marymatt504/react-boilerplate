// action types
const API_CALL_REQUEST = 'API_CALL_REQUEST';
const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
const API_CALL_FAILURE = 'API_CALL_FAILURE';

// reducer with initial state
const initialState = {
  // fetching: false,
  restaurantList: null,
  error: null,
};

export default function restaurantListReducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, error: null };
    // return { ...state, fetching: true, error: null };

    case API_CALL_SUCCESS:
      return {
        ...state,
        // fetching: false,
        restaurantList: action.restaurantList,
      };
    case API_CALL_FAILURE:
      return {
        ...state,
        // fetching: false,
        restaurantList: null,
        error: action.error,
      };
    default:
      return state;
  }
}
