import React, { useState } from 'react';

export const InputPost = ({ onAdd }) => {
  const [message, setMessage] = useState('');
  const onText = () => {
    onAdd(message);
    setMessage('');
  };
  return (
    <div>
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button type='submit' onClick={onText}>
        Add Posts
      </button>
    </div>
  );
};
