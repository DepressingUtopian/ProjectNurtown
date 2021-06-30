import React from 'react';
import { FieldError } from 'react-hook-form';
import './Checkbox.scss';

interface ICheckbox {
  text: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: FieldError;
}

const Checkbox = ({ text, checked, onChange, error }: ICheckbox) => {
  return (
    <div className="checkbox_with_text">
      <label>
        <input type="checkbox" name="license" onChange={(event) => onChange && onChange(event)} />
        <span className={`checkmark ${error ? 'error' : ''}`} />
        <p>{text}</p>
      </label>
    </div>
  );
}

export default Checkbox;