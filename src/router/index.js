import React from 'react'
import {  Route, BrowserRouter, Switch, Live } from 'react-router-dom'

import ExploreHeader from '../layouts/ExploreHeader'
import BottomBar from '../layouts/BottomBar'
import Explore from '../pages/Explore'
import Mine from '../pages/Mine'
import Friends from '../pages/Friends'
import Video from '../pages/Video'
import Account from '../pages/Account'


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path='/explore' component={ExploreHeader}></Route>
                <Route path='/mine' component={ExploreHeader}></Route>
                <Route path='/friends' component={ExploreHeader}></Route>
                <Route path='/video' component={ExploreHeader}></Route>
                <Route path='/account' component={ExploreHeader}></Route>
                <Route exact={true} path='/' component={ExploreHeader}></Route>
            </Switch>
            <Switch>
                <Route path='/explore' component={Explore}></Route>
                <Route path='/mine' component={Mine}></Route>
                <Route path='/friends' component={Friends}></Route>
                <Route path='/video' component={Video}></Route>
                <Route path='/account' component={Account}></Route>
                <Route exact={true} path='/' component={Explore}></Route>
            </Switch>
            <Switch>
                <Route path='/explore' component={BottomBar}></Route>
                <Route path='/mine' component={BottomBar}></Route>
                <Route path='/friends' component={BottomBar}></Route>
                <Route path='/video' component={BottomBar}></Route>
                <Route path='/account' component={BottomBar}></Route>
                <Route exac={true} path='/' component={BottomBar}></Route>

            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter