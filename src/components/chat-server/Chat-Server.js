/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import {inject} from 'narcissus';
import {Link} from 'react-router';



import '../../style/main.css';
import './Chat-Server.css';

class ChatServer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showJoinServerContenet: true,
            activeStatus1: "active",
            activeStatus2: ""
        }
        this._onToggleShowServrContent = this._onToggleShowServrContent.bind(this);

    }

    _onToggleShowServrContent() {
        this.setState({
            showJoinServerContenet: !this.state.showJoinServerContenet
        })
        if(!this.state.showJoinServerContenet)
            this.setState({activeStatus1:"active", activeStatus2:""})
        else
            this.setState({activeStatus1:"", activeStatus2:"active"})
    }

    render() {
        return (
            <ModalContainer className="modal">
                <ModalDialog className={inject(styles)} onClose={this.props.onToggle}>

                    <div className="modal">
                        <div className="chat-server">
                            <div className="heading">
                                <ul>
                                    <li className={this.state.activeStatus1} onClick={() => {
                                        this._onToggleShowServrContent()
                                    }}>
                                        <span>Join Server</span>
                                    </li>
                                    <li className={this.state.activeStatus2} onClick={() => {
                                        this._onToggleShowServrContent()
                                    }}>
                                        <span>Create Server</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="content">
                                {
                                    (this.state.showJoinServerContenet) ?
                                        <div className="join-server">
                                            <div className="entry">
                                                <h6>Enter Invite Token :</h6>
                                                <input type="text" placeholder="token"/>
                                            </div>
                                            <div className="footer">
                                        <span style={{float: "left"}}>
                                            <button type="button" className="btn-default">Close</button>
                                        </span>
                                                <Link style={{float: "right"}} to="/Server">
                                            <button type="button" className="btn-default">Join Server</button>
                                        </Link>
                                            </div>
                                        </div>
                                        :
                                        <div className="join-server">
                                            <div className="entry">
                                                <h6>Server Name</h6>
                                                <input type="text" placeholder="Logan theWolverine"/>
                                            </div>
                                            <div className="footer">
                                             <span style={{float: "left"}}>
                                                 <button type="button" className="btn-default">Close</button>
                                             </span>
                                             <Link style={{float: "right"}} to="/Server">
                                                <button type="button" className="btn-default">Create Server</button>
                                             </Link>
                                            </div>
                                        </div>
                                }

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


export default ChatServer;
