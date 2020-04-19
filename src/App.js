import React from 'react'
import Meme from './Meme'
import Header from './Header'
import styled from 'styled-components'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './Components/About'
import Error from './Components/Error'
import Nav from './Components/Nav'

function App(){
    return(
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route path='/' component={About} exact />
                <Route path='/meme/' component={Header} />
                <Route component={Error} />
             </Switch>
             <Route path='/meme' component={Meme} />
             
        </BrowserRouter>
    
    )
}

export default App