import React from 'react'

export default class Form extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    this.props.onSubmit();
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
      <form onSubmit={this.onSubmit}>
        <input id="textInput" value={values.textInput} onChange={this.onChange}/>
        <button type="submit">Add Todo</button>
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </form>
    )
  }
}
