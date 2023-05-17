import { useState, FC } from 'react';
import classes from './Dialogs.module.css';
import { DialogItem } from './DialogItem';
import { Message } from './Message';
import { Data } from '../../Data';
import { StoreState } from 'src/Components/Store';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from 'src/Components/Store/messageReducer';
import { nanoid } from 'nanoid';
// import { addMessage } from '../../Store/action';

export const Dialogs: FC = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const dialog = useSelector(() => Data);
  const text = useSelector((state: StoreState) => state.message.messages);
  // console.log(text);

  const Item = dialog.map((item) => (
    <DialogItem key={item.id} id={item.id} name={item.name} />
  ));

  const handleClick = () => {
    if (message) {
      dispatch(
        addMessage({
          id: nanoid(),
          message,
        })
      );
      setMessage('');
    }
    setMessage('');
  };

  const MessageVal = text.map((post) => (
    <Message key={post.id} message={post.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{Item}</div>
      <div className={classes.messages}>
        {MessageVal}
        <>
          <input
            type='text'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button type='submit' onClick={handleClick}>
            Add Message
          </button>
        </>
      </div>
    </div>
  );
};
