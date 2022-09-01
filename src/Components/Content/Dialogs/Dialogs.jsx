import React from 'react';
import classes from './Dialogs.module.css';
import { DialogItem } from './DialogItem';
import { Message } from './Message';
import { Data } from '../../Data';

const Item = Data.DialogData.Dialog.map((item) => (
  <DialogItem key={item.id} id={item.id} name={item.name} />
));
const MessageVal = Data.DialogData.MessageText.map((item) => (
  <Message key={item.key} message={item.message} />
));

export const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{Item}</div>
      <div className={classes.messages}>{MessageVal}</div>
    </div>
  );
};
