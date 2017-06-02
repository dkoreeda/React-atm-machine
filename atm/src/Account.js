import React, { Component } from 'react';
const classNames = require('classnames');

class Account extends Component {
  constructor() {
    super();
    this.state = {
      balance: 1000,
      input: '',
      message: '',
      getClass: 'balance zero'
    };
  }

  currentBalance(balance) {
    if(balance === 0) {
      return classNames('balance', 'zero');
    } else {
      return classNames('balance');
    }
  }

  deposit() {
    console.log("deposit btn was clicked");
    this.setState((prevState) => {
      const newBalance = parseInt(prevState.balance, 10) + parseInt(this.state.input, 10);
      return {balance: newBalance, input: '', getClass: this.currentBalance(newBalance)};
    });
  }

  withdraw() {
    console.log("withdraw btn was clicked");
    this.setState((prevState) => {
      const newBalance = parseInt(prevState.balance, 10) - parseInt(this.state.input, 10);
      if(newBalance >= 0) {
        return {balance: newBalance, input: '', getClass: this.currentBalance(newBalance)};
      } else {
        return {
          balance: prevState.balance,
          message: "Current balance is lower than the amount requested."
        }
      }
    });
  }

  inputChange(e) {
    const money = e.target.value;
    if (money > 0) {
      this.setState(() => {
        return {
          input: money,
          message: ''
        };
      });
    } else {
      this.setState(() => {
        return {
          message: "Please, enter a valid amount."
        }
      });
    }
  }

  render() {
    return (
      <div>
        <h2> {this.props.text} </h2>
        <div className={this.state.getClass}>
            <p>Balance: {this.state.balance} </p>
            <p className="message"> {this.state.message} </p>
        </div>
        <input type="number" value={this.state.value} onChange={(e) => this.inputChange(e)} />
        <button className="deposit" onClick={(e) => this.deposit(e) }> Deposit</button>
        <button className="withdraw" onClick={(e) => this.withdraw(e) }> Withdraw</button>
      </div>
    );
  }
}

export default Account;
