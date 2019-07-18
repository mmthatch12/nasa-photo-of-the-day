import React, { useState } from "react";
import Thebutton from '../Styles/Button'

export default function CountButton(props) {
    const[count, setCount] = useState(0)
    return (
        <div>
            <div>Count: {count}</div>
            <Thebutton onClick={() => setCount(count + 1)}>Click to Count Stars!</Thebutton>
            <Thebutton onClick={() => setCount(0)}>Start Over</Thebutton>
        </div>
    )
}