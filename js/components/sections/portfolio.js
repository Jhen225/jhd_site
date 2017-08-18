import React from 'react';
import PortfolioItem from './portfolio-item.js'

export default class Portfolio extends React.Component{
    render(){

        let projects = this.props.projects.map((project, i) => {
            return <PortfolioItem key={i} thumbnail={project.thumbnail} title={project.name}/>
        });

        return(
            <section id="projects">
                <div className="section-header">
                <h2 className="header-text">Check Out My Work</h2>
                </div>
                <div className="thumbnail-wrap">
                   {projects}
                </div>
            </section>
        );
    }
}