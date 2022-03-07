import React from 'react'

export default class Todo extends React.Component {
    render(){
      const { name, id, completed } = this.props.todo
      return(
        <li key={id}>{name} { completed? <span>✔️</span> : <span></span>}</li>
      )
    };
  }
