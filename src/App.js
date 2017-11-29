import React, { Component } from 'react'
import FormPage from './components/FormPage'
import ResultPage from './components/ResultPage'
import Api from './lib/Api'
import './App.css'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasWon: null
    }
  }

  handleSubmit (values) {
    new Api().CheckWinner(values).then((data) => {
      this.setState({
        hasWon: data.didWin
      })
    })
  }

  render () {
    if (this.state.hasWon === null) {
      return (<FormPage handleSubmit={this.handleSubmit.bind(this)} />)
    } else {
      return (<ResultPage hasWon={this.state.hasWon} />)
    }
  }
}
