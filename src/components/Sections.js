import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faTools, faSnowflake } from '@fortawesome/free-solid-svg-icons';


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
                <img src="assets/compile_command.png" className="round-img" />
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
                <img src="assets/dpy_doc_command.png" className="round-img" />
                <div>
                    <p className="infotext">Simply browse the documentation.</p>
                    <p className="infotext small-info">Coding Helper provides search functions without any more steps.</p>
                </div>
            </div>
        )
    }
}


export class Section4 extends React.Component {
    render() {
        return (
            <div className="sections spacebetween blurple">
                <img src="assets/snippet_command.png" className="round-img" />
                <div>
                    <p className="infotext">Beautiful image, with only one command.</p>
                    <p className="infotext small-info">Post beautiful articles with <a className="p-text-link" href="https://carbon.now.sh/" target="_blank">Carbon API</a>.</p>
                </div>
            </div>
        )
    }
}


export class Section5 extends React.Component {
    render() {
        return (
            <>
                <p className="section5-title text-center bold">Other Commands</p>
                <div className="sections spacebetween section5">
                    <div className="section5-smallbar">
                        <p className="section5-text bold">PyPI, NPM Search</p>
                        <FontAwesomeIcon icon={ faSearch } size="7x"/>
                    </div>
                    <div className="section5-smallbar">
                        <p className="section5-text bold">Stack Overflow Search</p>
                        <FontAwesomeIcon icon={ faStackOverflow } size="7x"/>
                    </div>
                    <div className="section5-smallbar">
                        <p className="section5-text bold">flake8 code check</p>
                        <FontAwesomeIcon icon={ faSnowflake } size="7x"/>
                    </div>
                </div>
            </>
        )
    }
}