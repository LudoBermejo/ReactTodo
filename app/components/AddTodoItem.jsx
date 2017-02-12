import React from 'react';

export default class AddTodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.textInput.value) {
      this.props.onAddItem(this.textInput.value);
      this.textInput.value = '';
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input type="text" placeholder="What do you need to do?" ref={(input) => { this.textInput = input; }} />
        <button className="button expanded">Add todo</button>
      </form>
    );
  }
}

AddTodoItem.propTypes = {
  onAddItem: React.PropTypes.func.isRequired
};
