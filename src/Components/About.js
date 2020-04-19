import React from 'react'
import styled from 'styled-components'

const Aboutimg = styled.img`
width: 30%;
height: auto;
`

const About = () => {
    return(
        <div>
            <Aboutimg src='/Asset/Img/pic.jpg' alt='pic'/>
            <p>About myself</p>
        </div>
    )
}

export default About