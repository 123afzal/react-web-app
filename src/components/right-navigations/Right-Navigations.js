/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

/* import all components */
import ChatServer from '../../components/chat-server/Chat-Server';

/* import alll modals here */
import NotificationModal from '../../components/notification-modal/Notification-Modal'

import '../../style/main.css';
import './Right-Navigations.css';


class RightNavigations extends Component {

    constructor(props){
        super(props);
        this.state={
            showServerModal: false,
            showNotificationModal :false
        }

        this._onToggleChatServerModal = this._onToggleChatServerModal.bind(this);
        this._onToggleNotificationModal = this._onToggleNotificationModal.bind(this);
    }

    _onToggleNotificationModal(){
        this.setState({
            showNotificationModal:!this.state.showNotificationModal
        })
    }

    _onToggleChatServerModal(){
        this.setState({
            showServerModal : !this.state.showServerModal
        });
    }

    render() {
        return (
            <section className="nav-right">
                <nav>
                    <ul>
                        <li className="user cursor-pointer margin-vertical">
                                <span>
                                    <i className="fa fa-users fa-lg"></i>
                                </span>
                        </li>

                        <li>
                            <Link to="/Home">
                                <i className="fa fa-home fa-lg cursor-pointer"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Community">
                                <i className="fa fa-users fa-lg cursor-pointer"></i>
                            </Link>
                        </li>
                        <li onClick={()=>{this._onToggleNotificationModal()}}>
                            <i className="fa fa-bell fa-lg cursor-pointer"></i>
                        </li>
                        <li>
                            <Link to="/Map">
                                <i className="fa fa-globe fa-lg cursor-pointer"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Profile">
                                <img src={require('./../../assets/a.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Profile">
                                <img src={require('./../../assets/b.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Profile">
                                <img src={require('./../../assets/c.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                            </Link>
                        </li>
                        <li style={{position:"absolute", bottom:0}} onClick={()=>{this._onToggleChatServerModal()}}>
                            <i className="fa fa-plus-circle fa-lg cursor-pointer"></i>
                        </li>
                    </ul>
                </nav>



                {
                    (this.state.showServerModal)?
                        <ChatServer onToggle={this._onToggleChatServerModal}></ChatServer>
                        :null
                }
                ,
                {
                    (this.state.showNotificationModal)?
                        <NotificationModal onToggle={this._onToggleNotificationModal}></NotificationModal>
                        :null
                }


            </section>
        );
    }
}

export default RightNavigations;
