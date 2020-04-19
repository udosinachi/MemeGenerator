import React from 'react'
import styled from 'styled-components'

const Aboutimg = styled.img`
width: 80%;
height: auto;
`
const Bout = styled.div`
float: left;
width: 30%;
`

const About = () => {
    return(
        <div>
            <Bout>
                <Aboutimg src='/Asset/Img/pic.jpg' alt='pic'/>
                <h1>Name: Udosinachi</h1>
                <hr/>
            </Bout>
            <hr/>
            <h1>ABOUT</h1>
            <h3>I'm a frontend developer who is always eager to learn new things. </h3>
        </div>
    )
}

export default About