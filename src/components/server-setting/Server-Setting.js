/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import {inject} from 'narcissus';

import '../../style/main.css';
import './Server-Setting.css';

class ServerSetting extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <ModalContainer className="modal" onClose={this.props.onToggle}>
                <ModalDialog onClose={this.props.onToggle} className={inject(styles.setting_modal)}>

                    <div className="modal">
                        <div className="server-settings">
                            <div className="heading">
                                <h6>Server Name</h6>
                            </div>
                            <div className="settings-list">
                                <ul>
                                    <li>Overview</li>
                                    <li className="active">Moderation</li>
                                    <li>Audit Log</li>
                                    <li>Roles</li>
                                    <li>Integrations</li>
                                    <li>Emoji</li>
                                    <li className="web-hooks">Webhooks</li>
                                    <li>Widget</li>
                                    <li><hr/></li>
                                    <li><h6>USER MANAGEMENT</h6></li>
                                    <li>Members</li>
                                    <li>Invites</li>
                                    <li>Bans</li>
                                    <li><hr/></li>
                                    <li style={{color:"#FF0000",  fontWeight:"bold"}}>Delete Server</li>
                                </ul>
                            </div>
                        </div>


                        {/*Server Setting Overview*/}
                        <div className="server-overview">
                            <h6>SERVER NAME</h6>
                            {/*Overview Header*/}
                            <div className="server-overview-header">
                                <div className="server-image">
                                    <img src={require('./../../assets/b.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                    <span style={{fontSize:"10px", top:"128px", position:"absolute", left:"0"}}>
                                        Recommned size 128 * 128
                                    </span>
                                    <span style={{marginLeft:"20px", position:"absolute"}}>
                                        <span>
                                        We Recommend an image of
                                        at least 512 * 512 for your server.
                                        </span>
                                        <button type="button" className="btn-border">Upload Image</button>
                                    </span>
                                </div>

                                <div className="server-name">
                                    <form>
                                        <span>
                                            <h6>SERVER NAME</h6>
                                            <input type="text" placeholder="Server name"/>
                                        </span>
                                        <span>
                                            <h6 style={{marginTop:"20px"}}>SERVER REGION</h6>
                                            <input type="text" placeholder="Server name"/>
                                        </span>
                                    </form>
                                </div>
                            </div>

                            <hr/>

                            {/*Overview Content*/}
                            <div className="server-overview-content">
                                <div className="overview-channel-time">
                                    <div className="channel">
                                        <h6>AFK CHANNEL</h6>
                                        {/*<select>*/}
                                            {/*<option>This is it</option>*/}
                                        {/*</select>*/}
                                        <input type="text" placeholder="No Afk channel selected"/>
                                    </div>
                                    <div className="time">
                                        <h6>AFK TIMEOUT</h6>
                                        <input type="text" placeholder="5 minutes"/>
                                    </div>
                                </div>
                                <span>
                                    Automatically move members to and mute them when they have been idle for longer
                                    than tha AFK timeout. This does not affect browsers.
                                </span>
                            </div>

                            <div className="server-overview-footer">
                                <hr/>
                                <div className="footer-text">
                                    <h6>DEFAULT NOTIFICATION SETTING</h6>
                                    <div style={{position:"absolute"}}>
                                        <span>
                                        This will determine wether members who have not explicitly set thier notification
                                        settings recieve a notification for every message sent in this server or not.
                                        </span>
                                    </div>
                                    <div style={{position:"absolute", top:"90px"}}>
                                        <span>
                                        We highly recommend this setting to only @mentions for a pub;ic Discord to avoid
                                        this insanity.
                                        </span>
                                    </div>
                                </div>

                                <div className="checkboxes">
                                    <div className="check-messages">
                                        <input type="checkbox" checked/>
                                        <label>All Messages</label>
                                    </div>
                                    <div className="check-mention">
                                        <input type="checkbox"/>
                                        <label>Only@mentions</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </ModalDialog>
            </ModalContainer>
        )
    }
}

const styles = {
    setting_modal:{
        padding:'0 !important',
        background: "#282c37 !important",
        color : '#9baec8 !important'
    }
};

export default ServerSetting;