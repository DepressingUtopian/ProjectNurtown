import React from 'react';

import './Checkbox.scss';

interface ICheckbox {
  text: string;
}

const Checkbox = ({ text }: ICheckbox) => {
    return (
      <div className="checkbox_with_text">
      <label>
      <input type="checkbox" name="license" />
      <span className="checkmark"></span>
      <p>{text}</p>
      </label>
    </div>
    );
}

export default Checkbox;