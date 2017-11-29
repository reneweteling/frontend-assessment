import React, { Component } from 'react'
import * as EmailValidator from 'email-validator'
import PromoCodes from '../PromoCodes'

const Input = (props) => {
  return (
    <div className={`inputGroup ${props.name} ${props.type} ${props.error ? 'has-error' : ''}`}>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.handleUpdate} />
      { props.error &&
        <span class='help'>{props.error}</span>
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
        phone: '',
        voucher: '',
        privacy: false
      },
      error: {
        first_name: 'This is a required field',
        privacy: 'You must accept the terms.',
        voucher: 'Code not correct, Try again'
      }
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

  valdateField (fieldName) {
    let state = this.state
    switch (fieldName) {
      case 'first_name':
      case 'surname':
      case 'phone':
        if (state.form[fieldName].length < 3) {
          state.error[fieldName] = 'There should at least be 2 characters'
        }
        break
      case 'email':
        if (!EmailValidator.validate(state.form.email)) {
          state.error.email = 'This is not a valid email address.'
        }
        break
      case 'voucher':
        if (PromoCodes.indexOf(state.form.voucher) === -1) {
          state.error.voucher = 'Code not correct, Try again.'
        }
        break
      case 'privacy':
        if (state.form.privacy !== true) {
          state.error.privacy = 'You must accept the terms.'
        }
        break
      default:
        delete state.error[fieldName]
        break
    }
    this.setState(state)
  }

  handleSubmit () {

  }

  inputSpread (fieldName) {
    return {
      type: 'text',
      name: fieldName,
      value: this.state.form[fieldName],
      error: this.state.error[fieldName],
      handleUpdate: this.handleUpdate.bind(this, fieldName)
    }
  }

  render () {
    console.log(this.state.form)
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='row'>
          <div className='col-50'>
            <Input {...this.inputSpread('first_name')} label={'First name'} placeholder={'Enter first name'} />
          </div>
          <div className='col-50'>
            <Input {...this.inputSpread('surname')} label={'Surname'} placeholder={'Enter surname'} />
          </div>
        </div>
        <Input {...this.inputSpread('email')} label={'E-mail address'} placeholder={'Enter your e-mai address'} type='email' />
        <Input {...this.inputSpread('phone')} label={'Phone number'} placeholder={'Enter your phone number'} />
        <Input {...this.inputSpread('voucher')} label={'Voucher code'} placeholder={'Enter your voucher code'} />
        <Input {...this.inputSpread('privacy')} label={'Accept privacy statement'} type='checkbox' />
        <input type='submit' value='Get offer' />
      </form>
    )
  }
}
