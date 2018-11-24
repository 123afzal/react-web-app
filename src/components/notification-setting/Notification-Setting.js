/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import {inject} from 'narcissus';


import '../../style/main.css';
import './Notification-Setting.css';

class NotificationSetting extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }


    render() {
        return (
            <ModalContainer className="modal">
                <ModalDialog className={inject(styles)} onClose={this.props.onToggle}>

                    <div className="modal">
                        <div className="notification">
                            <div className="mute-test">
                                <input type="checkbox"/>
                                <span>
                                    <h4>Mute Test</h4>

                                        Muting a server prevents unread indicators and notifications from appearing
                                        unless you are mention.

                                </span>
                            </div>

                            <div className="server-notificaion">
                                <h6>SERVER NOTIFICATION SETTING</h6>
                            </div>
                            <div className="ticks">
                                <div className="left-ticks">
                                    <ul>
                                        <li>
                                            <input type="radio" value={"All Messages"}/>
                                            <span>
                                                All Messages
                                            </span>
                                        </li>
                                        <li>
                                            <input type="radio" value={"Only @mentions"}/>
                                            <span>
                                                Only @mentions
                                            </span>
                                        </li>
                                        <li>
                                            <input type="radio" value={"Nothing"}/>
                                            <span>
                                                Nothing
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="right-ticks">
                                    <ul>
                                        <li>
                                            <input type="checkbox" value={"Only @mentions"}/>
                                            <span>
                                                Suppress @everyone and @here
                                            </span>
                                        </li>
                                        <li>
                                            <input type="checkbox" value={"Only @mentions"}/>
                                            <span>
                                                Mobile Push Notifications
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="channel-setting">
                                <div>
                                    <ul>
                                        <li>CHANNEL NOTIFICATION SETTINGS</li>
                                        <li className="float-right">ALL</li>
                                        <li className="float-right">MENTIONS</li>
                                        <li className="float-right">NOTHING</li>
                                    </ul>
                                </div>
                                <div className="channel-name">
                                    <span>
                                        #general
                                        <i className="fa fa-bell-slash padding-left"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="btn-footer">
                                <button type="button" className="btn-default">Done</button>
                            </div>

                        </div>
                    </div>

                </ModalDialog>
            </ModalContainer>
        );
    }
}

const styles = {
    background: "#282c37 !important",
    color: '#ffffff !important',
};


export default NotificationSetting;
