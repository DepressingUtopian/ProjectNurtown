import React from 'react';

class TextHeader extends React.Component { 
    styles = {
        fontSize:'14px',
        lineHeight:'20px',
        color:'black',
        fontStyle:'',
        fontWeight:''
    }

    render() {
        this.styles.fontSize = this.props.fontSize;
        this.styles.lineHeight = this.props.lineHeight;
        this.styles.color = this.props.color;
        this.styles.fontStyle = this.props.fontStyle;
        this.styles.fontWeight =  this.props.fontWeight;

        this.text = this.props.text;

    return <div className="text-header" style={this.styles}>{this.text}</div>
    }
}

export default TextHeader;