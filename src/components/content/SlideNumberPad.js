import React from 'react';
import DivideLineIcon from '../../resource/img/divideLine.svg'; 

const SlideNumberPad = ({leftNumber, rightNumber}) => {

        const stylesIcon = {
            background:`url(${DivideLineIcon}) center / cover no-repeat`
        };
    
        return (
            <div className="slide-number-pad">
                <div className="slide-number">{leftNumber}</div>
                <div className="divide-icon" style={stylesIcon}></div>
                <div className="slide-number">{rightNumber}</div>
            </div>   
        );
}

export default SlideNumberPad;