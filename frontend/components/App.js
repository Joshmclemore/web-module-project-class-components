import React from 'react'
import TodoList from './TodoList';
import TodoForm from './Form';


let idx = 0;
const getIdx = () => ++idx

const todos = [
  { id: getIdx(), name:"Take out the trash", completed: false},
  { id: getIdx(), name:"Wash the dishes", completed: false},
  { id: getIdx(), name:"Buy groceries", completed: false}
]

const initialState = {
  todos
}


export default class App extends React.Component {

  state = initialState

  // handleClick

  // handleSubmit

  // filterCompleted



  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Todos:</h2>

        <TodoList todos={todos}/>

        <TodoForm />

        <button>Hide Completed</button>

      </div>
    )
  }
}
