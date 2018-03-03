import { 
  ADDR_CHANGED
 } from './types';

export const addrChanged = (text) => {
  return {
    type: ADDR_CHANGED,
    payload: text
  }
};
