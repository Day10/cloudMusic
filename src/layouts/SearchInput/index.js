import React, {Component} from 'react';
import './style.css'
import { Icon } from 'antd-mobile';

class SearchInput extends Component {
    constructor () {
        super();
        this.state = {
            value: ''
        }
    }

    onChange (e) {
        this.setState({
            value: e.target.value
        })
    }

    directToMusicInfo(e) {
        console.log(e)
    }

    render () {
        return (
            <div className='wrap'>
                <input className='search-input'
                    placeholder="Search"
                    value={this.state.value}
                    onChange={e => this.onChange(e)}
                >
                </input>
                <Icon type='ellipsis'
                    className='music-info-icon'
                    onClick={e => this.directToMusicInfo(e)}
                >
                </Icon>
            </div>
        )
    }
    
}

export default SearchInput