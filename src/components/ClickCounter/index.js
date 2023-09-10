// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <h1 className="heading">
          The Button has been clicked <span className="counter">{count}</span>{' '}
          times.
        </h1>
        <p className="heading">Click the button to increase the count!</p>
        <button type="button" onClick={this.onIncrement} className="butn-style">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
