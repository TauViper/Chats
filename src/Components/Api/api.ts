// import { pagesSize } from '../Content/Users/PagesCount';
import { LoginBody } from '../Store/types';

export const HTTPS = 'https://social-network.samuraijs.com/api/1.0/';
export const USER = 'users';
export const PROFILE = 'profile/';
export const AUTH = 'auth/me';
export const LOGIN = 'auth/login';
export const FOLLOWED = 'follow/';
export const FOTO = 'photo';

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

export const postUserFoto = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const put = await fetch(HTTPS + PROFILE + FOTO, {
      method: 'PUT',
      body: formData,

      credentials: 'include',
      headers: {
        // 'Content-Type': 'multipart/form-data',
        'API-KEY': 'feb85ae3-dbb4-4259-8906-461cc8e9ca47',
      },
    });

    if (!put.ok) {
      console.error(put.status);
      return false;
    }
    return await put.json();
  } catch (error) {
    console.error((error as Error).message);
    return false;
  }
};
