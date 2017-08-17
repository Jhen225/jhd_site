import React from 'react';


export default class About extends React.Component{

    render(){
        var avatar="/images/"+ this.props.about.avatar;
        return(
            <section id="about">
                <div className="section-header">
                    <h2 className="header-text">Here's A Little About Me</h2>
                </div>
                <div className="image-wrap"><img src={avatar} className="face-image"/></div>
                <div className="section-text" >{this.props.about.blurb}</div>
            </section>
        );
    }
}