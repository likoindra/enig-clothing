import React from 'react'

import './form-input.styles.scss'

// kita tidak membutukan state di comoponent ini, maka dari itu menggunakan function component
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      type="text"
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
)

export default FormInput
