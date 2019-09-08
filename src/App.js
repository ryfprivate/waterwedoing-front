import React from 'react'
import FormInput from './Components/FormInput'
import './App.css'
import callApi from './services/callApi'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inSelect: true,
            chosenSuburb: '',
            url: '',
        }
        this.onButtonSubmit = this.onButtonSubmit.bind(this)
    }

    onButtonSubmit(result) {
        if (!result) {
            console.log('failed: ', result)
            return
        }
        this.setState({
            inSelect: false,
            chosenSuburb: result,
            url: callApi(result),
        })
    }

    render() {
        return (
            <Router>
                <div>
                    {this.state.inSelect ? (
                        <FormInput onSubmit={this.onButtonSubmit} />
                    ) : (
                        <div>
                            <a href={this.state.url}>
                                {this.state.chosenSuburb}
                            </a>
                        </div>
                    )}
                </div>
            </Router>
        )
    }
}

export default App
