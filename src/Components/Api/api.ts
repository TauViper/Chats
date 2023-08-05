// import { pagesSize } from '../Content/Users/PagesCount';
import { LoginBody } from '../Store/types';

export const HTTPS = 'https://social-network.samuraijs.com/api/1.0/';
export const USER = 'users';
export const PROFILE = 'profile/';
export const AUTH = 'auth/me';
export const LOGIN = 'auth/login';
export const FOLLOWED = 'follow/';
// export const COUNT = `&count=${pagesSize}`;

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

export const postUserFollowed = async (url: string) => {
  try {
    const post = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': 'feb85ae3-dbb4-4259-8906-461cc8e9ca47',
      },
    });
    if (!post.ok) {
      console.error(post.status);
      return false;
    }
    return await post.json();
  } catch (error) {
    console.error((error as Error).message);
    return false;
  }
};

export const deleteUserFollowed = async (url: string) => {
  try {
    const post = await fetch(url, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': 'feb85ae3-dbb4-4259-8906-461cc8e9ca47',
      },
    });

    if (!post.ok) {
      console.error(post.status);
      return false;
    }

    return await post.json();
  } catch (error) {
    console.error((error as Error).message);
    return false;
  }
};
export const loginUser = async (url: string, data: LoginBody) => {
  try {
    const login = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': 'feb85ae3-dbb4-4259-8906-461cc8e9ca47',
      },
    });
    if (!login.ok) {
      console.error(login.status);
      return false;
    }

    return await login.json();
  } catch (error) {
    console.error((error as Error).message);
    return false;
  }
};

export const logout = async (url: string) => {
  try {
    const post = await fetch(url, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': 'feb85ae3-dbb4-4259-8906-461cc8e9ca47',
      },
    });

    if (!post.ok) {
      console.error(post.status);
      return false;
    }

    return await post.json();
  } catch (error) {
    console.error((error as Error).message);
    return false;
  }
};

// const test = deleteUserFollowed(
//   'https://social-network.samuraijs.com/api/1.0/follow/29175'
// );
// const getTest = async (url: string) => {
//   const res = await deleteUserFollowed(url);

//   return res.data;
// };
// console.log(
//   getTest('https://social-network.samuraijs.com/api/1.0/follow/29175')
// );
