/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';

import '../../../style/main.css'
import './Players.css'


class GamePlayers extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }




    render() {
        return(
            <div className="game-overview">
                <div>
                    Players
                </div>
            </div>
        )
    }
}

export default GamePlayers;