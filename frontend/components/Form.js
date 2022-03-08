import React from 'react'

export default class Form extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd();
  }

  clearCompleted = (e) => {
    this.props.handleCompleted();
  }

  onChange = evt => {
    const { value, id } = evt.target
    this.props.onChange(id, value)
  }

  render() {
    const { values } = this.props
    return (
      <form>
        <input id="textInput" value={values.textInput} onChange={this.onChange}/>
        <button onClick={this.handleSubmit}>Add Todo</button>
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </form>
    )
  }
}
