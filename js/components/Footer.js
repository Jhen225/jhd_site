import React from 'react';

export default class Footer extends React.Component{

    render(){

        return(
            <footer id="main-footer">
                <p>© JoshHenryDesigns { new Date().getFullYear}</p>
            </footer>

            
        );
    }
}