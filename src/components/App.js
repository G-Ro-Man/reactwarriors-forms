import React from 'react'
import FormHeader from './ui/form_header'
import FormFooter from './ui/form_footer'

import Step1 from './steps/step_1'
import Step2 from './steps/step_2'
import Step3 from './steps/step_3'
import Step4 from './steps/step_4'

// regexp
const regExpEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
const regExpMobile = /^\d{10,12}$/

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      step: 2,
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
  }

  onChange = (event) => {
    const { name, value } = event.target
    if (name === 'country') {
      this.setState((state) => ({
        values: {
          city: state.values.city = '',
        },
      }))
    }
    // const { [name]: _, ...errors } = this.state.errors
    this.setState((state) => ({
      values: {
        ...this.state.values,
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
        if (!regExpEmail.test(email)) {
          errors.email = 'Invalid email address'
        }

        if (!regExpMobile.test(mobile)) {
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
    this.setState({
      step: 1,
      values: {
        firstname: '',
        lastname: '',
        password: '',
        confirmPassword: '',
        country: '2',
        city: '2',
        gender: 'male',
        agree: true,
        avatar: '',
        age: 16,
      },
      errors: {
        firstname: '',
        password: '',
        confirmPassword: '',
        age: false,
      },
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    const { step } = this.state

    return (
      <div className="form-container card">
        <form className="form">
          <FormHeader step={this.state.step} />

          {step === 1 && (
            <Step1
              values={this.state.values}
              errors={this.state.errors}
              onChange={this.onChange}
            />
          )}
          {step === 2 && (
            <Step2
              values={this.state.values}
              errors={this.state.errors}
              onChange={this.onChange}
            />
          )}
          {step === 3 && (
            <Step3
              values={this.state.values}
              errors={this.state.errors}
              onChange={this.onChange}
            />
          )}
          {step === 4 && <Step4 values={this.state.values} />}

          <FormFooter
            step={this.state.step}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            reset={this.reset}
          />
        </form>
      </div>
    )
  }
}
