import { Button } from "bootstrap";
import React from "react";

export default function Project(){
    return(
        <div className='container-fluid'>
            <div className="border-bottom border-secondary">
                <p>Businesses</p>
                <img src='#'/>
                <a className="btn btn-white"></a>
            </div>
            <div>
                <a className="btn btn-white text-info ">My Business</a>
                <a className="btn btn-white text-info">Active</a>
                <a className="btn btn-white text-info">All Types</a>
                <input type='search' placeholder="Search"/>
            </div>
        </div>
    )
}