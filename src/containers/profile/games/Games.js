/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import { Link } from 'react-router';

import '../../../style/main.css'
import './Games.css'

class Games extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }


    render() {
        return(
            <div className="profile-content">
                <div className="games">
                     <span>
                         Games <label> 12</label>
                     </span>
                    <label className="margin-left">
                        All <i className="fa fa-chevron-down"></i>
                    </label>

                    <div className="games-list">
                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../../assets/g1.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <Link to="/Game">
                                        <img src={require('../../../assets/a.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                    </Link>
                                </div>
                                <div >
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                            </div>
                        </div>

                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../../assets/g2.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <Link to="/Game">
                                        <img src={require('../../../assets/a.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                    </Link>                                </div>
                                <div>
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                            </div>
                        </div>

                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../../assets/g3.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <Link to="/Game">
                                        <img src={require('../../../assets/a.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                    </Link>                                </div>
                                <div>
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                            </div>
                        </div>

                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../../assets/g4.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <Link to="/Game">
                                        <img src={require('../../../assets/a.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                    </Link>                                </div>
                                <div>
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                            </div>
                        </div>

                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../../assets/g5.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <Link to="/Game">
                                        <img src={require('../../../assets/a.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                    </Link>                                </div>
                                <div>
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                            </div>
                        </div>

                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../../assets/g6.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <Link to="/Game">
                                        <img src={require('../../../assets/a.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                    </Link>                                </div>
                                <div>
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                            </div>
                        </div>

                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../../assets/g1.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <Link to="/Game">
                                        <img src={require('../../../assets/a.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                    </Link>                                </div>
                                <div>
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                            </div>
                        </div>

                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../../assets/g2.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <Link to="/Game">
                                        <img src={require('../../../assets/a.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                    </Link>                                </div>
                                <div>
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                            </div>
                        </div>

                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../../assets/g3.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <Link to="/Games/GameReviews">
                                        <img src={require('../../../assets/a.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                    </Link>
                                </div>
                                <div>
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                            </div>
                        </div>

                        <div className="game-card" style={{backgroundImage: 'url(' + require('../../../assets/g4.jpg') + ')'}}>
                            <div className="content">
                                <div className="card-image">
                                    <Link to="/Game">
                                        <img src={require('../../../assets/a.jpg')} alt="content"  className="img-circle cursor-pointer"/>
                                    </Link>                                </div>
                                <div>
                                    <span className='title'>Mohsin Khan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Games;