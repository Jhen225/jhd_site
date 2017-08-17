import React from 'react';
import LeftChev from '../svgs/leftChev.js';
import RightChev from '../svgs/rightChev.js';

export default class Work extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentItem:0,
        };
    }

    showPreviousItem(){
        
        var i = this.state.currentItem;
        if(i === 0){
            i = (this.props.projects.length - 1);
        }else{
            i--;
        }
        this.setState({
            currentItem:i
        });
        console.log(this.props.projects[this.state.currentItem].thumbnail);
    }

    showNextItem(){

        var i = this.state.currentItem;
        if(i === (this.props.projects.length - 1)){
            i=0;
        }
        else{
            i++;
        }
        
        this.setState({
            currentItem:i
        });
        console.log(this.props.projects[this.state.currentItem].thumbnail);

    }

    render(){
        console.log(this.state.currentItem);
        var style = {
            backgroundImage: 'url(/images/projects/'+this.props.projects[this.state.currentItem].thumbnail,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }

        var j = this.state.currentItem;
        var projects = this.props.projects;

        return(
            

            <div id="work">
                <div className="port-item" style={style}>
                    <div className="overlay">
                        
                        <div className="previous" onClick={this.showPreviousItem.bind(this)}>
                            <LeftChev />
                        </div>
                        <div className="centerContent">
                            <h3 className="item-header">{projects[j].name}</h3>
                            <p className="item-snippet"> {projects[j].description} </p>
                            <div className="item-call-to-action">See More</div>
                        </div>
                        <div className="next" onClick={this.showNextItem.bind(this)}>
                            <RightChev />
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}