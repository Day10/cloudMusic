import React, { Component } from 'react'
import Router from './router'

class App extends Component{
    render() {
        return (
            <div>
                 <Router/>
            </div>
        )
    }
}
module.hot.accept();

export default App;
