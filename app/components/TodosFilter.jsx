import React from 'react';

export default class TodosFilter extends React.Component {

  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleShowCompleted = this.handleShowCompleted.bind(this);
  }

  handleSearch() {
    this.props.onSearch(this.searchText.value);
  }

  handleShowCompleted() {
    this.props.onFilterByCompleted(this.checkCompleted.value);
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="search"
            ref={input => this.searchText = input}
            placeholder="Search in todos"
            onChange={this.handleSearch}
          />
        </div>
        <label>
          <input
            type="checkbox"
            ref={input => this.checkCompleted = input}
            onChange={this.handleShowCompleted}
          />
        </label>
      </div>
    );
  }
}

TodosFilter.propTypes = {
  onSearch: React.PropTypes.func.isRequired,
  onFilterByCompleted: React.PropTypes.func.isRequired,
};
