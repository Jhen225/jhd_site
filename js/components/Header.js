import React from 'react';
import Navigation from './header/Navigation.js'

export default class Header extends React.Component{

    render(){
        var heroStyle = {
            backgroundImage: "url(./images/hero_images/" + this.props.bgImg
        }
        return(
            <div className="hero-container" style={heroStyle}>
                <div className="overlay">
                    <div className="left-column flexbox-column">
                        <div className="hero-content-top">
                            <div className="hero-text-big">Joshua Henry</div>
                            <div className="hero-text-small">Mobile | Web Developer</div>
                        </div>
                        <div className="hero-content-bottom">
                            <div className="text-center">
                            <div className="tagline">Striving to provide the very best service to my clients</div>
                            </div><a href="#contact" className="call-to-action-hero flexbox-center">Get In Touch</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}