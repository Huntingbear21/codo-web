import React from 'react';


export class Section1 extends React.Component {
    render() {
        return (
            <div className="section1">
                <p className="titletext">Coding Helper</p>
                <p className="smalltext">Anywhere, anytime, with coding.</p>
                <div className="button-container">
                    <a className="title-button invite-button">Invite</a>
                    <a className="title-button">Support server</a>
                </div>
            </div>
        )
    }
}
