import React from 'react';
import Client from './client.js'


export default class Clients extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        var clients = [];
        var clientNav = [];
        var logos = [];

        // this.props.clients.map((client,ind) => {
            
        // });
        for(var i = 0; i< this.props.clients.length;i++){
            clients.push(<Client key={i} avatar={this.props.clients[i].avatar} name={this.props.clients[i].name}
            company={this.props.clients[i].company} quote={this.props.clients[i].quote}/>)
            clientNav.push(<span key={i} className="client-mobile-nav-icon"></span>);

            logos.push()
        }

        return(
            
            <section id="clients">
                <div className="section-header">
                    <h2 className="header-text">Greatest People Ever</h2>
                </div>

                <div className="client-mobile-nav">
                    {clientNav}
                </div>

                <div className="client-slider">
                    {clients}
                </div>
                
                <div className="logo-container">
                    {logos}
                </div>
            </section>
        );
    }
}