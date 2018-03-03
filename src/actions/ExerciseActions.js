import {
  GET_EXERCISE_LIST_STARTED,
  GET_EXERCISE_LIST_COMPLETE,
  GET_EXERCISE_LIST_FAILED
} from './types';

export const getExercises = (ipAddr) => {
  let url = `http://${ipAddr}/exercises`
  console.log(url);
  return (dispatch) => {
    dispatch({type: GET_EXERCISE_LIST_STARTED});
    fetch (url)
    .then((response) => response.text())
    .then((text) => dispatch({type: GET_EXERCISE_LIST_COMPLETE, payload: text}))
    .catch((err) => {console.log(err);})
  }
};