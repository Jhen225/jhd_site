import React from 'react';
import Social from './social.js';
import ContactForm from './contact-form.js'


export default class Contact extends React.Component{

    render(){
        var email = "mailto:" + this.props.email;
        var socialMedia = [];
        for(var i = 0; i< this.props.socialMedia.length;i++){
            socialMedia.push(<Social key={i} site_name={this.props.socialMedia[i].site_name} link={this.props.socialMedia[i].link}/>);
        }
        return(
            <section id="contact">
                <div className="contact-wrap">

                    <div className="social-wrap">
                        <ul className="soc">
                            {socialMedia}
                        </ul>
                    </div>

                    <div className="contact-email">
                        <a href={email} className="email">{this.props.email}</a>
                    </div>

                </div>
            </section>
        );
    }
}