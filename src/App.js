import React, { Component } from 'react';
import './App.css';
import CartHeader from './Components/CartHeader.js';
import CartFooter from './Components/CartFooter';
import CartItems from './Components/CartItems';
import Form from './Components/Form.js';

function findById(records, inputId) {
  for (let i = 0; i <records.length; i++) {
    if(records[i].id === Number(inputId)){
    return records[i]
    }
  }
}  

const products = [
  { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
  { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
  { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
  { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
  { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
  { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
  { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
  { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
  { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
]

class App extends Component {

  state = {
    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    currentItem: "",
    currentQuantity: 0,
  }

  setQuantity = (event) => {
    this.setState({
      currentQuantity: event.target.value
    })
  }

  setItem = (event) => {
    this.setState({
      currentItem: event.target.value
    })
  }

  addItemToCart = (event) => {
    event.preventDefault()
    var newItem = {
      id: this.state.cartItemsList.length + 1,
      product: findById(products, this.state.currentItem),
      quantity: this.state.currentQuantity,
    }
    this.setState({
      cartItemsList: [...this.state.cartItemsList, newItem]
    })
  }

  render() {
    var total = 0
    const actualPrices = this.state.cartItemsList.map(item => {
      return total += (item.product.priceInCents * item.quantity)
    })
    var fixedPrice = (total / 100).toFixed(2)

    var cartItemComponent = this.state.cartItemsList.map(item => {
      var realPrice = (item.product.priceInCents / 100).toFixed(2)
      return (
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">{item.product.name}</div>
            <div className="col-md-2">{realPrice}</div>
            <div className="col-md-2">{item.quantity}</div>
          </div>
        </div>
      )
    })

    return (
      <>
      <CartHeader />
      <CartItems cart={cartItemComponent} item={this.state.cartItemsList}/>
      <Form products={products} addItemToCart={this.addItemToCart} total={fixedPrice} item={this.setItem} quantity={this.setQuantity}/>
      <CartFooter copyright = '2018' />
      </>
    )
  }
}

export default App
