import { ADD_SERVE } from './actions';

const initialState = {
  serves: [],
};

function servesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVE:
      return {
        ...state,
        serves: [...state.serves, action.payload],
      };
    default:
      return state;
  }
}

export default servesReducer;