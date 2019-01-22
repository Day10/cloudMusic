import React, {Component} from 'react';
import { TabBar, Icon } from 'antd-mobile'
import './style.css'
import {withRouter} from "react-router-dom";

class BottomBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedTab: 'explore'
        };
    }

    tabClick(link) {
        this.setState({
            selectedTab: link
        });
        this.props.history.push(`/${link}`)
    }

    render() {
        const navs = [
            {
                title: '发现',
                icon: 'check',
                link: 'explore'
            },
            {
                title: '视频',
                icon: 'check',
                link: 'video'
            },
            {
                title: '我的',
                icon: 'check',
                link: 'mine'
            },
            {
                title: '朋友',
                icon: 'check',
                link: 'friends'
            },
            {
                title: '账号',
                icon: 'check',
                link: 'account'
            },
        ]
        return (
            <div className='bottonBar'>
                <TabBar 
                    barTintColor='#ececec'
                    tintColor='#e24e48'
                    unselectedTintColor='#555555'
                    onClick={({ item, key, keyPath }) => console.log(item, key, keyPath) }
                >
                    {
                        navs.map(nav => (
                            <TabBar.Item
                                key={nav.link}
                                title={nav.title}
                                icon={<Icon type="check"  style={{color: '#555555'}}/>}
                                selectedIcon={<Icon type="check" style={{color: '#e24e48'}}/>}
                                selected={this.state.selectedTab === nav.link}
                                onPress={e => this.tabClick(nav.link)}
                            >
                            </TabBar.Item>
                        ))
                    }
                </TabBar>
            </div>
        )
    }
    
}

export default withRouter(BottomBar)
