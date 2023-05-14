import { pagesSize } from '../Content/Users/PagesCount';

export const HTTPS = 'https://social-network.samuraijs.com/api/1.0/';
export const USER = 'users';
export const PROFILE = 'profile/';
export const AUTH = 'auth/me';
// export const PAGE = '?page=5';
export const COUNT = `&count=${pagesSize}`;
// &count=5

export const getApiResource = async (url: string) => {
  try {
    const res = await fetch(url, { credentials: 'include' });

    if (!res.ok) {
      console.error(res.status);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.error((error as Error).message);
    return false;
  }
};

/*
  dispatch({
    type: 'create'
  })


  actionCreate = () => ({type: 'create'})

  dispatch(action())


  reducer(state, actonion)
*/
