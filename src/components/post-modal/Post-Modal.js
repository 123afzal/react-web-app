/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import {inject} from 'narcissus';
import Dropdown, { DropdownTrigger, DropdownContent } from '../../../node_modules/react-simple-dropdown/lib/components/Dropdown.js';



import '../../style/main.css';
import './Post-Modal.css';

class PostModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            like : "like",
            likeActive : false,
            dislike :"dislike",
            dislikeActive : false
        }
        this._onToggleLike = this._onToggleLike.bind(this);
        this._onToggledisLike = this._onToggledisLike.bind(this);

    }

    _onToggleLike(){
        console.log("like")
        if(!this.state.likeActive) {this.setState({like:"like active", likeActive:true})}
        else{this.setState({like:"like", likeActive:false})}
    }

    _onToggledisLike(){
        console.log("dislike")
        if(!this.state.dislikeActive) {this.setState({dislike:"dislike active", dislikeActive:true})}
        else{this.setState({dislike:"dislike", dislikeActive:false})}
    }



    render() {
        return (
            <ModalContainer className="modal">
                <ModalDialog className={inject(styles)} onClose={this.props.onToggle}>

                    <div className="modal">
                        <div className="post-modal">
                            {/*user info*/}
                            <div className="user-info">
                                <div>
                                    <img src={require('./../../assets/frank.jpg')} alt="user image"
                                         className="img-circle"/>
                                </div>
                                <div>
                                    <div className="user-name">
                                        <span style={{width: "280px"}} className="text-left">Husnain Shahzad</span>
                                                <i className="fa fa-chevron-down padding-left text-right"></i>
                                    </div>
                                    <div className="user-nick">
                                        <span>.husnain</span>
                                    </div>
                                </div>
                            </div>

                            {/*post content*/}
                            <div className="post-content cursor-pointer">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Praesent in maximus purus, eget lobortis tortor. Pellentesque
                                    semper mi ex, non fringilla nisi commodo id. Donec at congue nunc, ac
                                    consequat leo.
                                    Suspendisse sollicitudin id elit at tristique amet.
                                </p>
                                <img src={require('./../../assets/img_cont.jpg')} alt="user image"/>
                            </div>

                            {/*post info    */}
                            <div className="post-info text-right">
                                <i className="fa fa-clock-o"></i>
                                <span className="padding-left">5 min ago-12:45</span>
                            </div>

                            {/*lcs*/}
                            <div className="lcs text-left">
                                <i className="fa fa-thumbs-up fa-lg cursor-pointer"></i>
                                <span>5</span>
                                <i className="fa fa-share-alt fa-lg cursor-pointer"></i>
                                <span>12</span>
                                <i className="fa fa-comment cursor-pointer"></i>
                            </div>

                            {/*comments*/}
                            <div className="comments">
                                <div className="input-comment">
                                    <input type="text" placeholder="Reply to @husnain"/>
                                </div>

                                <div className="comments-list">
                                    <div className="comment">
                                        <div className="comment-user">
                                            <div>
                                                <img src={require('./../../assets/frank.jpg')} alt="user image"
                                                     className="img-circle"/>
                                            </div>
                                            <div className="padding-left padding-top-5 text-left">
                                                <div>
                                                    <span>Husnain Shahzad</span>
                                                </div>
                                                <div>
                                                    Hello dude WhatsUpp
                                                </div>
                                            </div>
                                        </div>
                                        {/*lcs*/}
                                        <div className="lcs text-left">
                                           <span className={this.state.like}>
                                                <i className="fa fa-thumbs-up fa-lg cursor-pointer" onClick={()=>{this._onToggleLike()}}>

                                                </i> 14
                                            </span>
                                        </div>
                                    </div>

                                    <div className="comment">
                                        <div className="comment-user">
                                            <div>
                                                <img src={require('./../../assets/frank.jpg')} alt="user image"
                                                     className="img-circle"/>
                                            </div>
                                            <div className="padding-left padding-top-5 text-left">
                                                <div>
                                                    <span>Husnain Shahzad</span>
                                                </div>
                                                <div>
                                                    Hello dude WhatsUpp
                                                </div>
                                            </div>
                                        </div>
                                        {/*lcs*/}
                                        <div className="lcs text-left">
                                           <span className={this.state.like}>
                                                <i className="fa fa-thumbs-up fa-lg cursor-pointer" onClick={()=>{this._onToggleLike()}}>

                                                </i> 14
                                            </span>
                                        </div>
                                    </div>

                                    <div className="comment">
                                        <div className="comment-user">
                                            <div>
                                                <img src={require('./../../assets/frank.jpg')} alt="user image"
                                                     className="img-circle"/>
                                            </div>
                                            <div className="padding-left padding-top-5 text-left">
                                                <div>
                                                    <span>Husnain Shahzad</span>
                                                </div>
                                                <div>
                                                    Hello dude WhatsUpp
                                                </div>
                                            </div>
                                        </div>
                                        {/*lcs*/}
                                        <div className="lcs text-left">
                                            <span className={this.state.like}>
                                                <i className="fa fa-thumbs-up fa-lg cursor-pointer" onClick={()=>{this._onToggleLike()}}>

                                                </i> 14
                                            </span>
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


export default PostModal;
