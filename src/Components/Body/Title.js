import React from "react";
import styled from 'styled-components'

const TheTitle = styled.h2`
    margin: 5px;
    text-decoration: underline grey;
`;

export default function Title(props) {
    return (
            <TheTitle>{props.title}</TheTitle>
    )
}