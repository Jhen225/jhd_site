import React from 'react';

import _site from '../../config.js';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';
import Navigation from './header/Navigation.js';
import About from './sections/about.js';
import Skills from './sections/skills.js';
import Portfolio from './sections/portfolio.js';
import Clients from './sections/clients.js';
import Contact from './sections/contact.js';
import Work from './sections/work.js';
import DownChev from './svgs/downChev.js';
import LeftChev from './svgs/leftChev.js';
import RightChev from './svgs/rightChev.js';

export default class App extends React.Component{
    constructor(props){
        super(props);

    }
    
    render(){

        return(

            <div>
                <div id="hamburger">
                    <div className="menuBar bar1"></div>
                    <div className="menuBar bar2"></div>
                    <div className="menuBar bar3"></div>
                </div>

                <div className="nav-menu-container hide">
                    <div className="nav-menu">
                        <a href="#about" className="nav-menu-item">About</a>
                        <a href="#projects" className="nav-menu-item">Projects</a>
                        <a href="#clients" className="nav-menu-item">Clients</a>
                        <a href="#contact" className="nav-menu-item">Contact</a>
                    </div>
                </div>

                <div className="content-container">
                    <div id="header">
                        
                        <nav className="navbar"><a href="#about" className="navbar-item">About</a><a href="#projects" className="navbar-item">Projects</a><a href="#clients" className="navbar-item">Clients</a><a href="#contact" className="navbar-item">Contact</a></nav>
                    </div>
                    <Header bgImg={_site.site_info.home.bg_img}/>
                    <div className="container">
                        <About about={_site.site_info.about}/>
                        <Skills skills={_site.site_info.about.skills}/>
                        <Portfolio projects={_site.site_info.portfolio.projects}/>
                        <Clients clients={_site.site_info.clients}/>
                        <Contact socialMedia={_site.site_info.contact.social_links} email={_site.site_info.contact.email}/>                        
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}