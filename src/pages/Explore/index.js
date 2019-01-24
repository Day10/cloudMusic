import React, { Component } from 'react';
import {Button} from 'antd-mobile';
import axios from 'axios'
import {getHomeData} from '../../actions/index'
import { store } from "../../store/configStore"
import { connect } from 'react-redux'

class Explore extends Component{
    constructor (props) {
        super(props);
    }
    componentDidMount() {
        this.props.getHomeData();
    }

    render() {
        return ( 
            <div> 
                {
                    this.props.explore.personalized.map(item => {
                        return (
                            <div key={item.id}>
                                <img src={item.picUrl} style={{ width: '40px', height: '40px'}}></img>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHomeData: () => {
            dispatch(getHomeData())
        }
    }
}

const ExploreContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Explore)
export default ExploreContainer;