/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import {inject} from 'narcissus';

import '../../style/main.css';
import './Settings.css';

class Settings extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <ModalContainer className="modal" onClose={this.props.onToggle}>
                <ModalDialog onClose={this.props.onToggle} className={inject(styles.setting_modal)}>

                    <div className="modal">
                        <div className="settings">
                            <div className="heading">
                                <h3>USER SETTINGS</h3>
                            </div>
                            <div className="settings-list">
                                <ul>
                                    <li>Account</li>
                                    <li className="active">Text & Images</li>
                                    <li>Connections</li>
                                    <li>Video</li>
                                    <li>Notifications</li>
                                    <li>Appearance</li>
                                    <li>Locale</li>
                                </ul>
                            </div>
                        </div>


                        {/*Account Setting*/}
                        <div className="tab-account">
                            <div className="pop-up">
                                <div className="warning">
                                    <h5>Unclaimed Account</h5>
                                    <p>
                                        Please enter an email and password to claim your account before it's lost.
                                        A claimed account is required to download apps.
                                    </p>
                                </div>
                            </div>

                            <div className="user-personal">
                                <div className="user-personal-edit">
                                    <form>
                                                    <span>
                                                        <h6 className="padding-left">USERNAME</h6>
                                                        <input type="text" placeholder="User Name" />
                                                    </span>
                                        <span>
                                                        <h6 className="padding-left">EMAIL</h6>
                                                        <input type="text" placeholder="EMAIL" />
                                                    </span>
                                        <span>
                                                        <h6 className="padding-left">PASSWORD</h6>
                                                        <input type="text" placeholder="PASSWORD" />
                                                    </span>
                                    </form>
                                </div>
                                <div className="user-image">
                                    <img className="cursor-pointer img-circle" src={require('./../../assets/c.jpg')} alt="logo" />
                                </div>
                            </div>

                            <div className="account-btn">
                                <button type="button" className="btn-border">Cancel</button>
                                <button type="button" className="btn-default">Done</button>
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

export default Settings;