import React from 'react';

class MenuItem extends React.Component {
    render() {
        return (
            <a href={this.props.linkUrl}>{this.props.content}</a>
        );
    }
}

export default MenuItem;