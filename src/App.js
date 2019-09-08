import React from 'react'
import FormInput from './Components/FormInput'
import './App.css'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inSelect: true,
            chosenSuburb: '',
        }
        this.onButtonSubmit = this.onButtonSubmit.bind(this)
    }

    onButtonSubmit(result) {
        console.log('result: ', result)
        if (!result) {
            console.log('failed: ', result)
            return
        }
        this.setState({ inSelect: false, chosenSuburb: result })
    }

    render() {
        return (
            <Router>
                <div>
                    <FormInput
                        onSubmit={() => {
                            this.onButtonSubmit(this.state.chosenSuburb)
                        }}
                    />
                    {/* {this.state.inSelect ? (
                        <FormInput onSubmit={this.onButtonSubmit} />
                    ) : (
                        <div>
                            <h1>{this.state.chosenSuburb}</h1>
                        </div>
                    )} */}
                </div>
            </Router>
        )
    }
}

export default App
