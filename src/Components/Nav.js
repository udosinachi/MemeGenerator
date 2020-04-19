import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Hey = styled.div`
color: red;
align-item: center;
`

const Nav = () => {
    return(
        <Hey>
            <NavLink to='/'>About</NavLink><br/>
            <NavLink to='/meme'>Meme</NavLink>
        </Hey>
    )
}

export default Nav