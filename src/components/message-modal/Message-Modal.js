/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import {inject} from 'narcissus';


import '../../style/main.css';
import './Message-Modal.css';

class MessageModal extends Component {

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
                        <div className="message-modal">
                            <div className="message-header">
                                <div style={{float:"left"}}>
                                    <img src={require('./../../assets/frank.jpg')} alt="user image"
                                         className="img-circle"/>
                                </div>
                                <div style={{float:"left"}}>
                                    <div className="padding-left">
                                        <span>Husnain Shahzad</span>
                                    </div>
                                    <div style={{textAlign:"left"}} className="padding-left">
                                        <span>Senior Web Developer with 18+yrs of experience</span>
                                    </div>
                                </div>
                            </div>

                            <div className="type-message">
                                <div className="padding-bottom">Message</div>
                                <textarea placeholder="Write your Message.." rows="6" cols="60">

                                </textarea>
                            </div>

                            <div className="choose-game">
                                <div className="margin-vertical">Revert to a default message</div>
                                <div className="margin-vertical">Choose a game</div>
                                <select>
                                    <option>Mario Kat 8</option>
                                </select>
                                {/*<input type="text" placeholder="Mario Kat 8"/>*/}
                                <button type="button" className="btn-default">Send Invitation</button>
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
    color : '#9baec8 !important'
};


export default MessageModal;
