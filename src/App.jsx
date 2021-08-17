import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Details from './components/Details'

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/details/:id">
                    <Details/>
                </Route>
            </Switch>
        </div>

        // let id = 1350
    )
}

export default App
