import React from 'react';
import {withCounter} from '../services/CounterProvider';

const MiddleComponent = (props) => {
  return (
    <>
      <h1>Im the middle Component</h1>
      <h2>Context consumer</h2>
      <p>{props.counter}</p>
      <button onClick={props.increase}>Incrementar</button>
    </>
  )
}

export default withCounter(MiddleComponent, "Hola");