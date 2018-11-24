/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import { Link } from 'react-router'



/*Import Components */
import RightNavigations  from '../../components/right-navigations/Right-Navigations';
import FriendsList from '../../components/friends-list/Friends-List';
import ChatBox from '../../components/chat-box/Chat-Box'
import WritePost from '../../components/write-post/Write-Post'



import '../../style/main.css'
import './Profile.css'

class Profile extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }


    render() {
        return(
            <div className="profile">

                {/*Profile Cover*/}
                <div className="profile-cover">
                    {/*social medai icons*/}
                    <div className="social-icons">
                        <img src={require('./../../assets/fb.png')} alt="content"  className="img-circle cursor-pointer"/>
                        <img src={require('./../../assets/twitter.png')} alt="content"  className="img-circle cursor-pointer"/>
                        <img src={require('./../../assets/youtube.png')} alt="content"  className="img-circle cursor-pointer"/>
                    </div>

                    {/*Display Picture*/}
                    <div className="display-picture">
                        <div>
                            <img src={require('./../../assets/frank.jpg')} alt="content"  className="img-circle cursor-pointer"/>
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
                            <i className="fa fa-user-plus"></i>
                            Follow
                        </button>
                        <button type="button" className="btn-default">
                            <i className="fa fa-user-plus"></i>
                            Friend Request
                        </button>
                        <button type="button" className="btn-default">
                            <i className="fa fa-ellipsis-h"></i>
                        </button>
                    </div>

                    {/*Profile Options*/}
                    <div className="profile-options">
                        <ul>
                            <Link to="/Profile">
                                <li className={`cursor-pointer ${this.props.location.pathname == '/Profile'? 'active' : ''}`}>
                                    Overview
                                </li>
                            </Link>
                           <Link to="/Profile/Videos">
                               <li className={`cursor-pointer ${this.props.location.pathname == '/Profile/Videos'? 'active' : ''}`}>
                                   Video
                               </li>
                           </Link>
                            <Link to="/Profile/Activities">
                                <li className={`cursor-pointer ${this.props.location.pathname == '/Profile/Activities'? 'active' : ''}`}>
                                    Activities
                                </li>
                            </Link>
                            <Link to="/Profile/Games">
                                <li className={`cursor-pointer ${this.props.location.pathname == '/Profile/Games'? 'active' : ''}`}>
                                    Games
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
                </div>

                <WritePost/>

            </div>
        )
    }
}

export default Profile;