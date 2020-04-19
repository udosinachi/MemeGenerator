import React from 'react'
import Meme from './Meme'
import Header from './Header'
import styled from 'styled-components'
import { BrowserRouter, Route} from 'react-router-dom'

function App(){
    return(
        <div>
            <Header />
            <Meme />
        </div>
    )
}

export default App