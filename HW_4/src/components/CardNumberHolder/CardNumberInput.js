// class CardNumberInput extends Component {

//   format = inputStr => {
//     let newArr = [];

//     if (inputStr === null) {
//       return '';
//     }

//     let outputStr = inputStr.toString();
//     newArr.push(outputStr[0]);

//     for (let i = 1; i < outputStr.length; i++) {
//       if (i % 4 === 0) {
//         newArr.push(' ');
//       }
//       newArr.push(outputStr[i]);
//     }

//     return newArr.join('');
//   };

//   componentWillReceiveProps = nextProps => {
//     this.setState({
//       number: this.format(this.normalize(nextProps.cardNumber))
//     });
//   };

//   render() {
//     const { number } = this.state;
//     return <input value={number} onChange={this.handleInput} />;
//   }
// }

// export default CardNumberInput;

import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: '' //this.format(this.props.cardNumber)
  };

  constructor(props) {
    super(props);

    this.state = {
      number: props.cardNumber ? this.format(props.cardNumber) : ''
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('props received', nextProps);
    if (nextProps.cardNumber !== this.props.cardNumber) {
      this.setState(() => ({
        number: this.format(nextProps.cardNumber)
      }));
    }
  }

  format(number) {
    console.log('format called and number: ', number);
    console.log('type of num: ', typeof number);
    if (number === null || !number) {
      console.log('====================');
      return '';
    }
    console.log('======= == = = = = =');

    let res = [];
    let arr = number.toString().split('');

    while (arr.length > 0) {
      res.push(arr.splice(0, 4).join(''));
    }

    return res.join(' ');
  }

  // normalize = number => number.replace(/\s/g, '');
  normalize = inputStr => {
    console.log('typeof inputStr:', typeof inputStr);
    console.log('inputStr:', inputStr);
    return inputStr.split(' ').join('');
    //     // return inputStr.trim();
  };

  handleInput = e => {
    console.log('e: ', e);
    console.log('e: ', e.target);
    console.log('e: ', e.target.value);
    const val = this.normalize(e.target.value);
    if (val.length > 16) {
      return false;
    }

    this.props.onChange(val);
  };

  render() {
    // console.log('number: ', this.state.number);
    // return <input value={this.state.number} onChange={this.handleInput} />;
    // }
    let { number } = this.state;
    //деструктуризация - вспомнить, повторить
    console.log('number: ', number);
    return <input value={number} onChange={this.handleInput} />;
  }
}

export default CardNumberInput;
