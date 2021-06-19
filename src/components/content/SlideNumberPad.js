import React from 'react';

import DivideLineIcon from '../../resource/img/divideLine.svg';
import './SlideNumberPad.scss';
import Icon from '../Icon';

const SlideNumberPad = ({leftNumber, rightNumber}) => {

        const stylesIcon = {
            background:`url(${DivideLineIcon}) center / cover no-repeat`
        };
    
        return (
            <div className="slide-number-pad">
                <div className="slide-number">{leftNumber}</div>
                <Icon url={DivideLineIcon} width={42} height={32}/>
                <div className="slide-number">{rightNumber}</div>
            </div>   
        );
}

export default SlideNumberPad;