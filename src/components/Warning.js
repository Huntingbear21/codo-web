import React from 'react';


class Warning extends React.Component {
    render() {
        return (
            <div className="warning-bar">
                <h3 className="warning-text">{this.props.text}</h3>
            </div>
        )
    }
}


export default Warning;
