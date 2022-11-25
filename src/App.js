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
    value: '',
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

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  addTodoList = e => {
    e.preventDefault(); //클릭시 리로드 방지

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };

    this.setState({ todoData: [...this.state.todoData, newTodo], value: '' });
  };

  handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      this.addTodoList();
    }
  };

  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>

          {/* 할 일 목록 입력 폼 */}
          <form style={{ display: 'flex' }} onSubmit={this.addTodoList}>
            <input
              style={{ flex: '1', padding: '5px' }}
              type='text'
              name='todo'
              placeholder='해야 할 일을 입력하세요'
              value={this.state.value}
              onChange={this.onChange}
            />
            <input type='submit' value='입력' className='btn' />
          </form>

          {/* 할 일 목록 리스트 */}
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
