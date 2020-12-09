import React from 'react';
import DivideLineIcon from '../resource/img/divideLine.svg'; 

class SlideNumberPad extends React.Component {
    stylesIcon = {

    }
    render() {
        this.stylesIcon.background = `url(${DivideLineIcon}) center no-repeat`;
        return (
            <div className="slide-number-pad">
                <div className="slide-number">{this.props.leftNumber}</div>
                <div className="divide-icon" style={this.stylesIcon}></div>
                <div className="slide-number">{this.props.rightNumber}</div>
            </div>   
        );
    }
}

export default SlideNumberPad;