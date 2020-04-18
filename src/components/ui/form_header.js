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
          Step 1
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
          Step 2
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
          Step 3
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
          Step 4
        </li>
      </nav>
    </div>
  )
}

export default FormHeader
