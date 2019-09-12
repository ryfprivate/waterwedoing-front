import React from 'react'
import Header from './Components/Header'
import logo from './logo.svg'
import './App.css'
import LocalMap from '../src/Components/LocalMap'
import styled from 'styled-components'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
require('dotenv').config()

const AppWrapper = styled.div`
    text-align: center;
    display: grid;
    grid-template-rows: auto 1fr;
`

const CanvasWrapper = styled.div`
    padding: 5vw;
    /* border: 1px solid green; */
`

function App() {
    return (
        <Router>
            {/* <AppWrapper className="App"> */}
            <AppWrapper>
                <div>
                    <Header />
                </div>
                <CanvasWrapper>
                    <LocalMap lat={'-37.812132'} long={'144.962217'} />
                </CanvasWrapper>
            </AppWrapper>
        </Router>
    )
}

export default App
