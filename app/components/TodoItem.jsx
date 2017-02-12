import React from 'react';

export default class TodoItem extends React.Component {

  render() {
    const { id, value } = this.props;
    return (
      <div>
        {id}: {value}
      </div>
    );
  }

}
TodoItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  value: React.PropTypes.string.isRequired
}
