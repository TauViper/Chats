import { useState, FC } from 'react';

type Props = {
  onAdd: (message: string) => void;
};
export const InputPost: FC<Props> = ({ onAdd }) => {
  const [message, setMessage] = useState('');
  const onText = () => {
    if (message) {
      onAdd(message);
      setMessage('');
    }
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
      {message ? (
        <button type='submit' onClick={onText} style={{ cursor: 'pointer' }}>
          Add Post
        </button>
      ) : (
        <button disabled>Write Post</button>
      )}
    </div>
  );
};
