import React from 'react'
import styled from 'styled-components'

const Errorp = styled.p`
font-size: 50px;
color: red;
text-align: center;
`

const Error = () => {
    return(
        <div>
            <Errorp>Error: Path does not exist!!!!!!!!!!!!!!</Errorp>
        </div>
    )
}

export default Error