/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';

import '../../style/main.css';
import './Chat-Box.css';


class ChatBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showChatContent: false,
            chat_box : "chat-box"
        }
        this._toggleChatBoxContent = this._toggleChatBoxContent.bind(this)
    }

    _toggleChatBoxContent(){
        if(!this.state.showChatContent){
            this.setState({showChatContent:!this.state.showChatContent, chat_box:"chat-box active"})
        }
        else{
            this.setState({showChatContent:!this.state.showChatContent, chat_box:"chat-box"})
        }

    }


    render() {
        return (
            <div className={this.state.chat_box}>
                {/*chat header*/}
                <div className="chat-header cursor-pointer" onClick={() => {this._toggleChatBoxContent()}}>
                    <div className="chatter-name">
                        <img src={require('./../../assets/a.jpg')} alt="user image"
                             className="img-circle"/>
                        <span className="padding-left">Mohsin Khan</span>
                        {
                            (this.state.showChatContent) ?
                                <span className="span-right">
                                            <i className="fa fa-minus padding-right"></i>
                                            <i className="fa fa-times"></i>
                                        </span>
                                : null
                        }
                    </div>
                </div>
                        <div className="chat-content">
                            {/*chat content*/}
                            <div className="chat-messages">
                                        <span className="message">
                                            Afzal here
                                        </span>
                            </div>
                            {/*message*/}
                            <div className="chat-input-message">
                                <input type="text" placeholder="Type your message here"/>
                            </div>
                        </div>
            </div>
        );
    }
}

export default ChatBox;
