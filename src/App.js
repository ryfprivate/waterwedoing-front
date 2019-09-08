import React from 'react'
import FormInput from './Components/FormInput'
import './App.css'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div>
                <FormInput />
            </div>
        </Router>
    )
}

export default App
