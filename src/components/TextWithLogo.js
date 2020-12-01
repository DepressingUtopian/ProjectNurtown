import React from 'react';
import Logo from './Logo';

class TextWithLogo extends React.Component {
    stylesText = {
        fontSize: '14px',
        lineHeight: '20px',
        color: 'black',
        fontStyle: '',
        fontWeight: '',
        marginLeft: '20px'
    }

    stylesLogo = {
        width: 0,
        height: 0,
        imageUrl: '',
        margin: ''
    }

    render() {
        this.stylesText.fontSize = this.props.fontSize;
        this.stylesText.lineHeight = this.props.lineHeight;
        this.stylesText.color = this.props.color;
        this.stylesText.fontStyle = this.props.fontStyle;
        this.stylesText.fontWeight = this.props.fontWeight;

        this.stylesLogo.width = this.props.width;
        this.stylesLogo.height = this.props.height;
        this.stylesLogo.imageUrl = this.props.imageUrl;
        this.stylesLogo.margin = this.props.margin;

        this.text = this.props.text;

        return (
            <div className="text-with-logo">
                <Logo className={this.props.classNameLogo} width="16px" height="16px" imageUrl={this.stylesLogo.imageUrl} />
                <div className="text" style={this.stylesText}>{this.text}</div>
            </div>
        )
    }
}

export default TextWithLogo;