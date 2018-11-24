/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import {inject} from 'narcissus';


import '../../style/main.css';
import './Review-Modal.css';

class ReviewModal extends Component {

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
                        <div className="review-modal">
                            <div>
                                <h3>Write a Review for Battle Field</h3>
                                <span className="padding-top">
                                    Please describe what you like and dislike about this game
                                    and wether you recommnd it to others.
                                </span>
                                <div>
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star-o fa-lg"></i>
                                    <i className="fa fa-star-o fa-lg"></i>
                                    <i className="fa fa-star-o fa-lg"></i>
                                    <i className="fa fa-star-o fa-lg"></i>
                                    <label className="padding-left">give back my money..!</label>
                                </div>
                            </div>
                            <div className="padding-top">
                                <span>Title</span>
                                <input type="text" placeholder=""/>
                            </div>

                            <div>
                                <span>What can you about this game</span>
                                <input type="text" placeholder=""/>

                                <span><i className="fa fa-plus-square"></i>
                                    <label className="padding-left">Pros</label>
                                </span>
                                <input type="text" placeholder=""/>
                                <input type="text" placeholder=""/>
                                <span><i className="fa fa-plus"></i>
                                    <label className="padding-left">Add an Item</label>
                                </span>
                            </div>

                            <div className="padding-top">
                                <span><i className="fa fa-minus-square"></i>
                                    <label className="padding-left">Cons</label>
                                </span>
                                <input type="text" placeholder=""/>
                                <input type="text" placeholder=""/>
                                <span><i className="fa fa-plus"></i>
                                    <label className="padding-left">Add an Item</label>
                                </span>
                            </div>
                            <button type="button" className="btn-default">Submit Review</button>
                        </div>
                    </div>

                </ModalDialog>
            </ModalContainer>
        );
    }
}

const styles = {
    background: "#282c37 !important",
    color: '#9baec8 !important',
};


export default ReviewModal;
