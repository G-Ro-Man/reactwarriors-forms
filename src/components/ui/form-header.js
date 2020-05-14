import React, { Component } from 'react'
import classNames from 'classnames'

const stepsNames = ['Basic', 'Contacts', 'Avatar', 'Finish']

export default class FormHeader extends Component {
  render() {
    const { step } = this.props

    const className = (index) => {
      return classNames('nav-item nav-link font-weight-bold', {
        active: step === index + 1,
        'border-bottom text-success border-success': step > index + 1,
      })
    }

    return (
      <div className="card-header">
        <nav className="nav nav-pills pill-success nav-fill">
          {stepsNames.map((stepName, index) => {
            return (
              <li key={index} className={className(index)}>
                {stepName}
              </li>
            )
          })}
        </nav>
      </div>
    )
  }
}
