/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';


/*Import Components */
import RightNavigations  from '../../components/right-navigations/Right-Navigations';
import FriendsList from '../../components/friends-list/Friends-List';
import ChatBox from '../../components/chat-box/Chat-Box'
import WritePost from '../../components/write-post/Write-Post'


/* Import Modal */
import LocationModal from '../../components/location-modal/Location-Modal';

import '../../style/main.css'
import './Map.css'

class Map extends Component{

    constructor(props){
        super(props);
        this.state = {
            showLocationModal : false
        }
        this._toggleLocationModal = this._toggleLocationModal.bind(this)
    }

    _toggleLocationModal(){
        this.setState({
            showLocationModal: !this.state.showLocationModal
        })
    }

    render() {
        return(
            <div className="map">

                <div className="marker1">
                    <i className="fa fa-map-marker fa-3x cursor-pointer" onClick={()=>{this._toggleLocationModal()}}></i>
                </div>
                <div className="marker2">
                    <i className="fa fa-map-marker fa-3x cursor-pointer" onClick={()=>{this._toggleLocationModal()}}></i>
                </div>


                {/*right navigations*/}
                <RightNavigations onCheck={this._onToggleWritePostModal}></RightNavigations>

                {/*friends*/}
                <FriendsList></FriendsList>

                <div className="chat-row">
                    <ChatBox></ChatBox>
                </div>

                <WritePost/>

                {
                    (this.state.showLocationModal)?
                        <LocationModal onToggle={this._toggleLocationModal}></LocationModal>
                        :null
                }

            </div>
        )
    }
}

export default Map;