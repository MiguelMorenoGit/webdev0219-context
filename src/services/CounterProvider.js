import React, { Component } from 'react';
const MyContext = React.createContext();

export const withCounter = (Comp) => {
  return class WithCounter extends Component {
    render() {
      console.log('withCounter: ', this.props)
      return (
        <MyContext.Consumer>
          {(value) => (
            <Comp 
              counter={value.counter}
              increase={value.increase}
              {...this.props}
            />
          )}
        </MyContext.Consumer>
      )
    }
  }
}

class CounterProvider extends Component {

  state = {
    counter: 0
  }

  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render() {
    return (
      <MyContext.Provider 
        value={{
          counter: this.state.counter,
          increase: this.handleIncrease
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default CounterProvider;