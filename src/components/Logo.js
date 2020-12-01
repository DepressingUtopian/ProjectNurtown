import React from 'react';

class Logo extends React.Component {
    styles = {
        width:0,
        height:0,
        backgroundImage:'',
        margin:'',
        backgroundRepeat:'no-repeat',
        display:'inline-block'
    }
    
    render() {
        this.styles.width = this.props.width;
        this.styles.height = this.props.height;
        this.styles.backgroundImage =`url(${this.props.imageUrl})`;
        this.styles.margin = this.props.margin;

        return <div className={this.props.className} style={this.styles}></div>;
    }
}

export default Logo;