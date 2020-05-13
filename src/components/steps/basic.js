import React from 'react'
import Field from '../fields/field'

const Basic = (props) => {
  const { values, errors, onChange } = props

  return (
    <div className="card-body">
      <Field
        id="firstname"
        labelText="First Name"
        name="firstname"
        type="text"
        placeholder="Enter Name"
        value={values.firstname}
        onChange={onChange}
        error={errors.firstname}
      />
      <Field
        id="lastname"
        labelText="Last Name"
        name="lastname"
        type="text"
        placeholder="Enter Last Name"
        value={values.lastname}
        onChange={onChange}
        error={errors.lastname}
      />
      <Field
        id="password"
        labelText="Password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={values.password}
        onChange={onChange}
        error={errors.password}
      />
      <Field
        id="confirmPassword"
        labelText="Repeat password"
        name="confirmPassword"
        type="password"
        placeholder="Enter repeat password"
        value={values.confirmPassword}
        onChange={onChange}
        error={errors.confirmPassword}
      />

      {/* Gender  */}
      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-3 pt-0">Gender</legend>
          <div className="col-sm-9">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={values.gender === 'male'}
                onChange={onChange}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={values.gender === 'female'}
                onChange={onChange}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
        </div>
        {errors.gender && (
          <div className="invalid-feedback">{errors.gender}</div>
        )}
      </fieldset>
    </div>
  )
}

export default Basic
