import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './style.css'
import {AppProvider} from './context'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDom.render(
    
        <AppProvider>
            <Router>
              <App/>
            </Router>
            
        </AppProvider>
    ,
         document.getElementById('root'))