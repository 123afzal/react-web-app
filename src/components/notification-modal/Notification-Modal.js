/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import {inject} from 'narcissus';



import '../../style/main.css';
import './Notification-Modal.css';

class NotificationModal extends Component {

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
                        <div className="notification-modal">
                            <div className="heading">
                                <h3>Notifications</h3>
                            </div>
                            <div className="content">
                                {/*<span className="fa fa-search"></span>*/}
                                {/*<input placeholder="Search term"/>*/}

                                {/*Seacrh Results*/}
                                <div className="search-users">
                                    <div className="result">
                                        <div>
                                            <img src={require('./../../assets/frank.jpg')} alt="user image"
                                                 className="img-circle"/>
                                        </div>
                                        <div>
                                            <div className="padding-left text-left">
                                                <span>Husnain Shahzad</span>
                                            </div>
                                            <div style={{textAlign:"left"}} className="padding-left">
                                                <span>commented on your file</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="result">
                                        <div>
                                            <img src={require('./../../assets/frank.jpg')} alt="user image"
                                                 className="img-circle"/>
                                        </div>
                                        <div>
                                            <div className="padding-left text-left">
                                                <span>Husnain Shahzad</span>
                                            </div>
                                            <div style={{textAlign:"left"}} className="padding-left">
                                                <span>likes your post</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="result">
                                        <div>
                                            <img src={require('./../../assets/frank.jpg')} alt="user image"
                                                 className="img-circle"/>
                                        </div>
                                        <div>
                                            <div className="padding-left text-left">
                                                <span>Husnain Shahzad</span>
                                            </div>
                                            <div style={{textAlign:"left"}} className="padding-left">
                                                <span>XYZ posted in Mario 3D</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="result">
                                        <div>
                                            <img src={require('./../../assets/frank.jpg')} alt="user image"
                                                 className="img-circle"/>
                                        </div>
                                        <div>
                                            <div className="padding-left text-left">
                                                <span>Husnain Shahzad</span>
                                            </div>
                                            <div style={{textAlign:"left"}} className="padding-left">
                                                <span>XYZ poked you</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="result">
                                        <div>
                                            <img src={require('./../../assets/frank.jpg')} alt="user image"
                                                 className="img-circle"/>
                                        </div>
                                        <div>
                                            <div className="padding-left text-left">
                                                <span>Husnain Shahzad</span>
                                            </div>
                                            <div style={{textAlign:"left"}} className="padding-left">
                                                <span>XYZ poked you</span>
                                            </div>
                                        </div>
                                    </div>



                                </div>
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


export default NotificationModal;
