import React, { Component } from 'react';
import { connect } from 'react-redux'
class App extends Component {
  render() {
    return (
      <div>
        你点击了 <span id="value">{this.props.n}</span> 次
        <div>
          <button id="add1" onClick={this.props.add1} >+1</button>
          <button id="minus1" onClick={this.props.minus1}>-1</button>
          <button id="add1IfOdd" onClick={this.props.add1IfOdd}>如果是单数就 + 1</button>
          <button id="add1After2Sec" onClick={
            () => {
              setTimeout(() => {
                this.props.add1()
              }, 2000)
            }}>两秒钟后 + 1</button>
        </div>
      </div>
    );
  }
}

// 返回这个组件需要获取的数据
function mapStateToProps(state) {
  return {
    n: state.n
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add1: () => dispatch({ type: 'add', payload: 1 }),
    minus1: () => dispatch({ type: 'minus', payload: 1 }),
    add1IfOdd: () => dispatch({ type: 'add1IfOdd', payload: 1 })
  }
}

// 需要有哪些 Action ?
// const mapDispatchToProps = {
//   add1: () => {
//     return { type: 'add', payload: 1 }
//   },
//   minus1: () => {
//     return { type: 'minus', payload: 1 }
//   },
//   add1IfOdd: () => {
//     return { type: 'add1IfOdd', payload: 1 }
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);
