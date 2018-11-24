/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, { Component } from 'react';
import {inject} from 'narcissus';


import '../../style/main.css';
import './Write-Post.css';

class WritePost extends Component {

    constructor(props){
        super(props);
        this.state={
            showPost : false
        }
        this._toggleShowPost = this._toggleShowPost.bind(this);
    }

    _toggleShowPost(){
        this.setState({
            showPost: !this.state.showPost
        })
    }

    render() {
        return (
            <div className="write-post-icon">
                {
                    (this.state.showPost)?
                        <div className="write-post">
                            <div className="post-head">
                                <h3>Write Post</h3>
                            </div>
                            <div className="post-text">
                                            <textarea placeholder="Add post content.." rows="6" cols="40">

                                            </textarea>
                            </div>

                            <div className="upload-files">
                                <div className="ulpoad-options">
                                    <ul>
                                        <li>
                                            <i className="fa fa-file-image-o fa-lg"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-file-text-o fa-lg"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-map-marker fa-lg"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-bars fa-lg"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <button type="button" className="btn-default margin-top-0">POST</button>
                                </div>
                            </div>
                        </div>
                        :null
                }
                <div className="padding-vertical icon cursor-pointer" onClick={()=> {this._toggleShowPost()}}>
                    <i className="fa fa-envira fa-lg"></i>
                </div>
            </div>
        );
    }
}

const styles = {
    setting_modal:{
        padding:'0 !important',
        background: "#282c37 !important",
        color : '#9baec8 !important'
    }
};


export default WritePost;
