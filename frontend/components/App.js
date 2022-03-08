import React from 'react'
import TodoList from './TodoList';
import Form from './Form';


let idx = 0;
const getIdx = () => ++idx

const todos = [
  { id: getIdx(), name:"Take out the trash", completed: false},
  { id: getIdx(), name:"Wash the dishes", completed: false},
  { id: getIdx(), name:"Buy groceries", completed: true}
]

const initialState = {
  todos,
  form: {
    textInput: ''
  }
}


export default class App extends React.Component {

  state = initialState


  handleAdd = () => {

    const { form: {textInput } } = this.state
    console.log(textInput);
    const newTodo = {
      name: textInput,
      id: getIdx(),
      completed: false
    };

    this.setState({...this.state,
      form: initialState.form,
      todos: [...this.state.todos, newTodo]
    });
  }

  handleCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });
  }

  changeInput = (key, value) => {
    this.setState({
      ...this.state,
      form: { ...this.state.form, [key]: value },
    })
  }

  render() {
    const { form } = this.state
    return (
      <div>
        <h2>Todos:</h2>

        <TodoList todos={this.state.todos}/>

        <Form onChange={this.changeInput} values={form} onSubmit={this.handleAdd} handleCompleted={this.handleCompleted}/>

      </div>
    )
  }
}
