import React from 'react';

import './Checkbox.css';

const Checkbox = ({text }) => {
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