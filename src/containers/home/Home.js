import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import {inject} from 'narcissus';
import { browserHistory, Link } from 'react-router'



import './Home.css';

class Home extends Component {
    state = {
        isShowingModalSignin: false,
        isShowingModalSignup: false,
        isShowing:false
    }
    handleSignin = () => this.setState({isShowingModalSignin: true})
    handleSignup = () => this.setState({isShowingModalSignup: true})
    handleCloseSignin = () => this.setState({isShowingModalSignin: false})
    handleCloseSignup = () => this.setState({isShowingModalSignup: false})

    _changeState(){
        browserHistory.push("/Feed");
    }

    render() {
        return (

            <div className='home text-center'>

                <section className="container nav">
                    <nav>
                        <Link to="">
                            <img src={require('./../../assets/logo.png')} alt="logo" />
                            <span className="highlight">Display</span>
                        </Link>
                        <Link to="/">Home</Link>
                        <Link to="/Feed">Feed</Link>
                        <Link to="">Docs</Link>
                        <Link to="">Contact</Link>
                    </nav>
                </section>

                <section className="container intro">
                    <h1>Giving social networking back to <span className="highlight">you</span></h1>
                    <p>
                        With thousands of interconnected communities to choose from,
                        and the tools to make your own, Mastodon is the world’s largest free, open-source,
                        decentralized microblogging network.
                    </p>
                    <div className="buttons">
                        <button className='btn-default' onClick={this.handleSignin}>Login</button>
                        <button className='btn-border' onClick={this.handleSignup}>Sign up</button>
                    </div>
                    <div className='intro-img-div'>
                        <img src={require('./../../assets/content.png')} alt="content" />
                    </div>
                </section>

                <section className="channels">
                    <div className="container">
                        <h4>As seen on</h4>
                        <div >
                            <img src={require('./../../assets/channel.png')} alt="logo" />
                            <img src={require('./../../assets/channel.png')} alt="logo" />
                            <img src={require('./../../assets/channel.png')} alt="logo" />
                            <img src={require('./../../assets/channel.png')} alt="logo" />
                        </div>
                    </div>
                </section>

                <section className="features">
                    <div className="container">

                        <div className="feature text-left">
                            <div className="feature-content">
                                <h3 className="highlight">Find your perfect place</h3>
                                <p>
                                    Mastodon is a federated network. Pick an instance that suits you,
                                    out of a diverse pool for all sorts of interests, needs, and languages,
                                    run by independent people and organizations. Regardless of which one you choose,
                                    you can always interact with everyone else.
                                </p>
                            </div>
                            <div className="feature-icon">
                                <i className="fa fa-globe"></i>
                            </div>
                        </div>

                        <div className="feature text-right">
                            <div className="feature-content">
                                <h3 className="highlight">Built for real conversation</h3>
                                <p>
                                    With 500 characters per post, you get plenty of space to go deep into topics,
                                    instead of just making surface-level quips. Built-in support for content and
                                    spoiler warnings lets you share sensitive discussions and media with only
                                    those who want to see them.
                                </p>
                            </div>
                            <div className="feature-icon">
                                <i className="fa fa-comments"></i>
                            </div>
                        </div>

                        <div className="feature text-left">
                            <div className="feature-content">
                                <h3 className="highlight">You’re a person, not a product</h3>
                                <p>
                                    Mastodon is free, open source software. The development is crowdfunded.
                                    All instances are independently owned, hosted, and moderated.
                                    There is no monopoly by a single commercial company, no ads, no tracking.
                                </p>
                            </div>
                            <div className="feature-icon">
                                <i className="fa fa-users"></i>
                            </div>
                        </div>

                        <div className="feature text-right">
                            <div className="feature-content">
                                <h3 className="highlight">Always within reach</h3>
                                <p>
                                    With multiple apps available for iOS, Android, and every platform you can think of,
                                    Mastodon is easy to use everywhere you go. An easy to use and open API
                                    ensures a rich ecosystem of 3rd party apps.
                                </p>
                            </div>
                            <div className="feature-icon">
                                <i className="fa fa-mobile"></i>
                            </div>
                        </div>

                        <div className="feature-table">
                            <h3 className="highlight">Choose an instance picker</h3>
                            <p>
                                Each instance is a separate, independently owned gateway into the fediverse.
                                You can talk to your friends regardless of which one you choose, but they have
                                different moderation policies and interest groups.
                            </p>
                            <div className="footer">
                                <button className="button btn-default">
                                    Help me choose
                                </button>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="installation">
                    <div className="container">
                        <h3 className="highlight">Install your own</h3>
                        <p>
                            If you are interested in running your own instance — for your friends, family or
                            organization — you can get started by reading the installation documentation.
                            You only host your own users and the content that they subscribe to.
                        </p>
                        <div className="footer">
                            <button className="button btn-border">
                                Read the docs
                            </button>
                        </div>
                    </div>
                </section>

                <section className="works">
                    <div className="container">
                        <div className="work">
                            <div className="content">
                                <h3 className="highlight">How it works</h3>
                                <p>
                                    Anyone can run a server of Mastodon. Each server hosts individual user accounts,
                                    the content they produce, and the content they subscribe to.

                                    Each user account has a globally unique name (e.g. @user@example.com), consisting
                                    of the local username (@user), and the domain name of the server it is on (example.com).

                                    Users can follow each other, regardless of where they're hosted — when a local user
                                    follows a user from a different server, the server subscribes to that user's updates for the first time.
                                </p>
                            </div>
                            <div className="work-img">
                                <img src={require('./../../assets/elephants.png')} alt="logo" />
                            </div>
                        </div>
                        <div className="server">
                            <h3 className="highlight">Why is that cool?</h3>
                            <p>
                                Servers are run independently by different people and organizations. They can apply
                                wildly different moderation policies, so you can find or make one that fits your taste
                                perfectly. A decentralized network is harder for governments to censor. If one server
                                goes bankrupt or starts acting unethically, the network persists so you never have to
                                worry about migrating your friends and audience to a yet another platform again.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="sponsors-branding">
                    <div className="container">
                        <div className="main">
                            <div className="sponsors">
                                <h3 className="highlight">Sponsors</h3>
                                <p>
                                    Mastodon is free, open-source software. There is no advertising,
                                    monetizing, or venture capital. The development is crowdfunded.
                                </p>
                                <div className="footer">
                                    <button className="button btn-default">
                                        Support on Patreon
                                    </button>
                                    <button className="button btn-border">
                                        View sponsors
                                    </button>
                                </div>
                            </div>
                            <div className="branding">
                                <h3 className="highlight">Branding</h3>
                                <p>
                                    Download logos, icons, and elephants
                                </p>
                                <div className="footer">
                                    <button className="button btn-border">
                                        Get press kit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    {/*Login modal*/}

                    {
                        this.state.isShowingModalSignin &&
                        <ModalContainer className="modal" onClose={this.handleCloseSignin}>
                            <ModalDialog onClose={this.handleCloseSignin} className={inject(styles)}>
                                <div className="modal">
                                    <div>
                                        <h1>Login</h1>
                                        <form>
                                            <input className="min-width-250" type="text" placeholder="User Name" />
                                            <input className="min-width-250" type="text" placeholder="Password" />
                                            <button onClick={this._changeState.bind(this)} type="button" className='btn-default'>Sign in</button>
                                        </form>
                                    </div>
                                </div>

                            </ModalDialog>
                        </ModalContainer>
                    }


                    {/*signup modal*/}
                    {
                    this.state.isShowingModalSignup &&
                    <ModalContainer className="modal" onClose={this.handleCloseSignup}>
                        <ModalDialog onClose={this.handleCloseSignup} className={inject(styles)}>
                            <div className="modal">
                                <div>
                                    <h1>Sign Up</h1>
                                    <form>
                                        <input className="min-width-250" type="text" placeholder="User Name" />
                                        <input className="min-width-250" type="text" placeholder="email" />
                                        <input className="min-width-250" type="password" placeholder="Password" />
                                        <input className="min-width-250" type="password" placeholder="Confirm Password" />
                                        <button type="button" className='btn-default' onClick={this._changeState.bind(this)}>Create Account</button>
                                    </form>
                                </div>
                            </div>
                        </ModalDialog>
                    </ModalContainer>
                }
                </section>

            </div>
        );
    }
}

const styles = {
    background: "#282c37 !important",
    color: '#ffffff !important',
    setting_modal:{
        padding:'0 !important',
        background: "#282c37 !important",
        color : '#9baec8 !important'
    }
};

export default Home;
