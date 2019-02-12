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
      console.log('api cal request', action.type);
      return { ...state, error: null };
    // return { ...state, fetching: true, error: null };

    case API_CALL_SUCCESS:
      console.log(action);
      // after successfully fetching the data, the action associated with type API_CALL_SUCCESS
      // does not have the payload attached to it
      return {
        ...state,
        // fetching: false,
        restaurantList: action.restaurantList,
      };
    case API_CALL_FAILURE:
      console.log(action.type);
      return {
        ...state,
        // fetching: false,
        restaurantList: null,
        error: action.error,
      };
    default:
      console.log(action.type);
      return state;
  }
}
