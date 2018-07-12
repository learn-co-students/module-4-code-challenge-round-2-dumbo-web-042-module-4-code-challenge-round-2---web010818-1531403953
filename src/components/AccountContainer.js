import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
      this.state = {
        transactions: [],
        filter: ''
      }
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(resp => resp.json())
    .then(result => {
      this.setState({
        transactions: result
      })
    })
  }

  handleChange(event) {
    // const targetValue = event.target.value
    // console.log(this.state.transactions);
    // const filteredResult = this.state.transactions.filter(transaction => targetValue === transaction.description || targetValue === transaction.category )
    this.setState({
      filter: event.target.value
    })

  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions} filter={this.state.filter}/>
      </div>
    )
  }
}

export default AccountContainer
