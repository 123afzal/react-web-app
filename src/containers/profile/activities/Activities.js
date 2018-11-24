/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';

import '../../../style/main.css'
import './Activities.css'

class Activities extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }


    render() {
        return(
            <div className="actvities">
                <div className="activity">
                    Latest Activity <label>1</label>
                    <div className="post-list">
                        <div className="post">

                            <div className="user-header">
                                <img src={require('./../../../assets/g1.jpg')} alt="content"  className="cursor-pointer img-circle"/>
                                <span className="user-name">Syed_Afzal</span>
                                <span className="user-drop"><i className="fa fa-chevron-down cursor-pointer"></i></span>
                            </div>

                            <div className="post-content">
                                        <span>
                                            Hello World
                                        </span>
                            </div>


                            <div className="lcs">
                                <ul>
                                    <li><i className="fa fa-heart"></i> <label>4</label></li>
                                    <li><i className="fa fa-thumb-tack"></i> <label>5</label></li>
                                    <li><i className="fa fa-commenting"></i> <label>10</label></li>
                                    <li className="float-right"><label>over 2 years ago</label></li>
                                </ul>
                            </div>

                            <div className="load-comments">
                                <i className="fa fa-ellipsis-h"></i>
                                <label style={{position:"absolute"}} className="padding-left">Load Comments</label>
                            </div>

                            <div className="write-comment">
                                        <span>
                                            <img src={require('./../../../assets/favicon.ico')} alt="content"  className="cursor-pointer img-circle"/>
                                        </span>
                                <input type="text" placeholder="Join the conversation" className="margin-left"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Activities;