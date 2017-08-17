import React from 'react';


export default class Client extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        this.image= "/images/" + this.props.avatar
        return(
            
            <div className="client-unit">
                <div className="image-wrap"><img src={this.image} className="face-image"/></div>
                <div className="client-name">{this.props.name}</div>
                <div className="client-company">{this.props.company}</div>
                <div className="section-text">{this.props.quote}</div>
            </div>

        );
        
    }

}