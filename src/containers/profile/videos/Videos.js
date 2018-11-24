/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';

import '../../../style/main.css'
import './Videos.css'

class Videos extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }


    render() {
        return(
            <div className="profile-content">
                <div className="profile-videos">
                    <div>Videos</div>
                    <div className="videos">
                        <div className="video">
                            <video>
                                <source src={require('../../../assets/video2.mp4')} type="video/mp4"></source>
                            </video>
                            <div>
                                    This is the video of grizzly
                                    <div>posted 4 years ago</div>
                                </div>
                        </div>
                        <div className="video">
                            <video>
                                <source src={require('../../../assets/video2.mp4')} type="video/mp4"></source>
                            </video>
                            <div>
                                This is the video of grizzly
                                <div>posted 4 years ago</div>
                            </div>
                        </div>
                        <div className="video">
                            <video>
                                <source src={require('../../../assets/video2.mp4')} type="video/mp4"></source>
                            </video>
                            <div>
                                This is the video of grizzly
                                <div>posted 4 years ago</div>
                            </div>
                        </div>

                        <div className="video">
                            <video>
                                <source src={require('../../../assets/video2.mp4')} type="video/mp4"></source>
                            </video>
                            <div>
                                This is the video of grizzly
                                <div>posted 4 years ago</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Videos;