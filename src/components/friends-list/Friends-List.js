/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, { Component } from 'react';

import Settings  from '../../components/settings/Settings';


import '../../style/main.css';
import './Frieds-List.css';


class FriendsList extends Component {

    constructor(props){
        super(props);

        this.state={
            showSettingModal : false,
            micOn: true,
            volumeOn: true
        }
        this._onToggleSettingModal = this._onToggleSettingModal.bind(this);
        this._toggleMic = this._toggleMic.bind(this);
        this._toggleVolume = this._toggleVolume.bind(this);
    }

    _onToggleSettingModal(){
        this.setState({
            showSettingModal: !this.state.showSettingModal
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
            <section className="friends">
                {/*Freind search bar*/}
                <div className="search-friend">
                    <input type="text" placeholder="Find a Friend" />
                </div>
                <hr/>

                {/*Friends list*/}
                <div className="friends-list">
                    <div className="friends-title">
                        <i className="fa fa-user-o">
                            <span>Friends</span>
                        </i>
                    </div>
                </div>

                <div className="list">
                    <span>DIRECT MESSAGES</span>
                    <div>
                        <ul>
                            <li>
                                <img src={require('./../../assets/a.jpg')} alt="content"  className="img-circle"/>
                                <span>Syed Afzal</span>
                            </li>
                            <li>
                                <img src={require('./../../assets/b.jpg')} alt="content"  className="img-circle"/>
                                <span>Syed Afzal</span>
                            </li>
                            <li>
                                <img src={require('./../../assets/c.jpg')} alt="content"  className="img-circle"/>
                                <span>Syed Afzal</span>
                            </li>
                            <li>
                                <img src={require('./../../assets/d.jpg')} alt="content"  className="img-circle"/>
                                <span>Syed Afzal</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*user options of chat*/}
                <div className="user-chat-control">
                    <img src={require('./../../assets/e.jpg')} alt="content"  className="img-circle"/>
                    <span>
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

                {
                    (this.state.showSettingModal)?
                        <Settings onToggle={this._onToggleSettingModal}></Settings>
                        :null
                }

            </section>
        );
    }
}

export default FriendsList;
