"use client";

import { useState } from "react";

export default function Counter({users}) {
  const [counter, setCounter] = useState(0);
  return (
    <button onClick={() => setCounter((counter) => counter + 1)}>
      {counter}
    </button>
  );
}
