import React from 'react'


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
    return (
      <div>
        <h2>Todos:</h2>
        <ul> 
          { 
            todos.map((todo) => {
              const { name } = todo
              return (
                <li>{name}</li>
              )
            })
          }
        </ul>

        <form>
          <input/>
          <button>Add To List</button>
        </form>

        <button>Hide Completed</button>

      </div>
    )
  }
}
