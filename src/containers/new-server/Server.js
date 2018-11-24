/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, { Component } from 'react';
import {Link} from 'react-router'
import Dropdown, { DropdownTrigger, DropdownContent } from '../../../node_modules/react-simple-dropdown/lib/components/Dropdown.js';


/* Import all models */
import Settings  from '../../components/settings/Settings';
import Invite from '../../components/invite/Invite';
import ServerSetting from '../../components/server-setting/Server-Setting';
import NotificationSetting from '../../components/notification-setting/Notification-Setting'

/* Import Components */
import ChannelUsers from '../../components/channel-users/Channel-Users'
import RightNavigations  from '../../components/right-navigations/Right-Navigations';
import ChatBox from '../../components/chat-box/Chat-Box'
import Notification from '../../components/notification/Notification'
import WritePost from '../../components/write-post/Write-Post'


import '../../style/main.css'
import './Server.css';

class NewServer extends Component {

    constructor(props){
        super(props);

        this.state={
            showSettingModal : false,
            showInviteModal : false,
            showServerSettingModal: false,
            showNotificationSettingModal: false,
            micOn: true,
            volumeOn: true,
            notificationBar : true
        }
        this._onToggleSettingModal = this._onToggleSettingModal.bind(this);
        this._onToggleInviteModal = this._onToggleInviteModal.bind(this);
        this._onToggleServerSettingModal = this._onToggleServerSettingModal.bind(this);
        this._onToggleNotificationSettingModal = this._onToggleNotificationSettingModal.bind(this);
        this._toggleMic = this._toggleMic.bind(this);
        this._toggleVolume = this._toggleVolume.bind(this);
    }

    componentWillMount(){
        setTimeout(function () {
            this.setState({
                notificationBar: !this.state.notificationBar
            })
        }.bind(this),3000)
    }

    _onToggleNotificationSettingModal(){
        this.setState({
            showNotificationSettingModal : !this.state.showNotificationSettingModal
        })
    }

    _onToggleServerSettingModal(){
        this.setState({
            showServerSettingModal: !this.state.showServerSettingModal
        })
    }

    _onToggleSettingModal(){
        this.setState({
            showSettingModal: !this.state.showSettingModal
        })
    }

    _onToggleInviteModal(){
        this.setState({
            showInviteModal: !this.state.showInviteModal
        })
    }

    _toggleMic(){
        this.setState({
            micOn: !this.state.micOn
        })
    }

    _toggleVolume(){
        this.setState({
            volumeOn: !this.state.volumeOn
        })
    }


    render() {
        return (
            <div className="server">

                {/*main content*/}
                <section className="main">

                    {/*header*/}
                    <div className="header">
                        <i className="fa fa-bell cursor-pointer"></i>
                        <i className="fa fa-thumb-tack cursor-pointer"></i>
                        <i className="fa fa-user cursor-pointer"></i>
                    </div>

                    {/*footer*/}
                    <div className="content">

                    </div>

                    <div className="footer">
                        <input type="text" placeholder="Message#general"/>
                    </div>

                </section>

                {/*server users*/}
                <ChannelUsers></ChannelUsers>

                {/*right navigations*/}
                <RightNavigations onCheck={this._onToggleWritePostModal}></RightNavigations>


                {/*channels*/}
                <div className="channels">
                    <div className="server-name">
                        test
                        <span className="float-right">
                            <Dropdown>
                                <DropdownTrigger>
                                    <i className="fa fa-chevron-down float-right"></i>
                                </DropdownTrigger>
                                <DropdownContent style={{marginLeft:"32px"}}>
                                    <div className="theme-dropdown server-drp">
                                            <ul>
                                                <li onClick={()=>{this._onToggleInviteModal()}}>
                                                    <Link to="">
                                                    <i className="fa fa-user-plus"></i>
                                                    <span className="padding-left">Invite People</span>
                                                    </Link>
                                                </li>
                                                <li onClick={()=>{this._onToggleServerSettingModal()}}>
                                                    <Link to="">
                                                    <i className="fa fa-cog"></i>
                                                    <span className="padding-left">Server Settings</span>
                                                    </Link>
                                                </li>
                                                <li onClick={()=>{this._onToggleNotificationSettingModal()}}>
                                                    <Link to="">
                                                    <i className="fa fa-inbox"></i>
                                                    <span className="padding-left">Notification Settings</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                    </div>
                                </DropdownContent>
                            </Dropdown>
                        </span>
                    </div>
                    <div className="channel-invite">
                        <span>
                            <i className="fa fa-user-circle-o fa-2x"></i>
                        </span>
                        <p>
                            An Adventure begins lets's get roll in the game.
                        </p>
                        <button type="button" className="btn-default" onClick={()=>{this._onToggleInviteModal()}}>Invite People</button>
                    </div>

                    <div className="channels-list">
                        TEXT CHANNELS
                        <span className="float-right">
                            <i className="fa fa-plus"></i>
                        </span>

                        <div className="channel-name">
                            #general
                            <span className="float-right">
                                <i className="fa fa-user-circle-o padding-right"></i>
                                <i className="fa fa-cog"></i>

                            </span>
                        </div>
                    </div>

                    <div className="admin-controls">
                        <img src={require('./../../assets/e.jpg')} alt="content"  className="img-circle"/>
                        <span className="padding-left">
                            Syed Afzal
                        </span>
                        <span className="span-right">
                             {
                                 (this.state.micOn)?
                                     <i className="fa fa-microphone fa-lg cursor-pointer" onClick={()=>{this._toggleMic()}}></i>
                                     :
                                     <i className="fa fa-microphone-slash fa-lg cursor-pointer" onClick={()=>{this._toggleMic()}}></i>
                             }
                            {
                                (this.state.volumeOn)?
                                    <i className="fa fa-volume-up fa-lg cursor-pointer" onClick={()=>{this._toggleVolume()}}></i>
                                    :
                                    <i className="fa fa-volume-off fa-lg cursor-pointer" onClick={()=>{this._toggleVolume()}}></i>
                            }
                            <i className="fa fa-cog fa-lg cursor-pointer" onClick={()=>{this._onToggleSettingModal()}}></i>
                        </span>
                    </div>

                </div>


                {
                    (this.state.showSettingModal)?
                        <Settings onToggle={this._onToggleSettingModal}></Settings>
                        :null
                }

                {
                    (this.state.showInviteModal)?
                        <Invite onToggle={this._onToggleInviteModal}></Invite>
                        :null
                }
                {
                    (this.state.showServerSettingModal)?
                        <ServerSetting onToggle={this._onToggleServerSettingModal}></ServerSetting>
                        :null
                }
                {
                    (this.state.showNotificationSettingModal)?
                        <NotificationSetting onToggle={this._onToggleNotificationSettingModal}></NotificationSetting>
                        :null
                }
                {
                    (this.state.notificationBar)?
                        <Notification text="This is notification bar"/>
                        :null
                }

                <div className="chat-row margin-right">
                    <ChatBox></ChatBox>
                    <ChatBox></ChatBox>
                </div>

                <WritePost/>

            </div>
        );
    }
}

const styles = {
    setting_modal:{
        padding:'0 !important',
        background: "#282c37 !important",
        color : '#9baec8 !important'
    }
};

export default NewServer;
