import React from 'react'
import ClassNames from 'classnames'

const Select = (props) => {
  const { id, labelText, name, value, onChange, error, options } = props

  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <select
        className={ClassNames('form-control', { invalid: error })}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>
          Choose your {name}
        </option>
        {options}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

export default Select
