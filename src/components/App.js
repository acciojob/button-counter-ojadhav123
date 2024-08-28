import React, { useState } from 'react';

function ButtonCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>Button clicked {count} times.</p>
    </div>
  );
}

export default ButtonCounter;
