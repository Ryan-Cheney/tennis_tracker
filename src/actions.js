// Action Types
export const ADD_SERVE = 'ADD_SERVE';

// Action Creators
export const addServe = serveResult => ({
  type: ADD_SERVE,
  payload: serveResult,
});
