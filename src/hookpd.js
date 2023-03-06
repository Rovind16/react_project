import React, { useState } from 'react';

function Hook() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Product Added {count} $</p>
      <button onClick={() => setCount(count + 100)}>
        Add
      </button>
      <button onClick={() => setCount(count -100)}>
       Sub
      </button>
    </div>
  );
}
export default Hook;