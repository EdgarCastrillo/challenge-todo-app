import React, { Component } from 'react'

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onAddTodo(this.state)
    console.log(this.state)
    console.log('sending...')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              onChange={this.handleInput}
              className="form-input"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-input"
              placeholder="Description"
            />
          </div>
          <button type="submit" className="btn">
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default TodoForm;