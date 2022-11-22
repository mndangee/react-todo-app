import React, { Component } from 'react';

import './assets/css/layout.scss';
import './App.css';

export default class App extends Component {
  state = {
    todoData: [
      { id: '1', title: '공부하기', completed: true },
      { id: '2', title: '출근하기', completed: true },
      { id: '3', title: '퇴근하기', completed: false },
      { id: '4', title: '잘 자기', completed: false },
    ],
  };

  btnStyle = {
    position: 'absolute',
    right: '0px',
    top: '20px',
    width: '20px',
    height: '20px',
    color: '#fff',
    fontWeight: '700',
    backgroundColor: '#6178DC',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
  };

  getStyle = () => {
    return {
      position: 'relative',
      padding: '20px 0px',
      fontSize: '15px',
      lineHeight: '20px',
      borderBottom: '1px solid #ccc',
      TextDecoder: 'none',
    };
  };

  deleteTodo = id => {
    let newTodoData = this.state.todoData.filter(data => data.id !== id);
    this.setState({ todoData: newTodoData }); // 상태값 업데이트
    console.log(newTodoData);
  };

  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoData.map(data => (
            <div key={data.id} style={this.getStyle()}>
              <input
                style={{ marginRight: '10px' }}
                type='checkbox'
                defaultChecked={data.completed}
              />
              {data.title}
              <button
                style={this.btnStyle}
                onClick={() => {
                  this.deleteTodo(data.id);
                }}
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
