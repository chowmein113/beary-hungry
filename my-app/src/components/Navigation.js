import React from 'react';

export class Navigation extends React.Component {
    render() {
        return (
            <div className="topnav">
                <li style={{ float: 'left' }}><a href="/">Home</a></li>
                <li style={{ float: 'left' }}><a href="/dining">CalDining</a></li>
                <li style={{ float: 'left' }}><a href="/restaurants">Restaurants</a></li>
            </div>
        );
    }
}

export default Navigation
