// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to My Greeting Page!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      {name && <h2>Hello, {name}!</h2>}
    </div>
  );
}
