"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Counter
      <button onClick={() => setCount((c) => c + 1)}>➕ </button>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c - 1)}>➖  </button>
    </div>
  );
}
