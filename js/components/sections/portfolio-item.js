import React from 'react';


export default class Skills extends React.Component{

    render(){

        var thumb = "/images/projects/" + this.props.thumbnail;
        return(

            <div className="thumbnail-unit">
                <div className="thumbnail"><img src={thumb}/></div>
                <div className="thumbnail-overlay">
                    <div className="thumbnail-overlay-text">{this.props.title}</div>
                </div>
            </div>

        );
    }
}