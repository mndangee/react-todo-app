import React, { Component } from 'react';

import './assets/css/layout.scss';
import './App.css';

export default class App extends Component {
  btnStyle = {
    position: 'absolute',
    right: '0px',
    top: '10px',
    padding: '5px 9px',
    color: '#fff',
    backgroundColor: '#6178DC',
    border: 'none',
    borderRadius: '50%',
    cusrsor: 'pointer',
  };

  getStyle = () => {
    return {
      position: 'relative',
      padding: '10px',
      fontSize: '15px',
      lineHeight: '25px',
      borderBottom: '1px solid #ccc',
      TextDecoder: 'none',
    };
  };

  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>
          <div style={this.getStyle()}>
            <input
              style={{ marginRight: '10px' }}
              type='checkbox'
              defaultChecked={false}
            />
            공부하기
            <button style={this.btnStyle}>x</button>
          </div>
        </div>
      </div>
    );
  }
}
