import React from 'react';
import Skill from './skill.js'

export default class Skills extends React.Component{

    render(){

        var skills = [];
        for(var i = 0; i< this.props.skills.length;i++){
            skills.push(<Skill key={i} skill={this.props.skills[i].skill} level={this.props.skills[i].level} />)
        }

        return(
            <section id="skills-container">
                {skills}
            </section>
        );
    }
}