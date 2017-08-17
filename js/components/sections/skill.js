import React from 'react';


export default class Skills extends React.Component{

    render(){

        var levelClasses = "skill-icons skill-" + this.props.level;
        return(

            <div className="skill-unit">
                <div className="skill-label">{this.props.skill}</div>
                <div className={levelClasses}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        );
    }
}