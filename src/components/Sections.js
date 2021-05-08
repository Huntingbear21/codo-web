import React from 'react';


export class Section1 extends React.Component {
    render() {
        return (
            <div className="sections">
                <p className="titletext">Coding Helper</p>
                <p className="smalltext">Anywhere, anytime, with coding.</p>
                <div className="button-container">
                    <a href="https://discordapp.com/api/oauth2/authorize?client_id=687886541619462293&permissions=522304&scope=bot" className="title-button codo-color">Invite</a>
                    <a href="https://discord.gg/qX7Aah82x5" className="title-button">Support server</a>
                </div>
            </div>
        )
    }
}


export class Section2 extends React.Component {
    render() {
        return (
            <div className="sections spacebetween pastel-yellow">
                <img src="assets/dummy-screenshot.png" className="round-img" />
                <div>
                    <p className="infotext">Run some snippets easily and fast.</p>
                    <p className="infotext small-info">Too lazy to open terminal and run? Just run a simple command!</p>
                </div>
            </div>
        )
    }
}


export class Section3 extends React.Component {
    render() {
        return (
            <div className="sections spacebetween reversed-text pastel-blue">
                <img src="assets/dummy-screenshot.png" className="round-img" />
                <div>
                    <p className="infotext">Simply browse the documentation.</p>
                    <p className="infotext small-info">Coding Helper provides search functions without any more steps.</p>
                </div>
            </div>
        )
    }
}