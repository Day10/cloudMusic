import React, { Component } from 'react';
import {Button} from 'antd-mobile';
import axios from 'axios'

class Explore extends Component{
    getInfo(e) {
        axios.get('http://localhost:3000/search?keywords=海阔天空')
        .then(response => {
            console.log(response.data)
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                Explore
                <Button onClick={e => this.getInfo(e)}>get</Button>
            </div>
        )
    }
}
export default Explore;