import React, { Component } from "react";
import img from './images/BLENDED SENSE LOGO LANDING_PURPLE_edited.gif'
import './FullPageLoader.css';

class FullPageLoader extends Component{
    state = {}

    render() {

        return (
            <div className="loader-container">
                <div className="loadering">
                    <img src={img} width="215px;"/>
                </div>
            </div>
        )
    }
}



export default FullPageLoader;
