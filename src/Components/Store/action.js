import { nanoid } from 'nanoid';
import {
  ADD_MESSAGE,
  ADD_POST,
  CHANGE_BUTTON,
  CURRENT_PAGE,
  GET_TOTAL,
  GET_USERS,
} from './constants';
import {
  // COUNT,
  HTTPS,
  //  PAGE,
  USER,
  getApiResource,
} from '../Api/api';

export const addPost = (message) => ({
  type: ADD_POST,
  payload: {
    id: nanoid(),
    message,
  },
});
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: {
    id: nanoid(),
    message,
  },
});

export const changeButton = (id) => ({
  type: CHANGE_BUTTON,
  payload: id,
});
// export const getRes = (item) => ({
//   type: GET_USERS,
//   payload: item,
// });
export const getRes = (url) => {
  return async (dispatch) => {
    const res = await getApiResource(url);
    // const users = res.items;
    // const total = res.totalCount;
    dispatch({
      type: GET_USERS,
      payload: res.items,
    });
  };
};
export const getTotal = () => {
  return async (dispatch) => {
    const res = await getApiResource(HTTPS + USER);
    // const users = res.items;
    // const total = res.totalCount;
    dispatch({
      type: GET_TOTAL,
      payload: res.totalCount,
    });
  };
};
export const currentPage = (num) => ({
  type: CURRENT_PAGE,
  payload: num,
});
