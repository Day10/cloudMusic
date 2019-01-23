import React, { Component } from 'react';
import {Button} from 'antd-mobile';
import axios from 'axios'
import {getHomeData} from '../../actions/index'
import {store} from "../../store/configStore"

class Explore extends Component{
    constructor () {
        super();
        this.state = {
            personalized: []
        }
    }
    componentDidMount() {
        store.dispatch(getHomeData());
        const state = store.getState()
        this.setState = {
            personalized: state.explore.personalized
        };
        console.log(this.state, 123)
    }
    render() {
        return ( 
            <div>
                {
                    this.state.personalized.length > 0 && this.state.personalized.data.result.map(item => {
                        return <div key={item.id}>item.name</div>
                    })
                }
            </div>
        )
    }
}

export default Explore;