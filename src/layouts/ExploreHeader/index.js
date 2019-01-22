import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon, Tabs } from 'antd-mobile'
import SearchInput from '../SearchInput'
import './style.css'


const ExploreHeader = () => {
    const tabs = [
        { title: '个性推荐', sub: '1' },
        { title: '排行榜', sub: '2' },
    ];
    return (
        <div>
            <SearchInput />
            <div className='tab-wrap'>
                <Tabs tabs={tabs}
                    initialPage={1}
                    tabBarBackgroundColor="#e24e48"
                    tabBarActiveTextColor="#fff"
                    tabBarInactiveTextColor="#fff"
                    tabBarUnderlineStyle={{
                        color: "#fff",
                        border: '1px #fff solid'
                    }}
                >
                </Tabs>
            </div>
        </div>
    )
}

export default ExploreHeader