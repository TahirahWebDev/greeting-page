"use client";
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Welcome to My Greeting Page!</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        {name && <h2 className="greeting">Hello, {name}!</h2>}
      </div>
    </div>
  );
}
