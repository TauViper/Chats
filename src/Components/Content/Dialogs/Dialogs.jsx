import React, { useState } from 'react';
import classes from './Dialogs.module.css';
import { DialogItem } from './DialogItem';
import { Message } from './Message';
// import { Data } from '../../Data';
import { useSelector } from 'react-redux';

export const Dialogs = () => {
  const dialog = useSelector((state) => state.post);
  const Item = dialog.DialogData.Dialog.map((item) => (
    <DialogItem key={item.id} id={item.id} name={item.name} />
  ));
  const [message, setMessage] = useState('');
  const [text, setText] = useState(dialog.DialogData.MessageText);
  const handleClick = () => {
    setText([
      ...text,
      {
        id: new Date(),
        message: message,
      },
    ]);
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
