/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';

import '../../../style/main.css'
import './Reviews.css'

/* Import Modals */
import ReviewModal from '../../../components/review-modal/Review-Modal'

class GameReviews extends Component{

    constructor(props){
        super(props);
        this.state = {
            showReviewModal : false
        }
        this._toggleReviewModal = this._toggleReviewModal.bind(this)
    }

    _toggleReviewModal(){
        this.setState({
            showReviewModal: !this.state.showReviewModal
        })
    }


    render() {
        return(
            <div className="reviews">
                <span style={{position:"relative", top:"20px"}}>Reviews <label>9</label></span>
                <span className="float-right">
                    <button className="btn-default" onClick={()=>{this._toggleReviewModal()}}>
                        Add a Review
                    </button>
                </span>
                <div className="review-list">
                    <div className="review">
                        <div className="review-info">
                            <img src={require('./../../../assets/g1.jpg')} alt="content"  className="cursor-pointer img-circle"/>
                            <div className="padding-left">
                                Shahnawaz_Ali
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                            <div className="review-post-time">
                                Posted on the Feb 26 2017, last edit 25 days ago.
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="review-info">
                            <img src={require('./../../../assets/g1.jpg')} alt="content"  className="cursor-pointer img-circle"/>
                            <div className="padding-left">
                                Shahnawaz_Ali
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <div className="review-post-time">
                                    Posted on the Feb 26 2017, last edit 25 days ago.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="review-info">
                            <img src={require('./../../../assets/g1.jpg')} alt="content"  className="cursor-pointer img-circle"/>
                            <div className="padding-left">
                                Shahnawaz_Ali
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <div className="review-post-time">
                                    Posted on the Feb 26 2017, last edit 25 days ago.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="review-info">
                            <img src={require('./../../../assets/g1.jpg')} alt="content"  className="cursor-pointer img-circle"/>
                            <div className="padding-left">
                                Shahnawaz_Ali
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <div className="review-post-time">
                                    Posted on the Feb 26 2017, last edit 25 days ago.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    (this.state.showReviewModal)?
                        <ReviewModal onToggle={this._toggleReviewModal}></ReviewModal>
                        :null
                }
            </div>
        )
    }
}

export default GameReviews;