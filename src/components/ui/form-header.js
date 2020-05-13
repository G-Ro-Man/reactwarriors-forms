import React from 'react'

const FormHeader = (props) => {
  const { step } = props
  return (
    <div className="card-header">
      <nav className="nav nav-pills pill-success nav-fill">
        <li
          className={`nav-item nav-link font-weight-bold ${
            step !== 1
              ? step > 1
                ? 'border-bottom text-success border-success'
                : 'disabled'
              : 'active'
          }`}
        >
          Basic
        </li>
        <li
          className={`nav-item nav-link font-weight-bold ${
            step !== 2
              ? step > 2
                ? 'border-bottom text-success border-success'
                : 'disabled'
              : 'active'
          }`}
        >
          Contacts
        </li>
        <li
          className={`nav-item nav-link font-weight-bold ${
            step !== 3
              ? step > 3
                ? 'border-bottom text-success border-success'
                : 'disabled'
              : 'active'
          }`}
        >
          Avatar
        </li>
        <li
          className={`nav-item nav-link font-weight-bold ${
            step !== 4
              ? step > 4
                ? 'border-bottom text-success border-success'
                : 'disabled'
              : 'active'
          }`}
        >
          Finish
        </li>
      </nav>
    </div>
  )
}

export default FormHeader
