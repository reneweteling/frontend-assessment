import React, { Component } from 'react'
import PromoForm from './components/PromoForm'
import logo from './assets/images/LEASEPLAN-LOGO@2x.png'
import car from './assets/images/CAR-STICKER@2x.png'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <div className='jumbo-yellow'>
          <img src={car} className='car' alt='car' />
          <img src={logo} className='logo' alt='logo' />
          <h1>
            Win een jaar lang
            <br />
            gratis autorijden in
            <br />
            de nieuwe Golf!
          </h1>
          <p>
            Net binnen: <a href='https://www.volkswagen.nl/modellen/golf' target='_blank' without='' rel='noopener noreferrer'>Volkswagen Golf TDI</a>
          </p>
        </div>
        <div className='content row'>
          <div className='col-50'>
            <h2>Introduction text</h2>
            <p>Deserunt id minim sit dolor fugiat minim deserunt. Fugiat in adipisicing non aliquip Lorem. Laborum labore adipisicing anim voluptate consequat ut et nisi cillum fugiat. Ut laboris esse id dolore. Consequat quis id qui nulla ut veniam quis magna pariatur laborum ipsum eu. Minim est mollit cillum irure est occaecat occaecat est proident minim adipisicing et. Ut veniam exercitation incididunt enim cupidatat aliquip id amet do.</p>
            <p>Lorem ut culpa eu sunt consectetur in culpa labore ad consequat sint aliqua. Quis do nulla cillum incididunt minim excepteur aliqua proident dolore irure aliquip. Consectetur eiusmod in do qui deserunt minim labore voluptate do aute. Reprehenderit eu sit labore esse pariatur ullamco quis incididunt commodo.</p>
          </div>
          <div className='col-50'>
            <h3>Get a car leasing offer</h3>
            <p>
              You may request an quote for one or more leasing cars without any obligation. If you are a private person <a>please use this form.</a>
            </p>
            <PromoForm handleSubmit={(values) => { console.log(values) }} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
