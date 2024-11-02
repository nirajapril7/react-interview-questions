import { Component } from 'react'
import './App.css'
import CheckoutStepper from './stepper'

const CHECKOUT_STEPS = [
  {
    name:"Custome Info",
    Comment: () => <div> Provide your contact details </div>
  },
  {
    name: "Shipping Info",
    Component: () => <div> Enter your shipping address</div>
  },
  {
    name: "Payment",
    Component: () => <div> Complete payment for your order</div>
  },
  {
    name: "Delivered",
    Component: () => <div> Your order has delivered</div>
  }
]

function App() {
  return(
    <div>
      <h2>Stepper</h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  )
}

export default App
