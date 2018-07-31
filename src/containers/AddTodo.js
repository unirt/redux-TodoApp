import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

// Todoを登録するフォームのコンポーネント
const AddTodo = ({ dispatch }) => {
  let input 

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()

        // 前後の空白を取り除く
        if (!input.value.trim()) {  
          return
        }
        dispatch(addTodo(input.value))
        input.value = ' '
      }}
      >
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)

// This is neither a Presentational Component nor Container because it's difficult to separate clearly.