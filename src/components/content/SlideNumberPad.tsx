import React from 'react';

import DivideLineIcon from '../../resource/img/divideLine.svg';
import './SlideNumberPad.scss';
import Icon from '../Icon';

interface ISlideNumberPadProps {
  leftNumber: number | string;
  rightNumber: number | string;
}

const SlideNumberPad = ({leftNumber, rightNumber}: ISlideNumberPadProps) => {
        return (
            <div className="slide-number-pad">
                <div className="slide-number">{leftNumber}</div>
                <Icon url={DivideLineIcon} width={42} height={32}/>
                <div className="slide-number">{rightNumber}</div>
            </div>   
        );
}

export default SlideNumberPad;