/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import {inject} from 'narcissus';


import '../../style/main.css';
import './SearchModal.css';

import MessageModal from '../../components/message-modal/Message-Modal'

class SearchModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMessageModal : false
        }

        this._onToggleMessageModal = this._onToggleMessageModal.bind(this);
    }
    _onToggleMessageModal(){
        this.props.onToggle
        console.log("message")
        this.setState({
            showMessageModal:!this.state.showMessageModal
        })
    }



    render() {
        return (
            <ModalContainer className="modal">
                <ModalDialog className={inject(styles)} onClose={this.props.onToggle}>

                    <div className="modal">
                        <div className="search-modal">
                            <div className="heading">
                                <h3>Search Any</h3>
                            </div>
                            <div className="content">
                                <div className="searching padding-vertical">
                                        <span className="fa fa-search"></span>
                                        <input placeholder="Search term"/>
                                        <button type="button" className="btn-default">Search</button>
                                </div>

                                <div className="search-content">
                                    {/*Seacrh Results*/}
                                    <div className="search-users">
                                        <div className="margin-left text-left padding-vertical">
                                            People results for Husnain Shehzad .
                                            <span style={{color:"#9baec8", fontSize:"10px"}}>10 results</span>
                                        </div>
                                        <div className="result">
                                            <div>
                                                <img src={require('./../../assets/frank.jpg')} alt="user image"
                                                     className="img-circle"/>
                                            </div>
                                            <div>
                                                <div className="padding-left">
                                                    <span>Husnain Shahzad</span>
                                                </div>
                                                <div style={{textAlign:"left"}} className="padding-left">
                                                    <span>.husnain</span>
                                                </div>
                                            </div>
                                            <div className="connect">
                                                <button type="button" className="btn-default"
                                                        onClick={()=>{this._onToggleMessageModal()}} style={{marginRight:"10px"}}>
                                                    Message
                                                </button>
                                                <button className="btn-default float-right">Follow</button>
                                            </div>
                                        </div>

                                        <div className="result">
                                            <div>
                                                <img src={require('./../../assets/frank.jpg')} alt="user image"
                                                     className="img-circle"/>
                                            </div>
                                            <div>
                                                <div className="padding-left">
                                                    <span>Husnain Shahzad</span>
                                                </div>
                                                <div style={{textAlign:"left"}} className="padding-left">
                                                    <span>.husnain</span>
                                                </div>
                                            </div>
                                            <div className="connect">
                                                <button type="button" className="btn-default"
                                                        onClick={()=>{this._onToggleMessageModal()}} style={{marginRight:"10px"}}>
                                                    Message
                                                </button>
                                                <button className="btn-default float-right">Follow</button>
                                            </div>
                                        </div>

                                        <div className="result">
                                            <div>
                                                <img src={require('./../../assets/frank.jpg')} alt="user image"
                                                     className="img-circle"/>
                                            </div>
                                            <div>
                                                <div className="padding-left">
                                                    <span>Husnain Shahzad</span>
                                                </div>
                                                <div style={{textAlign:"left"}} className="padding-left">
                                                    <span>.husnain</span>
                                                </div>
                                            </div>
                                            <div className="connect">
                                                <button type="button" className="btn-default"
                                                        onClick={()=>{this._onToggleMessageModal()}} style={{marginRight:"10px"}}>
                                                    Message
                                                </button>
                                                <button className="btn-default float-right">Follow</button>
                                            </div>
                                        </div>

                                        <div className="result">
                                            <div>
                                                <img src={require('./../../assets/frank.jpg')} alt="user image"
                                                     className="img-circle"/>
                                            </div>
                                            <div>
                                                <div className="padding-left">
                                                    <span>Husnain Shahzad</span>
                                                </div>
                                                <div style={{textAlign:"left"}} className="padding-left">
                                                    <span>.husnain</span>
                                                </div>
                                            </div>
                                            <div className="connect">
                                                <button type="button" className="btn-default"
                                                        onClick={()=>{this._onToggleMessageModal()}} style={{marginRight:"10px"}}>
                                                    Message
                                                </button>
                                                <button className="btn-default float-right">Follow</button>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="search-filters">
                                        Filter users by what do you want
                                        <div className="padding-vertical">
                                            Connections <span className="float-right"><i className="fa fa-chevron-up"></i></span>
                                            <ul>
                                                <li className="cursor-pointer"><input type="checkbox"/> <span>1st</span></li>
                                                <li className="cursor-pointer"><input type="checkbox"/> <span>2nd</span></li>
                                                <li className="cursor-pointer"><input type="checkbox"/> <span>3rd</span></li>
                                            </ul>
                                        </div>

                                        <hr/>

                                        <div className="padding-vertical">
                                            Keywords <span className="float-right"><i className="fa fa-chevron-down"></i></span>
                                        </div>

                                        <hr/>

                                        <div className="padding-vertical">
                                            Connections of <span className="float-right"><i className="fa fa-chevron-down"></i></span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {
                            (this.state.showMessageModal)?
                                <MessageModal onToggle={this._onToggleMessageModal}></MessageModal>
                                :null
                        }
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


export default SearchModal;
