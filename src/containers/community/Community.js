/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, { Component } from 'react';

/* Import all components */
import RightNavigations  from '../../components/right-navigations/Right-Navigations';
import FriendsList from '../../components/friends-list/Friends-List';
import ChatBox from '../../components/chat-box/Chat-Box'
import WritePost from '../../components/write-post/Write-Post'

import '../../style/main.css'
import './Community.css';

class Channels extends Component {

    constructor(props){
        super(props);
    }


    render() {

        return (
            <div className="community">

                {/*main content*/}
                <section className="main">

                    {/*top navigations*/}
                    <div className="top-navigations">
                        <nav>
                            <a href="#" className="active">All</a>
                            <a href="#">Players</a>
                            <a href="">Games</a>
                        </nav>
                    </div>

                    {/*channels contents*/}
                    <div className="channels-content">
                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../assets/game1.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <img src={require('./../../assets/b.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                </div>
                                <div className="margin-vertical">
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                                <div className="margin-vertical">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../assets/game1.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <img src={require('./../../assets/b.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                </div>
                                <div className="margin-vertical">
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                                <div className="margin-vertical">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../assets/game1.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <img src={require('./../../assets/b.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                </div>
                                <div className="margin-vertical">
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                                <div className="margin-vertical">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>

                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../assets/game1.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <img src={require('./../../assets/b.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                </div>
                                <div className="margin-vertical">
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                                <div className="margin-vertical">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>

                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../assets/g.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <img src={require('./../../assets/b.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                </div>
                                <div className="margin-vertical">
                                    <span className='title'>Mohsin Khan 2</span>
                                    <i className="fa fa-check fa-lg padding-left"></i>
                                </div>
                            </div>
                        </div>

                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../assets/g.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <img src={require('./../../assets/b.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                </div>
                                <div className="margin-vertical">
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                                <div className="margin-vertical">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>

                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../assets/game1.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <img src={require('./../../assets/b.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                </div>
                                <div className="margin-vertical">
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                                <div className="margin-vertical">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>

                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../assets/game1.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <img src={require('./../../assets/b.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                </div>
                                <div className="margin-vertical">
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                                <div className="margin-vertical">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>

                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../assets/game1.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <img src={require('./../../assets/b.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                </div>
                                <div className="margin-vertical">
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                                <div className="margin-vertical">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>

                {/*right navigations*/}
                    <RightNavigations></RightNavigations>


                    {/*friends*/}
                    <FriendsList></FriendsList>


                <div className="chat-row">
                    <ChatBox></ChatBox>
                    <ChatBox></ChatBox>
                </div>

                <WritePost/>

            </div>
        );
    }
}


export default Channels;
