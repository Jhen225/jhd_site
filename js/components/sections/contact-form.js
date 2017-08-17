import React from 'react';

export default class ContactForm extends React.Component{

    render(){

        return(
            <div className="form-wrap">
                <form method="POST" action="/contact/email">
                    <div className="row_wrap">

                        <input type="text" name="name" placeholder="Name" className="contactName"/>

                        <input type="email" name="email" placeholder="Email" className="contactEmail"/>
                    </div>
                    
                    <input type="textarea" name="message" placeholder="Message" className="contactMessage"/>
                    <input type="submit" value="Submit" className="contactSubmit"/>
                </form>
            </div>
        )
    }
}