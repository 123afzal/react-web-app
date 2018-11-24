/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import Dropdown, { DropdownTrigger, DropdownContent } from '../../../node_modules/react-simple-dropdown/lib/components/Dropdown.js';


/*Import Components */
import RightNavigations  from '../../components/right-navigations/Right-Navigations';
import FriendsList from '../../components/friends-list/Friends-List';
import ChatBox from '../../components/chat-box/Chat-Box';
import WritePost from '../../components/write-post/Write-Post'

/* Import Modals */
import SearchModal from '../../components/search-modal/Search-Modal';
import PostModal from '../../components/post-modal/Post-Modal';

import '../../style/main.css'
import './Feed.css';

class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearchModal: false,
            showPostModal : false,

        }
        this._onToggleSearchModal = this._onToggleSearchModal.bind(this);
        this._onTogglePostModal = this._onTogglePostModal.bind(this);
    }

    _onTogglePostModal(){
        this.setState({
            showPostModal : !this.state.showPostModal
        })
    }

    _onToggleSearchModal(){
        this.setState({
            showSearchModal: !this.state.showSearchModal
        })
    }

    render() {
        return (
            <div className="feed">

                {/*main content*/}
                <section className="main">

                    {/*feeds*/}
                    <div className="video">

                        {/*heading*/}
                        <div className="heading">
                            <div className="cursor-pointer" style={{float:"left", width:"33.33%", paddingTop:"10px"}}>
                                <i className="fa fa-bars fa-lg"></i>
                                <span>Feed</span>
                            </div>
                            <div className="search-bar cursor-pointer text-center">
                                <input type="text" placeholder="Search"/>
                                 <i className="fa fa-search" onClick={ ()=>{this._onToggleSearchModal()}}></i>
                            </div>
                        </div>

                        <WritePost/>

                        {/*content*/}
                        <div className="container">

                            <div className="left-div">
                                <div className="main-content">
                                    <div className="posts">
                                        <div className="user-info">
                                            <div>
                                                <img src={require('./../../assets/frank.jpg')} alt="user image"
                                                     className="img-circle"/>
                                            </div>
                                            <div>
                                                <div className="user-name">
                                                    <span style={{width: "280px"}}>Husnain Shahzad</span>
                                                    <Dropdown>
                                                        <DropdownTrigger>
                                                            <i className="fa fa-chevron-down padding-left"></i>
                                                        </DropdownTrigger>
                                                        <DropdownContent>
                                                            <div className="theme-dropdown post-options">
                                                                <ul>
                                                                    <li>
                                                                        Delete
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </DropdownContent>
                                                    </Dropdown>
                                                </div>
                                                <div className="user-nick">
                                                    <span>.husnain</span>
                                                </div>
                                            </div>
                                        </div>
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

                                        <div className="post-info text-right">
                                            <i className="fa fa-clock-o"></i>
                                            <span className="padding-left">5 min ago-12:45</span>
                                        </div>

                                        {/*lcs*/}
                                        <div className="lcs text-left">
                                            <i className="fa fa-thumbs-up fa-lg cursor-pointer"></i>
                                            <span>5</span>
                                            <i className="fa fa-share-alt fa-lg cursor-pointer"></i>
                                            <span >15</span>
                                            <i className="fa fa-comment cursor-pointer" onClick={()=>{this._onTogglePostModal()}}></i>
                                        </div>
                                        <span>Commenter</span>
                                    </div>
                                </div>

                                <div className="main-content">
                                    <div className="posts">
                                        <div className="user-info">
                                            <div>
                                                <img src={require('./../../assets/frank.jpg')} alt="user image"
                                                     className="img-circle"/>
                                            </div>
                                            <div>
                                                <div className="user-name">
                                                    <span style={{width: "280px"}}>Husnain Shahzad</span>
                                                    <Dropdown>
                                                        <DropdownTrigger>
                                                            <i className="fa fa-chevron-down padding-left"></i>
                                                        </DropdownTrigger>
                                                        <DropdownContent>
                                                            <div className="theme-dropdown post-options">
                                                                <ul>
                                                                    <li>
                                                                        Delete
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </DropdownContent>
                                                    </Dropdown>
                                                </div>
                                                <div className="user-nick">
                                                    <span>.husnain</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Praesent in maximus purus, eget lobortis tortor. Pellentesque
                                                semper mi ex, non fringilla nisi commodo id. Donec at congue nunc, ac
                                                consequat leo.
                                                Suspendisse sollicitudin id elit at tristique amet.
                                            </p>
                                            <img src={require('./../../assets/img_cont.jpg')} alt="user image"/>
                                        </div>

                                        <div className="post-info text-right">
                                            <i className="fa fa-clock-o"></i>
                                            <span className="padding-left">5 min ago-12:45</span>
                                        </div>

                                        {/*lcs*/}
                                        <div className="lcs text-left">
                                            <i className="fa fa-thumbs-up fa-lg">
                                                <span>5</span>
                                            </i>
                                            <i className="fa fa-share-alt fa-lg">
                                                <span>12</span>
                                            </i>
                                            <i className="fa fa-comment cursor-pointer" onClick={()=>{this._onTogglePostModal()}}></i>

                                        </div>
                                        <span>Commenter</span>
                                    </div>
                                </div>
                            </div>

                            {/*<div className="right-div">*/}
                                {/*<div className="main-content">*/}
                                    {/*<div className="posts">*/}

                                        {/*<div className="back-feed cursor-pointer">*/}
                                            {/*<div>*/}
                                                {/*<i className="fa fa-chevron-left fa-2x"></i>*/}
                                            {/*</div>*/}
                                            {/*<span className="padding-left">*/}
                                                {/*Back to Feed Column*/}
                                            {/*</span>*/}
                                        {/*</div>*/}

                                        {/*<div className="user-info">*/}
                                            {/*<div>*/}
                                                {/*<img src={require('./../../assets/frank.jpg')} alt="user image"*/}
                                                     {/*className="img-circle"/>*/}
                                            {/*</div>*/}
                                            {/*<div>*/}
                                                {/*<div className="user-name">*/}
                                                    {/*<span style={{width: "280px"}}>Husnain Shahzad</span>*/}
                                                    {/*<Dropdown>*/}
                                                        {/*<DropdownTrigger>*/}
                                                            {/*<i className="fa fa-chevron-down padding-left"></i>*/}
                                                        {/*</DropdownTrigger>*/}
                                                        {/*<DropdownContent>*/}
                                                            {/*<div className="theme-dropdown post-options">*/}
                                                                {/*<ul>*/}
                                                                    {/*<li>*/}
                                                                        {/*Delete*/}
                                                                    {/*</li>*/}
                                                                {/*</ul>*/}
                                                            {/*</div>*/}
                                                        {/*</DropdownContent>*/}
                                                    {/*</Dropdown>*/}
                                                {/*</div>*/}
                                                {/*<div className="user-nick">*/}
                                                    {/*<span>.husnain</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="post-content">*/}
                                            {/*<p>*/}
                                                {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                                                {/*Praesent in maximus purus, eget lobortis tortor. Pellentesque*/}
                                                {/*semper mi ex, non fringilla nisi commodo id. Donec at congue nunc, ac*/}
                                                {/*consequat leo.*/}
                                                {/*Suspendisse sollicitudin id elit at tristique amet.*/}
                                            {/*</p>*/}
                                            {/*<img src={require('./../../assets/img_cont.jpg')} alt="user image"/>*/}
                                        {/*</div>*/}

                                        {/*<div className="post-info text-right">*/}
                                            {/*<i className="fa fa-clock-o"></i>*/}
                                            {/*<span className="padding-left">5 min ago-12:45</span>*/}
                                        {/*</div>*/}

                                        {/*/!*lcs*!/*/}
                                        {/*<div className="lcs text-left">*/}
                                            {/*<i className="fa fa-thumbs-up fa-lg cursor-pointer"></i>*/}
                                            {/*<span>5</span>*/}
                                            {/*<i className="fa fa-share-alt fa-lg cursor-pointer"></i>*/}
                                            {/*<span>10</span>*/}
                                            {/*<i className="fa fa-comment cursor-pointer" onClick={()=>{this._onTogglePostModal()}}></i>*/}
                                        {/*</div>*/}

                                        {/*/!*comments*!/*/}
                                        {/*<div className="comments">*/}
                                            {/*<div className="input-comment">*/}
                                                {/*<input type="text" placeholder="Reply to @husnain"/>*/}
                                            {/*</div>*/}

                                            {/*<div className="comments-list">*/}
                                                {/*<div>*/}
                                                    {/*<img src={require('./../../assets/frank.jpg')} alt="user image"*/}
                                                         {/*className="img-circle"/>*/}
                                                {/*</div>*/}
                                                {/*<div className="padding-left padding-top-5">*/}
                                                    {/*<div>*/}
                                                        {/*<span>Husnain Shahzad</span>*/}
                                                    {/*</div>*/}
                                                    {/*<div>*/}
                                                        {/*Hello dude WhatsUpp*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*/!*lcs*!/*/}
                                            {/*<div className="lcs text-left">*/}
                                                {/*<i className="fa fa-thumbs-up fa-lg cursor-pointer"></i>*/}
                                                {/*<span>5</span>*/}
                                                {/*<i className="fa fa-thumbs-down fa-lg cursor-pointer"></i>*/}
                                                {/*<span>10</span>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                        </div>

                    </div>

                    {/*videos*/}
                    {/*<div className="video">*/}

                        {/*/!*heading*!/*/}
                        {/*<div className="heading cursor-pointer">*/}
                            {/*<span className="cursor-pointer">*/}
                                {/*<i className="fa fa-play fa-lg"></i>*/}
                                {/*<span>Videos</span>*/}
                            {/*</span>*/}
                        {/*</div>*/}

                        {/*/!*content*!/*/}
                        {/*<div className="container">*/}

                            {/*<div className="left-div">*/}
                                {/*<div className="main-content">*/}
                                    {/*<div className="posts">*/}
                                        {/*<div className="user-info">*/}
                                            {/*<div>*/}
                                                {/*<img src={require('./../../assets/frank.jpg')} alt="user image"*/}
                                                     {/*className="img-circle"/>*/}
                                            {/*</div>*/}
                                            {/*<div>*/}
                                                {/*<div className="user-name">*/}
                                                    {/*<span style={{width: "280px"}}>Husnain Shahzad</span>*/}
                                                    {/*<Dropdown>*/}
                                                        {/*<DropdownTrigger>*/}
                                                            {/*<i className="fa fa-chevron-down padding-left"></i>*/}
                                                        {/*</DropdownTrigger>*/}
                                                        {/*<DropdownContent>*/}
                                                            {/*<div className="theme-dropdown post-options">*/}
                                                                {/*<ul>*/}
                                                                    {/*<li>*/}
                                                                        {/*Delete*/}
                                                                    {/*</li>*/}
                                                                {/*</ul>*/}
                                                            {/*</div>*/}
                                                        {/*</DropdownContent>*/}
                                                    {/*</Dropdown>*/}
                                                {/*</div>*/}
                                                {/*<div className="user-nick">*/}
                                                    {/*<span>.husnain</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="post-content cursor-pointer"*/}
                                             {/*onClick={this._changeActiveStatus.bind(this)}>*/}
                                            {/*<p>*/}
                                                {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                                                {/*Praesent in maximus purus, eget lobortis tortor. Pellentesque*/}
                                                {/*semper mi ex, non fringilla nisi commodo id. Donec at congue nunc, ac*/}
                                                {/*consequat leo.*/}
                                                {/*Suspendisse sollicitudin id elit at tristique amet.*/}
                                            {/*</p>*/}
                                            {/*<img src={require('./../../assets/img_cont.jpg')} alt="user image"/>*/}
                                        {/*</div>*/}

                                        {/*<div className="post-info text-right">*/}
                                            {/*<i className="fa fa-clock-o"></i>*/}
                                            {/*<span className="padding-left">5 min ago-12:45</span>*/}
                                        {/*</div>*/}

                                        {/*/!*lcs*!/*/}
                                        {/*<div className="lcs text-left">*/}
                                            {/*<i className="fa fa-thumbs-up fa-lg cursor-pointer"></i>*/}
                                            {/*<span>5</span>*/}
                                            {/*<i className="fa fa-thumbs-down fa-lg cursor-pointer"></i>*/}
                                            {/*<span>10</span>*/}
                                            {/*<i className="fa fa-share-alt fa-lg cursor-pointer"></i>*/}
                                            {/*<span>12</span>*/}
                                            {/*<i className="fa fa-comment cursor-pointer"></i>*/}
                                        {/*</div>*/}
                                        {/*<span>Commenter</span>*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                                {/*<div className="main-content">*/}
                                    {/*<div className="posts">*/}
                                        {/*<div className="user-info">*/}
                                            {/*<div>*/}
                                                {/*<img src={require('./../../assets/frank.jpg')} alt="user image"*/}
                                                     {/*className="img-circle"/>*/}
                                            {/*</div>*/}
                                            {/*<div>*/}
                                                {/*<div className="user-name">*/}
                                                    {/*<span style={{width: "280px"}}>Husnain Shahzad</span>*/}
                                                    {/*<Dropdown>*/}
                                                        {/*<DropdownTrigger>*/}
                                                            {/*<i className="fa fa-chevron-down padding-left"></i>*/}
                                                        {/*</DropdownTrigger>*/}
                                                        {/*<DropdownContent>*/}
                                                            {/*<div className="theme-dropdown post-options">*/}
                                                                {/*<ul>*/}
                                                                    {/*<li>*/}
                                                                        {/*Delete*/}
                                                                    {/*</li>*/}
                                                                {/*</ul>*/}
                                                            {/*</div>*/}
                                                        {/*</DropdownContent>*/}
                                                    {/*</Dropdown>*/}
                                                {/*</div>*/}
                                                {/*<div className="user-nick">*/}
                                                    {/*<span>.husnain</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="post-content">*/}
                                            {/*<p>*/}
                                                {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                                                {/*Praesent in maximus purus, eget lobortis tortor. Pellentesque*/}
                                                {/*semper mi ex, non fringilla nisi commodo id. Donec at congue nunc, ac*/}
                                                {/*consequat leo.*/}
                                                {/*Suspendisse sollicitudin id elit at tristique amet.*/}
                                            {/*</p>*/}
                                            {/*<img src={require('./../../assets/img_cont.jpg')} alt="user image"/>*/}
                                        {/*</div>*/}

                                        {/*<div className="post-info text-right">*/}
                                            {/*<i className="fa fa-clock-o"></i>*/}
                                            {/*<span className="padding-left">5 min ago-12:45</span>*/}
                                        {/*</div>*/}

                                        {/*/!*lcs*!/*/}
                                        {/*<div className="lcs text-left">*/}
                                            {/*<i className="fa fa-thumbs-up fa-lg">*/}
                                                {/*<span>5</span>*/}
                                            {/*</i>*/}
                                            {/*<i className="fa fa-thumbs-down fa-lg">*/}
                                                {/*<span>10</span>*/}
                                            {/*</i>*/}
                                            {/*<i className="fa fa-share-alt fa-lg">*/}
                                                {/*<span>12</span>*/}
                                            {/*</i>*/}
                                            {/*<i className="fa fa-comment"></i>*/}
                                        {/*</div>*/}
                                        {/*<span>Commenter</span>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="right-div">*/}
                                {/*<div className="main-content">*/}
                                    {/*<div className="posts">*/}

                                        {/*<div className="back-feed cursor-pointer"*/}
                                             {/*onClick={this._changeActiveStatus.bind(this)}>*/}
                                            {/*<div>*/}
                                                {/*<i className="fa fa-chevron-left fa-2x"></i>*/}
                                            {/*</div>*/}
                                            {/*<span className="padding-left">*/}
                                                {/*Back to Feed Column*/}
                                            {/*</span>*/}
                                        {/*</div>*/}

                                        {/*<div className="user-info">*/}
                                            {/*<div>*/}
                                                {/*<img src={require('./../../assets/frank.jpg')} alt="user image"*/}
                                                     {/*className="img-circle"/>*/}
                                            {/*</div>*/}
                                            {/*<div>*/}
                                                {/*<div className="user-name">*/}
                                                    {/*<span style={{width: "280px"}}>Husnain Shahzad</span>*/}
                                                    {/*<Dropdown>*/}
                                                        {/*<DropdownTrigger>*/}
                                                            {/*<i className="fa fa-chevron-down padding-left"></i>*/}
                                                        {/*</DropdownTrigger>*/}
                                                        {/*<DropdownContent>*/}
                                                            {/*<div className="theme-dropdown post-options">*/}
                                                                {/*<ul>*/}
                                                                    {/*<li>*/}
                                                                        {/*Delete*/}
                                                                    {/*</li>*/}
                                                                {/*</ul>*/}
                                                            {/*</div>*/}
                                                        {/*</DropdownContent>*/}
                                                    {/*</Dropdown>*/}
                                                {/*</div>*/}
                                                {/*<div className="user-nick">*/}
                                                    {/*<span>.husnain</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="post-content">*/}
                                            {/*<p>*/}
                                                {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                                                {/*Praesent in maximus purus, eget lobortis tortor. Pellentesque*/}
                                                {/*semper mi ex, non fringilla nisi commodo id. Donec at congue nunc, ac*/}
                                                {/*consequat leo.*/}
                                                {/*Suspendisse sollicitudin id elit at tristique amet.*/}
                                            {/*</p>*/}
                                            {/*<img src={require('./../../assets/img_cont.jpg')} alt="user image"/>*/}
                                        {/*</div>*/}

                                        {/*<div className="post-info text-right">*/}
                                            {/*<i className="fa fa-clock-o"></i>*/}
                                            {/*<span className="padding-left">5 min ago-12:45</span>*/}
                                        {/*</div>*/}

                                        {/*/!*lcs*!/*/}
                                        {/*<div className="lcs text-left">*/}
                                            {/*<i className="fa fa-thumbs-up fa-lg cursor-pointer"></i>*/}
                                            {/*<span>5</span>*/}

                                            {/*<i className="fa fa-thumbs-down fa-lg cursor-pointer"></i>*/}
                                            {/*<span>10</span>*/}
                                            {/*<i className="fa fa-share-alt fa-lg cursor-pointer"></i>*/}
                                            {/*<span>12</span>*/}
                                            {/*<i className="fa fa-comment cursor-pointer"></i>*/}
                                        {/*</div>*/}

                                        {/*<div className="comments">*/}
                                            {/*<div className="input-comment">*/}
                                                {/*<input type="text" placeholder="Reply to @husnain"/>*/}
                                            {/*</div>*/}

                                            {/*<div className="comments-list">*/}
                                                {/*<div>*/}
                                                    {/*<img src={require('./../../assets/frank.jpg')} alt="user image"*/}
                                                         {/*className="img-circle"/>*/}
                                                {/*</div>*/}
                                                {/*<div className="padding-left padding-top-5">*/}
                                                    {/*<div>*/}
                                                        {/*<span>Husnain Shahzad</span>*/}
                                                    {/*</div>*/}
                                                    {/*<div>*/}
                                                        {/*Hello dude WhatsUpp*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*/!*lcs*!/*/}
                                            {/*<div className="lcs text-left">*/}
                                                {/*<i className="fa fa-thumbs-up fa-lg cursor-pointer"></i>*/}
                                                {/*<span>5</span>*/}
                                                {/*<i className="fa fa-thumbs-down fa-lg cursor-pointer"></i>*/}
                                                {/*<span>10</span>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                        {/*</div>*/}


                    {/*</div>*/}

                    {/*notifications*/}
                    {/*<div className="video">*/}

                        {/*/!*heading*!/*/}
                        {/*<div className="heading cursor-pointer">*/}
                            {/*<span className="cursor-pointer">*/}
                                {/*<i className="fa fa-video-camera fa-lg"></i>*/}
                                {/*<span>Notifications</span>*/}
                            {/*</span>*/}
                        {/*</div>*/}

                        {/*/!*content*!/*/}
                        {/*<div className="container">*/}

                            {/*<div className="left-div">*/}
                                {/*<div className="main-content">*/}
                                    {/*<div className="posts">*/}
                                        {/*<div className="user-info">*/}
                                            {/*<div>*/}
                                                {/*<img src={require('./../../assets/frank.jpg')} alt="user image"*/}
                                                     {/*className="img-circle"/>*/}
                                            {/*</div>*/}
                                            {/*<div>*/}
                                                {/*<div className="user-name">*/}
                                                    {/*<span style={{width: "280px"}}>Husnain Shahzad</span>*/}
                                                    {/*<Dropdown>*/}
                                                        {/*<DropdownTrigger>*/}
                                                            {/*<i className="fa fa-chevron-down padding-left"></i>*/}
                                                        {/*</DropdownTrigger>*/}
                                                        {/*<DropdownContent>*/}
                                                            {/*<div className="theme-dropdown post-options">*/}
                                                                {/*<ul>*/}
                                                                    {/*<li>*/}
                                                                        {/*Delete*/}
                                                                    {/*</li>*/}
                                                                {/*</ul>*/}
                                                            {/*</div>*/}
                                                        {/*</DropdownContent>*/}
                                                    {/*</Dropdown>*/}
                                                {/*</div>*/}
                                                {/*<div className="user-nick">*/}
                                                    {/*<span>.husnain</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="post-content cursor-pointer"*/}
                                             {/*onClick={this._changeActiveStatus.bind(this)}>*/}
                                            {/*<p>*/}
                                                {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                                                {/*Praesent in maximus purus, eget lobortis tortor. Pellentesque*/}
                                                {/*semper mi ex, non fringilla nisi commodo id. Donec at congue nunc, ac*/}
                                                {/*consequat leo.*/}
                                                {/*Suspendisse sollicitudin id elit at tristique amet.*/}
                                            {/*</p>*/}
                                            {/*<img src={require('./../../assets/img_cont.jpg')} alt="user image"/>*/}
                                        {/*</div>*/}

                                        {/*<div className="post-info text-right">*/}
                                            {/*<i className="fa fa-clock-o"></i>*/}
                                            {/*<span className="padding-left">5 min ago-12:45</span>*/}
                                        {/*</div>*/}

                                        {/*/!*lcs*!/*/}
                                        {/*<div className="lcs text-left">*/}
                                            {/*<i className="fa fa-thumbs-up fa-lg cursor-pointer"></i>*/}
                                            {/*<span>5</span>*/}
                                            {/*<i className="fa fa-thumbs-down fa-lg cursor-pointer"></i>*/}
                                            {/*<span>10</span>*/}
                                            {/*<i className="fa fa-share-alt fa-lg cursor-pointer"></i>*/}
                                            {/*<span>12</span>*/}
                                            {/*<i className="fa fa-comment cursor-pointer"></i>*/}
                                        {/*</div>*/}
                                        {/*<span>Commenter</span>*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                            {/*</div>*/}

                            {/*<div className="right-div">*/}
                                {/*<div className="main-content">*/}
                                    {/*<div className="posts">*/}

                                        {/*<div className="back-feed cursor-pointer"*/}
                                             {/*onClick={this._changeActiveStatus.bind(this)}>*/}
                                            {/*<div>*/}
                                                {/*<i className="fa fa-chevron-left fa-2x"></i>*/}
                                            {/*</div>*/}
                                            {/*<span className="padding-left">*/}
                                                {/*Back to Feed Column*/}
                                            {/*</span>*/}
                                        {/*</div>*/}

                                        {/*<div className="user-info">*/}
                                            {/*<div>*/}
                                                {/*<img src={require('./../../assets/frank.jpg')} alt="user image"*/}
                                                     {/*className="img-circle"/>*/}
                                            {/*</div>*/}
                                            {/*<div>*/}
                                                {/*<div className="user-name">*/}
                                                    {/*<span>Husnain Shahzad</span>*/}
                                                    {/*<i className="fa fa-chevron-down padding-left"></i>*/}
                                                {/*</div>*/}
                                                {/*<div className="user-nick">*/}
                                                    {/*<span>.husnain</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="post-content">*/}
                                            {/*<p>*/}
                                                {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                                                {/*Praesent in maximus purus, eget lobortis tortor. Pellentesque*/}
                                                {/*semper mi ex, non fringilla nisi commodo id. Donec at congue nunc, ac*/}
                                                {/*consequat leo.*/}
                                                {/*Suspendisse sollicitudin id elit at tristique amet.*/}
                                            {/*</p>*/}
                                            {/*<img src={require('./../../assets/img_cont.jpg')} alt="user image"/>*/}
                                        {/*</div>*/}

                                        {/*<div className="post-info text-right">*/}
                                            {/*<i className="fa fa-clock-o"></i>*/}
                                            {/*<span className="padding-left">5 min ago-12:45</span>*/}
                                        {/*</div>*/}

                                        {/*/!*lcs*!/*/}
                                        {/*<div className="lcs text-left">*/}
                                            {/*<i className="fa fa-thumbs-up fa-lg cursor-pointer"></i>*/}
                                            {/*<span>5</span>*/}

                                            {/*<i className="fa fa-thumbs-down fa-lg cursor-pointer"></i>*/}
                                            {/*<span>10</span>*/}
                                            {/*<i className="fa fa-share-alt fa-lg cursor-pointer"></i>*/}
                                            {/*<span>12</span>*/}
                                            {/*<i className="fa fa-comment cursor-pointer"></i>*/}
                                        {/*</div>*/}

                                        {/*<div className="comments">*/}
                                            {/*<div className="input-comment">*/}
                                                {/*<input type="text" placeholder="Reply to @husnain"/>*/}
                                            {/*</div>*/}

                                            {/*<div className="comments-list">*/}
                                                {/*<div>*/}
                                                    {/*<img src={require('./../../assets/frank.jpg')} alt="user image"*/}
                                                         {/*className="img-circle"/>*/}
                                                {/*</div>*/}
                                                {/*<div className="padding-left padding-top-5">*/}
                                                    {/*<div>*/}
                                                        {/*<span>Husnain Shahzad</span>*/}
                                                    {/*</div>*/}
                                                    {/*<div>*/}
                                                        {/*Hello dude WhatsUpp*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*/!*lcs*!/*/}
                                            {/*<div className="lcs text-left">*/}
                                                {/*<i className="fa fa-thumbs-up fa-lg cursor-pointer"></i>*/}
                                                {/*<span>5</span>*/}
                                                {/*<i className="fa fa-thumbs-down fa-lg cursor-pointer"></i>*/}
                                                {/*<span>10</span>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                        {/*</div>*/}

                    {/*</div>*/}
                </section>

                {/*right navigations*/}
                <RightNavigations onCheck={this._onToggleWritePostModal}></RightNavigations>


                {/*friends*/}
                <FriendsList></FriendsList>

                <div className="chat-row">
                    <ChatBox></ChatBox>
                    <ChatBox></ChatBox>
                </div>

                {
                    (this.state.showSearchModal)?
                        <SearchModal onToggle={this._onToggleSearchModal}></SearchModal>
                        :null
                },
                {
                    (this.state.showPostModal)?
                        <PostModal onToggle={this._onTogglePostModal}></PostModal>
                        :null
                }



            </div>
        );
    }
}

const styles = {
    setting_modal: {
        padding: '0 !important',
        background: "#282c37 !important",
        color: '#9baec8 !important'
    }
};


export default Feed;
