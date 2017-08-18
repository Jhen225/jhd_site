import React from 'react';


export default class Skills extends React.Component{

    render(){
        return(

            <div className="thumbnail-unit">
                <div className="thumbnail"><img src={"./images/projects/" + this.props.thumbnail}/></div>
                <div className="thumbnail-overlay">
                    <div className="thumbnail-overlay-text">{this.props.title}</div>
                </div>
            </div>

        );
    }
}