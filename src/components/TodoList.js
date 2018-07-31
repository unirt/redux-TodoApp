import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

// 登録されたTodoの一覧を表示するコンポーネント。 VisibleTodoList.jsでreact-reduxを使って拡張されている。
const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => 
      <Todo key={todo.id} {...todo} onClick={()=>toggleTodo(todo.id)} />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList