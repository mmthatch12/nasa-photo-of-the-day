import React, { useState } from "react";
import Thebutton from '../Styles/Button'
import styled from 'styled-components'

const TheCountButton = styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
`;

export default function CountButton(props) {
    const[count, setCount] = useState(0)
    return (
        <TheCountButton>
            <div>Count: {count}</div>
            <Thebutton onClick={() => setCount(count + 1)}>Click to Count Stars!</Thebutton>
            <Thebutton onClick={() => setCount(0)}>Start Over</Thebutton>
        </TheCountButton>
    )
}