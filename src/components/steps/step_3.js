import React from 'react'
import ClassNames from 'classnames'

/*
avatar	file	Required
*/

const Step3 = (props) => {
  const { values, errors, onChange } = props

  const onChangeAvatar = (event) => {
    const reader = new FileReader()

    reader.onload = (event) => {
      onChange({
        target: {
          name: 'avatar',
          value: event.target.result,
        },
      })
    }

    reader.readAsDataURL(event.target.files[0])
  }

  return (
    <div className="card-body">
      <div className="form-group">
        <img
          src={
            values.avatar ||
            (values.gender === 'male'
              ? '../../img/user-male-icon.png'
              : '../../img/user-female-icon.png')
          }
          className="w-100 mb-4 p-2"
          alt="avatar"
        />
        <div
          className={ClassNames('input-group mb-3', { invalid: errors.avatar })}
        >
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupFileAddon01">
              Upload avatar
            </span>
          </div>
          <div className="custom-file">
            <input
              id="avatar"
              name="avatar"
              type="file"
              className="custom-file-input"
              aria-describedby="inputGroupFileAddon01"
              onChange={onChangeAvatar}
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              Choose file
            </label>
          </div>
        </div>
        {errors.avatar && (
          <div className="invalid-feedback">{errors.avatar}</div>
        )}
      </div>
    </div>
  )
}

export default Step3
