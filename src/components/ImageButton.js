import React from 'react';

class ImageButton extends React.Component {

    styles = {
        background:''
    }

    render() {
        this.styles.background = (this.props.backgroundImage !== undefined) ? `url(${this.props.backgroundImage}) center no-repeat` : '';
        let className = (this.props.className !== undefined) ? this.props.className : 'button-image';
        return (
        <button className={className} style={this.styles} onClick={this.props.onClick}> {this.props.content}</button>
        );
    }
}

export default ImageButton;