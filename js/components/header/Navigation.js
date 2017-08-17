import React from 'react';

export default class Navigation extends React.Component{

    render(){

        return(
            <div className="nav-container">
                <nav className="navbar">
                    <a className="navbar-item" href="#about">About</a>
                    <a className="navbar-item" href="#work">Work</a>
                    <a className="navbar-item" href="#clients">Clients</a>
                    <a className="navbar-item" href="#contact">Contact</a>
                </nav>
            </div>

            
        );
    }
}