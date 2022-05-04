import React from 'react'
import {Switch, Route } from 'react-router-dom'


// COMPONENTS
import Home from './components/Home'
import Board from './components/Board'

const App = () => {
    return (

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/board" component={Board}/>
            </Switch> 
    )   
}

export default App
