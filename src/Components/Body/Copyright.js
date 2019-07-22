import React from 'react'
import styled from 'styled-components'

const TheCopy = styled.h4`
    margin-top: 0;
`;

export default function Copyright( {copy} ) {
    return (
        <TheCopy>© {copy}</TheCopy>
    )
}