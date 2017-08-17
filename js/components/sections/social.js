import React from 'react';

export default class Social extends React.Component{

    render(){
        var socialClass="soc-" + this.props.site_name;
        return(
            <li>
                <a href={this.props.link} target="blank" className={socialClass}></a>
            </li>
        )
    }
}