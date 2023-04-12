import { pagesSize } from '../Content/Users/PagesCount';

export const HTTPS = 'https://social-network.samuraijs.com/api/1.0/';
export const USER = 'users';
// export const PAGE = '?page=5';
export const COUNT = `&count=${pagesSize}`;
// &count=5

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    // console.log(res);

    if (!res.ok) {
      console.error(res.status);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.error(error.message);
    return false;
  }
};
