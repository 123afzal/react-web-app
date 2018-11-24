/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import {Link} from 'react-router'

import '../../style/main.css'
import './Game.css'

/*Import Components */
import RightNavigations  from '../../components/right-navigations/Right-Navigations';
import FriendsList from '../../components/friends-list/Friends-List';
import ChatBox from '../../components/chat-box/Chat-Box';
import WritePost from '../../components/write-post/Write-Post'


class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className="game">

                {/*game cover*/}
                <div className="game-cover">
                    {/*social medai icons*/}
                    <div className="social-icons">
                        <img src={require('./../../assets/fb.png')} alt="content"
                             className="img-circle cursor-pointer"/>
                        <img src={require('./../../assets/twitter.png')} alt="content"
                             className="img-circle cursor-pointer"/>
                        <img src={require('./../../assets/youtube.png')} alt="content"
                             className="img-circle cursor-pointer"/>
                    </div>

                    {/*Display Picture*/}
                    <div className="game-display-picture">
                        <div>
                            <img src={require('./../../assets/g7.jpg')} alt="content"
                                 className="cursor-pointer"/>
                        </div>
                        <div className="display-name">
                            Syed Afzal Hasan
                            <i className="fa fa-check-circle fa-lg padding-left"></i>
                            <div className="user-nick">
                                @afzal_hasan
                            </div>
                        </div>
                    </div>

                    {/*Cover Buttons*/}
                    <div className="cover-buttons">
                        <button type="button" className="btn-default">
                            <i className="fa fa-heart"></i>
                            Add to my Collection
                        </button>
                        <button type="button" className="btn-default">
                            <i className="fa fa-tag"></i>
                            Add a Review
                        </button>
                        <button type="button" className="btn-default">
                            <i className="fa fa-ellipsis-h"></i>
                        </button>
                    </div>

                    <div className="game-info">
                        <span>
                            Created by Mohisn Hasan Khan published by <label>Microsoft Studios</label> &
                            <label>Sony Computer Entertainment Incorporated</label> & <label>Mojang ABJ</label>
                        </span>
                    </div>

                    <div className="game-platforms">
                        <span>
                            ios windows <i className="fa fa-windows"></i> PS3 XBOXONE PS4 Windows Phone Wii U Windows Mobile
                            Nintendo Switch
                        </span>
                    </div>

                    {/*Profile Options*/}
                    <div className="game-options">
                        <ul>
                            <Link to="/Game">
                                <li className={`cursor-pointer ${this.props.location.pathname == '/Game/Overview'? 'active' : ''}`}>
                                    Overview
                                </li>
                            </Link>
                            <Link to="/Game/Video">
                                <li className={`cursor-pointer ${this.props.location.pathname == '/Game/Video'? 'active' : ''}`}>
                                    Video
                                </li>
                            </Link>
                            <Link to="/Game/Images">
                                <li className={`cursor-pointer ${this.props.location.pathname == '/Game/Images'? 'active' : ''}`}>
                                    Images
                                </li>
                            </Link>
                            <Link to="/Game/Groups">
                                <li className={`cursor-pointer ${this.props.location.pathname == '/Game/Groups'? 'active' : ''}`}>
                                    Groups
                                </li>
                            </Link>
                            <Link to="/Game/Players">
                                <li className={`cursor-pointer ${this.props.location.pathname == '/Game/Players'? 'active' : ''}`}>
                                    Players
                                </li>
                            </Link>
                            <Link to="/Game/Activities">
                                <li className={`cursor-pointer ${this.props.location.pathname == '/Game/Activities'? 'active' : ''}`}>
                                    Activities
                                </li>
                            </Link>
                            <Link to="/Game/Reviews">
                                <li className={`cursor-pointer ${this.props.location.pathname == '/Game/Reviews'? 'active' : ''}`}>
                                    Reviews
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>

                {
                    this.props.children
                }

                {/*Right Navigation*/}
                <RightNavigations></RightNavigations>

                {/*Friends List*/}
                <FriendsList></FriendsList>

                <div className="chat-row">
                    <ChatBox/>
                    <ChatBox/>
                </div>

                <WritePost/>

            </div>
        )
    }
}

export default Game;