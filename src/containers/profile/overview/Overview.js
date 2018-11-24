/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';

class Overview extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }


    render() {
        return(
            <div className="profile-content">
                <div className="user-overview">
                    <span>Hi, there this is Mohsin Khan, Cs is the best game.</span>
                </div>

                {/*Posted Vidoes on Profile*/}
                <div className="profile-videos">
                    <div>Videos</div>
                    <div className="videos">
                        <div className="video">
                            <video>
                                <source src={require('../../../assets/video2.mp4')} type="video/mp4"></source>
                            </video>
                            <div>
                                This is the video of Fighting
                                <div>posted 4 years ago</div>
                            </div>
                        </div>
                        <div className="video">
                            <video>
                                <source src={require('../../../assets/video2.mp4')} type="video/mp4"></source>
                            </video>
                            <div>
                                This is the video of Fighting
                                <div>posted 4 years ago</div>
                            </div>
                        </div>
                        <div className="video">
                            <video>
                                <source src={require('../../../assets/video2.mp4')} type="video/mp4"></source>
                            </video>
                            <div>
                                This is the video of Fighting
                                <div>posted 4 years ago</div>
                            </div>
                        </div>
                        <div className="video">
                            <video>
                                <source src={require('../../../assets/video2.mp4')} type="video/mp4"></source>
                            </video>
                            <div>
                                This is the video of Fighting
                                <div>posted 4 years ago</div>
                            </div>
                        </div>

                        {/*<div className="video">*/}
                            {/*<video>*/}
                                {/*<source src={require('../../../assets/video1.mp4')} type="video/mp4"></source>*/}
                            {/*</video>*/}
                            {/*<div>*/}
                                {/*This is the video of Fighting*/}
                                {/*<div>posted 4 years ago</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </div>

                {/*Game and Activites*/}
                <div className="game-actvities">
                    {/*Liked Games*/}
                    <div className="games-list">
                        Liked Games <label>12</label>
                        <ul>
                            <li>
                                <img src={require('./../../../assets/g1.jpg')} alt="content"  className="cursor-pointer"/>
                            </li>
                            <li>
                                <img src={require('./../../../assets/g2.jpg')} alt="content"  className="cursor-pointer"/>
                            </li>
                            <li>
                                <img src={require('./../../../assets/g3.jpg')} alt="content"  className=" cursor-pointer"/>
                            </li>
                            <li>
                                <img src={require('./../../../assets/g4.jpg')} alt="content"  className=" cursor-pointer"/>
                            </li>
                            <li>
                                <img src={require('./../../../assets/g5.jpg')} alt="content"  className=" cursor-pointer"/>
                            </li>
                            <li>
                                <img src={require('./../../../assets/g6.jpg')} alt="content"  className=" cursor-pointer"/>
                            </li>
                            <li>
                                <img src={require('./../../../assets/g1.jpg')} alt="content"  className="cursor-pointer"/>
                            </li>
                            <li>
                                <img src={require('./../../../assets/g5.jpg')} alt="content"  className=" cursor-pointer"/>
                            </li>
                            <li>
                                <img src={require('./../../../assets/g6.jpg')} alt="content"  className=" cursor-pointer"/>
                            </li>
                        </ul>
                    </div>

                    {/*Activities*/}
                    <div className="activities">
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

                {/*Groups*/}
                <div className="groups">
                    Groups
                    <div className="group-content">
                        <span>This profile does not have group yet</span>
                    </div>
                </div>

            </div>
        )
    }
}

export default Overview;