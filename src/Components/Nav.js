import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Nav = () => {
    return(
        <div>
            <NavLink to='/'>About</NavLink><br/>
            <NavLink to='/meme'>Meme</NavLink>
        </div>
    )
}

export default Nav