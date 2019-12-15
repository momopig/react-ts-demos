/**
 * origin: How to write correctly typed React components with TypeScript
 * url: https://blog.logrocket.com/correctly-typed-react-components-with-typescript/
 * 
*/

import * as React from 'react';

type TimerProps {
  message: string
}
interface State {
  seconds: number;
};
export default class Timer extends React.Component<TimerProps, State> {
  constructor(props: TimerProps) {
    super(props)
  }
  state: State = {
    seconds: 0
  };
  static defaultProps: TimerProps = {
    message: "Hello there"
 };
  increment = () => {
    this.setState({
      seconds: (this.state.seconds + 1)
    });
  };
  decrement = () => {
    this.setState({
      seconds: (this.state.seconds - 1)
    });
  };
  render () {
    return (
      <div> <p>The current time is {this.state.seconds}</p> </div>
    );
  }
}