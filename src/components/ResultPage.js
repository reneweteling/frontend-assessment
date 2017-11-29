import React, { Component } from 'react'
import logo from '../assets/images/LEASEPLAN-LOGO@2x.png'

export default class ResultPage extends Component {
  renderContent () {
    if (this.props.hasWon === true) {
      return (
        <div>
          <h1>
            Yes!
            <br />
            Je hebt gewonnen!
          </h1>
          <p>
            U ontvangt automatisch bericht van ons.
          </p>
          <br />
          <a className='button-chevron'>DEEL MET JE VRIENDEN</a>
        </div>
      )
    } else {
      return (
        <div>
          <h1>
            Helaas,
            <br />
            Je bent het niet
            <br />
            geworden.
          </h1>
          <p>
            Bedankt voor het meedoen.
          </p>
        </div>
      )
    }
  }

  render () {
    return (
      <div className='container'>
        <div className='jumbo-yellow'>
          <img src={logo} className='logo' alt='logo' />
          {this.renderContent()}
        </div>
      </div>
    )
  }
}
