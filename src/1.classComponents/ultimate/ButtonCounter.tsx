// stateful component
import React, { Component } from 'react'
import { Button } from '../stateless/Button'
const initialState = { clicksCount: 0 }
type State = Readonly<typeof initialState>

class ButtonCounter extends Component<object, State> {
  readonly state: State = initialState

  // doBadThings = () => {
  //   this.state = { clicksCount: 12 }
  //   this.state.clicksCount = 1232
  // }

  render() {
    const { clicksCount } = this.state
    return (
      <>
        <Button onClick={this.handleIncrement}>Increment</Button>
        <Button onClick={this.handleDecrement}>Decrement</Button>
        You've clicked me {clicksCount} times!
      </>
    )
  }

  // WHY readonly state ?
  // --------------------
  // doBadThings = () => { this.state = { clicksCount: 12 } }
  //
  // Will throw following complile error:
  //
  // [ts]
  // Cannot assign to 'state' because it is a constant or a read-only property.

  private handleIncrement = () => this.setState(incrementClicksCount)
  private handleDecrement = () => this.setState(decrementClicksCount)
}
const incrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount + 1,
})
const decrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount - 1,
})
