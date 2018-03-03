import {
  GET_SENSOR_LIST_STARTED,
  GET_SENSOR_LIST_COMPLETE,
  GET_SENSOR_STARTED,
  GET_SENSOR_COMPLETE
} from './types';

export const getSensorList = (ipAddr) => {
  let url = `http://${ipAddr}/sensors`;
  console.log(url);
  return (dispatch) => {
    dispatch({type: GET_SENSOR_LIST_STARTED});
    fetch (url)
    .then(response => response.text())
    .then((text) => dispatch({type: GET_SENSOR_LIST_COMPLETE, payload: text}))
    .catch((err) => {console.log(err);})
  }
};

export const getSensor = (ipAddr, sensor) => {
  let url = `http://${ipAddr}/sensor/${sensor}`
  console.log(url);
  return (dispatch) => {
    dispatch({type: GET_SENSOR_STARTED});
    fetch (url)
    .then(response => response.text())
    .then((text) => dispatch({type: GET_SENSOR_COMPLETE, payload: text}))
    .catch((err) => {console.log(err);})
  }
};