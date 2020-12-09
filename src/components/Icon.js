import React from 'react';

class Icon extends React.Component {

    styles = {
        background: ''
    }

    render() {
        this.styles.background = `url(${this.props.backgroundImage}) center no-repeat`;
        return (
            <div className="icon" style={this.styles}></div>
        );
    }
}

export default Icon;