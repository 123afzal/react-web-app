/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';

import '../../style/main.css';
import './Notification.css';


class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="notification-popup">
                {this.props.text}
            </div>
        );
    }
}

export default Notification;
