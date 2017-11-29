import React, { Component } from 'react'
import * as EmailValidator from 'email-validator'
import promoCodes from '../PromoCodes'

const Input = (props) => {
  return (
    <div className={`inputGroup ${props.name} ${props.type} ${props.error ? 'has-error' : ''}`}>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.handleUpdate} onBlur={props.handleBlur} />
      { props.error &&
        <span className='help'>{props.error}</span>
      }
    </div>
  )
}

export default class PromoForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {
        first_name: '',
        surname: '',
        email: '',
        // phone: '0655128199',
        promotion: '',
        privacy: false
      },
      error: {}
    }
  }

  handleUpdate (fieldName, event) {
    let state = this.state
    state.form[fieldName] = event.target.value
    if (event.target.type === 'checkbox') {
      state.form[fieldName] = event.target.checked
    }
    this.setState(state)
  }

  validateField (fieldName) {
    let state = this.state
    delete state.error[fieldName]
    switch (fieldName) {
      case 'first_name':
        if (state.form[fieldName].length < 3) {
          state.error[fieldName] = 'There should at least be 2 characters'
        }
        if (!state.form[fieldName].match(/^[a-z0-9]+$/i)) {
          state.error[fieldName] = 'You can only use alphanumeric characters'
        }
        break
      case 'surname':
        if (state.form[fieldName].length < 3) {
          state.error[fieldName] = 'There should at least be 2 characters'
        }
        break
      case 'email':
        if (!EmailValidator.validate(state.form.email)) {
          state.error.email = 'This is not a valid email address.'
        }
        break
      case 'promotion':
        if (promoCodes.indexOf(state.form.promotion) === -1) {
          state.error.promotion = 'Code not correct, Try again.'
        }
        break
      case 'privacy':
        if (state.form.privacy !== true) {
          state.error.privacy = 'You must accept the terms.'
        }
        break
    }
    this.setState(state)
  }

  handleSubmit () {
    (Object.keys(this.state.form)).forEach(fieldName => {
      this.validateField(fieldName)
    })

    if (Object.keys(this.state.error).length === 0) {
      this.props.handleSubmit(this.state.form)
    }

    return false
  }

  inputSpread (fieldName) {
    return {
      type: 'text',
      name: fieldName,
      value: this.state.form[fieldName],
      error: this.state.error[fieldName],
      handleBlur: this.validateField.bind(this, fieldName),
      handleUpdate: this.handleUpdate.bind(this, fieldName)
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className='row'>
          <div className='col-50'>
            <Input {...this.inputSpread('first_name')} label={'First name'} placeholder={'Enter first name'} />
          </div>
          <div className='col-50'>
            <Input {...this.inputSpread('surname')} label={'Surname'} placeholder={'Enter surname'} />
          </div>
        </div>
        <Input {...this.inputSpread('email')} label={'E-mail address'} placeholder={'Enter your e-mai address'} type='email' />
        {/* <Input {...this.inputSpread('phone')} label={'Phone number'} placeholder={'Enter your phone number'} /> */}
        <Input {...this.inputSpread('promotion')} label={'Promotion code'} placeholder={'Enter your promotion code'} />
        <Input {...this.inputSpread('privacy')} label={'Accept privacy statement'} type='checkbox' />
        <a className='button-chevron' onClick={this.handleSubmit.bind(this)}>GET OFFER</a>
      </form>
    )
  }
}
