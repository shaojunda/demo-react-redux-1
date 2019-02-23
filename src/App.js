import React, { Component } from 'react';
import { SIGHUP } from 'constants';
class App extends Component {
  add1() {
    this.props.onAdd1()
  }

  minus1() {
    this.props.onMinus1()
  }

  add1IfOdd() {
    this.props.onAdd1IfOdd()
  }

  add1After2Sec() {
    this.props.onAdd1After2Sec()
  }
  render() {
    return (
      <div>
        你点击了 <span id="value">{this.props.value}</span> 次
        <div>
          <button id="add1" onClick={this.add1.bind(this)} >+1</button>
          <button id="minus1" onClick={this.minus1.bind(this)}>-1</button>
          <button id="add1IfOdd" onClick={this.add1IfOdd.bind(this)}>如果是单数就 + 1</button>
          <button id="add1After2Sec" onClick={() => {this.add1After2Sec()}}>两秒钟后 + 1</button>
        </div>
      </div>
    );
  }
}

export default App;
