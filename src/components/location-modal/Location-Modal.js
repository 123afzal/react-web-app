/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import {inject} from 'narcissus';


import '../../style/main.css';
import './Location-Modal.css';

class LocationModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }
    render() {
        return (
            <ModalContainer className="modal">
                <ModalDialog className={inject(styles)} onClose={this.props.onToggle}>

                    <div className="modal">
                        <div className="location">
                            <h3>Game of Throns | Game of legends</h3>
                            <video controls>
                                <source src={require('../../assets/video2.mp4')} type="video/mp4"></source>
                            </video>
                        </div>
                    </div>

                </ModalDialog>
            </ModalContainer>
        );
    }
}

const styles = {
    background: "#282c37 !important",
    color: '#ffffff !important',
};


export default LocationModal;
