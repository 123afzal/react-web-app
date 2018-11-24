/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';


import '../../style/main.css';
import './Channel-Users.css';

class ChannelUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        return (
            <section className="channel-users">
                <div className="user-header">
                    <input type="text" placeholder="search"/>
                    <div className="padding-top">
                        <span className="padding-left">@</span>
                        <span className="padding-left">?</span>
                    </div>
                </div>
                <div className="users">
                    <h6>ONLINE-1</h6>
                    <img src={require('./../../assets/e.jpg')} alt="content" className="img-circle"/>
                    <span>
                        Syed Afzal
                    </span>
                </div>
            </section>
        );
    }
}

export default ChannelUsers;
