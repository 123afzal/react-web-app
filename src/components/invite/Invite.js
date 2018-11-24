/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import {inject} from 'narcissus';


import '../../style/main.css';
import './Invite.css';

class Invite extends Component {

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
                        <div  className="invite">
                            <div className="header">
                                <h4>
                                    Invite People to test
                                </h4>
                                <span>
                                    Share this link with others to grant access to this server
                                </span>
                            </div>
                            <div className="server-link">
                                <input type="text" value={"hhtp://discord.gg/B6tz87jk"}/>
                                <button type="button" className="btn-default">Copy</button>
                            </div>
                            <div className="expiry">
                                <span>
                                    Invite links expires every 1 day by default
                                </span>
                            </div>
                            <div className="footer">
                                <span className="float-left" style={{display:"flex"}}>
                                    <input type="checkbox"/>
                                    <label className="padding-left" style={{'margin-top':'-4px'}}>Set this link to never expire</label>
                                </span>
                                <span className="float-right">
                                    <i className="fa fa-cog"></i>
                                </span>
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


export default Invite;
