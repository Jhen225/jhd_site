import React from 'react';
import PortfolioItem from './portfolio-item.js'

export default class Portfolio extends React.Component{

    render(){

        var projects = [];
        for(var i = 0; i< this.props.projects.length;i++){
            projects.push(<PortfolioItem key={i} thumbnail={this.props.projects[i].thumbnail} title={this.props.projects[i].name}/>)
        }

        return(
            <section id="portfolio">
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