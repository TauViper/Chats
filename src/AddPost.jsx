import { Data } from './Components/Data';

export const AddPost = (key,postMessage) => {
  let newPost = {
    key: key,
    message: postMessage
  };
  Data.ProfileData.PostText.push(newPost);
  console.log(newPost);
};
