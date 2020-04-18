import React from 'react'
import ClassNames from 'classnames'

const Field = (props) => {
  const {
    id,
    labelText,
    name,
    type,
    placeholder,
    value,
    onChange,
    error,
  } = props
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        name={name}
        type={type}
        className={ClassNames('form-control', { invalid: error })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

export default Field
