import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'

const reducers = (state, action) => {
  if (state === undefined) {
    return 0
  } else {
    let newState
    switch (action.type) {
      case 'add':
      newState = state + action.payload
        return newState
      case 'minus':
        newState = state - action.payload
        return newState
      default:
        return 0
    }
  }
}
var store = createStore(reducers)
render()
store.subscribe(render)

function onAdd1IfOdd() {
  if(store.getState() % 2 === 1) {
    store.dispatch({type: 'add', payload: 1})
  }
}

function onAdd1After2Sec() {
  setTimeout(() => {
    store.dispatch({type: 'add', payload: 1})
  }, 2000)
}

function render() {
  ReactDOM.render(<App value={store.getState()}
    onAdd1={() => store.dispatch({type: 'add', payload: 1})}
    onMinus1={() => store.dispatch({type: 'minus', payload: 1})}
    onAdd1IfOdd={onAdd1IfOdd}
    onAdd1After2Sec={onAdd1After2Sec}
    />,
    document.getElementById('root')
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
