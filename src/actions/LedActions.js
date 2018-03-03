import {
  LED_CHANGE_STARTED,
  LED_CHANGE_COMPLETE
} from './types';

export const changeLed = (ipAddr, led, state) => {
  let url = `http://${ipAddr}/led/${state}/${led}`
  console.log(url);
  return (dispatch) => {
    dispatch({type: LED_CHANGE_STARTED});
    fetch (url)
    .then(dispatch({type: LED_CHANGE_COMPLETE}))
    .catch((err) => {console.log(err);})
  }
};