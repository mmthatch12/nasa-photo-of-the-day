import React, { useState } from "react";

export default function CountButton(props) {
    const[count, setCount] = useState(0)
    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Click to Count Stars!</button>
            <button onClick={() => setCount(0)}>Start Over</button>
        </div>
    )
}