import React from 'react';
import Social from './social.js';
import ContactForm from './contact-form.js'


export default class Contact extends React.Component{

    render(){
        var email = "mailto:" + this.props.email;
        let social = this.props.socialMedia.map((soc, i) => {
            return <Social key={i} site_name={soc.site_name} link={soc.link}/>
        })
        
        return(
            <section id="contact">
                <div className="contact-wrap">

                    <div className="contact-form">
                        <h3>Get In Touch</h3>
                        
                        <div className="contact-form-info">
                            <label>Name:</label>
                            <input type="text" name="name" placeholder="Enter your name" className="contact-input"/>
                        </div>
                        <br/>
                        <div className="contact-form-info">
                            <label>Email:</label>
                            <input type="text" name="email" placeholder="Enter your email" className="contact-input"/>
                        </div>
                        <br/>
                        <div className="contact-form-info">
                            <label>Message:</label>
                            <textarea className="contact-message" name="Enter your message" placeholder="Message"></textarea>
                        </div>    
                        
                        {/*<input type="Submit" className="contact-btn"/>*/}
                    </div>

                    <div className="contact-info">
                        <div className="social-wrap">
                            <ul className="soc">
                                {social}
                            </ul>
                        </div>

                        <div className="contact-email">
                            <a href={email} className="email">{this.props.email}</a>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}