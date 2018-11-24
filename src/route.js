/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React from 'react';

import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import Home from './containers/home/Home';
import Feed from './containers/feed/Feed';
import Community from './containers/community/Community'
import Server from './containers/new-server/Server'
import Map from './containers/map/Map'
import Profile from './containers/profile/Profile'

// Profile Routes
import Overview from './containers/profile/overview/Overview'
import Videos from './containers/profile/videos/Videos'
import Activities from './containers/profile/activities/Activities'
import Games from './containers/profile/games/Games'
import Game from './containers/games/Game'
// Game routes
import GameReviews from './containers/games/reviews/Reviews'
import GameOverview from './containers/games/overview/Overview'
import GameVideo from './containers/games/video/Video'
import GameImages from './containers/games/images/Images'
import GameGroups from './containers/games/groups/Groups'
import GamePlayers from './containers/games/players/Players'
import GameActivities from './containers/games/activities/Activities'



const Routes = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Home}/>
            <Route path="/Home" component={Home}/>
            <Route path="/Feed" component={Feed}/>
            <Route path="/Community" component={Community}/>
            <Route path="/Server" component={Server}/>
            <Route path="/Map" component={Map}/>

            {/*child routes for profile*/}
            <Route path="/Profile" component={Profile}>
                <IndexRoute component={Overview} />
                <Route path="Videos" component={Videos} />
                <Route path="Activities" component={Activities}/>
                <Route path="Games" component={Games}/>
            </Route>

            {/*child routes fro game*/}
            <Route path="/Game" component={Game}>
                <IndexRoute component={GameOverview} />
                <Route path="Reviews" component={GameReviews}/>
                <Route path="Video" component={GameVideo}/>
                <Route path="Images" component={GameImages}/>
                <Route path="Groups" component={GameGroups}/>
                <Route path="Players" component={GamePlayers}/>
                <Route path="Activities" component={GameActivities}/>
            </Route>

        </Router>
        )
};

export default Routes;

