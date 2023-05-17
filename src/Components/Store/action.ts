import { nanoid } from 'nanoid';
import {
  ADD_MESSAGE,
  // ADD_POST,
  // FOLLOWED,
  // UNFOLLOWED,
  // CURRENT_PAGE,
  // GET_TOTAL,
  // GET_USERS,
  // SHOW_PRELOADER,
  // GET_USER_PROFILE,
  // AUTH_USER,
} from './constants';
// import { getApiResource } from '../Api/api';
// import { Dispatch } from 'redux';
// import axios from 'axios';

// export const addPost = (message: string) => ({
//   type: ADD_POST,
//   payload: {
//     id: nanoid(),
//     message,
//   },
// });

export const addMessage = (message: string) => ({
  type: ADD_MESSAGE,
  payload: {
    id: nanoid(),
    message,
  },
});

// export const follow = (id: number) => ({
//   type: FOLLOWED,
//   payload: id,
// });
// export const unfollow = (id: number) => ({
//   type: UNFOLLOWED,
//   payload: id,
// });
// export const showPreloader = (isLoader: boolean) => ({
//   type: SHOW_PRELOADER,
//   payload: isLoader,
// });

// export const getRes = (url: string) => {
//   return async (dispatch: Dispatch) => {
//     dispatch(showPreloader(true));
//     const res = await getApiResource(url);

//     dispatch({
//       type: GET_USERS,
//       payload: res.items,
//     });
//     dispatch(showPreloader(false));
//   };
// };
// export const getTotal = (url: string) => {
//   return async (dispatch: Dispatch) => {
//     const res = await getApiResource(url);
//     dispatch({
//       type: GET_TOTAL,
//       payload: res.totalCount,
//     });
//   };
// };
// export const currentPage = (num: number) => ({
//   type: CURRENT_PAGE,
//   payload: num,
// });
// export const getUserProf = (url: string) => {
//   return async (dispatch: Dispatch) => {
//     const res = await getApiResource(url);
//     // console.log(res);

//     dispatch({
//       type: GET_USER_PROFILE,
//       payload: res,
//     });
//   };
// };

// export const authUser = (url: string) => {
//   return async (dispatch: Dispatch) => {
//     const res = await getApiResource(url);
//     if (res.resultCode === 0) {
//       const { id, login, email } = res.data;
//       dispatch({
//         type: AUTH_USER,
//         payload: { id, login, email },
//       });
//     }
//     return false;
//   };
// };

/**
 *
 * @param axios {*} url  - использование axios
 * @returns - получение объекта из запроса
 */
// export const authUser = (url) => {
//   return async (dispatch) => {
//     axios.get(url, { withCredentials: true }).then((response) => {
//       if (response.data.resultCode === 0) {
//         const { id, login, email } = response.data.data;
//         dispatch({
//           type: AUTH_USER,
//           payload: { id, login, email },
//         });
//       }
//       return false;
//     });
//   };
// };
