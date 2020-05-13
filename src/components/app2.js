import React from 'react'
import FormHeader from './ui/form_header'
import FormFooter from './ui/form_footer'

import Basic from './steps/basic'
import Contacts from './steps/contacts'
import Avatar from './steps/avatar'
import Finish from './steps/finish'

// regexp
const RegExpEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
const RegExpMobile = /^\d{10,12}$/

export default class App extends React.Component {
  constructor() {
    super()

    this.initialState = {
      step: 1,
      values: {
        firstname: '',
        lastname: '',
        password: '',
        confirmPassword: '',
        gender: 'male',
        email: '',
        mobile: '',
        country: '1',
        city: '1',
        avatar: null,
      },
      errors: {},
    }
    this.state = this.initialState
  }

  onChange = (event) => {
    const { name, value } = event.target
    if (name === 'country') {
      this.setState((state) => ({
        values: {
          ...state.values,
          city: state.values.city = '',
        },
      }))
    }
    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }))
  }

  validation = () => {
    const {
      firstname,
      lastname,
      password,
      confirmPassword,
      gender,
      email,
      mobile,
      country,
      city,
      avatar,
    } = this.state.values

    const errors = {}
    const { step } = this.state

    switch (step) {
      case 1:
        if (firstname.length < 5) {
          errors.firstname = 'Must be 5 characters or more'
        }

        if (lastname.length < 4) {
          errors.lastname = 'Must be 4 characters or more'
        }

        if (password.length < 6) {
          errors.password = 'Must be 6 characters or more'
        }

        if (password !== confirmPassword) {
          errors.confirmPassword = 'Must be equal password'
        }

        if (!gender) {
          errors.gender = 'Required'
        }
        break

      case 2:
        if (!RegExpEmail.test(email)) {
          errors.email = 'Invalid email address'
        }

        if (!RegExpMobile.test(mobile)) {
          errors.mobile = 'Invalid mobile'
        }
        if (!country) {
          errors.country = 'Required'
        }
        if (!city) {
          errors.city = 'Required'
        }
        break
      case 3:
        if (!avatar) {
          errors.avatar = 'Required'
        }
        break

      default:
    }

    return errors
  }

  nextStep = (event) => {
    event.preventDefault()

    const errors = this.validation()

    // errors
    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors,
      })
    } else {
      this.setState({
        step: this.state.step + 1,
        errors: {},
      })
    }
  }
  prevStep = (event) => {
    event.preventDefault()
    this.setState({
      step: this.state.step - 1,
    })
  }
  reset = (event) => {
    event.preventDefault()
    this.setState(this.initialState)
  }

  onSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    const { step, values, errors } = this.state

    return (
      <div className="form-container card">
        <form className="form">
          <FormHeader step={step} />

          {step === 1 && (
            <Basic values={values} errors={errors} onChange={this.onChange} />
          )}
          {step === 2 && (
            <Contacts
              values={values}
              errors={errors}
              onChange={this.onChange}
            />
          )}
          {step === 3 && (
            <Avatar values={values} errors={errors} onChange={this.onChange} />
          )}
          {step === 4 && <Finish values={values} />}

          <FormFooter
            step={step}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            reset={this.reset}
          />
        </form>
      </div>
    )
  }
}
