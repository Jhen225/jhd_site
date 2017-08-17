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
                        <a href="#about" className="nav-menu-item">
                            <div className="nav-text">About</div>
                            <div className="nav-message">Just a little about a man</div>
                        </a>
                        <a href="#work" className="nav-menu-item">
                            <div className="nav-text">Work</div>
                            <div className="nav-message">Just some of a man's work</div>
                        </a>
                        <a href="#clients" className="nav-menu-item">
                            <div className="nav-text">Clients</div>
                            <div className="nav-message">Just some cool people</div>
                        </a>
                        <a href="#contact" className="nav-menu-item">
                            <div className="nav-text">Contact</div>
                            <div className="nav-message">Just how to contact a man</div>
                        </a>
                    </div>
                </div>

                <div className="content-container">
                    <div id="header">
                        
                        <nav className="navbar"><a href="#about" className="navbar-item">About</a><a href="#work" className="navbar-item">Work</a><a href="#clients" className="navbar-item">Clients</a><a href="#contact" className="navbar-item">Contact</a></nav>
                    </div>
                    <Header bgImg={_site.site_info.home.bg_img}/>
                    <div className="container">
                        <About about={_site.site_info.about}/>
                        <Skills skills={_site.site_info.about.skills}/>
                        {/*<Work projects={_site.site_info.portfolio.projects} />*/}
                        <Portfolio projects={_site.site_info.portfolio.projects}/>
                        <Clients clients={_site.site_info.clients}/>
                        <Contact socialMedia={_site.site_info.contact.social_links} email={_site.site_info.contact.email}/>
                        <Footer />
                    </div>
                </div>
            </div>
        );

        // 
        // <div id="work">
        //     <div className="port-item">
        //         <div className="overlay">
        // 
        //             <div className="previous" onClick={}>
        //                 <LeftChev />
        //             </div>
        //             <div className="centerContent">
        //                 <h3 className="item-header">Portfolio Item Title</h3>
        //                 <p className="item-snippet"> Snippet about Portfolio Item </p>
        //                 <div className="item-call-to-action">See More</div>
        //             </div>
        //             <div className="next" onClick={this.showNextItem}>
        //                 <RightChev />
        //             </div>
        //         </div>
        //     </div>
        // </div>

        /*return(
            <section className="port">
                <div id="header">
                    <Navigation />
                </div>
                <div className="hero" style={heroStyle}>
                    <div className="overlay"></div>

                    <div className="left"></div>

                    <div className="center">
                        <div className="hero-content"></div>
                        <div className="bottom">
                            <DownChev />
                        </div>
                    </div>

                    <div className="right"></div>

                </div>
                <About about={_site.site_info.about}/>
                


            </section>
        ); */
    }
}