import React from 'react';

const TodosFilter = (props) => {
  let searchText;
  let checkCompleted;

  const handleSearch = () => {
    const search = {
      searchText: searchText.value,
      filterByComplete: checkCompleted.value
    }
    props.onSearch(search);
  };

  return (
    <div>
      <div>
        <input
          type="search"
          ref={input => searchText = input}
          placeholder="Search in todos"
          onChange={handleSearch}
        />
      </div>
      <label>
        <input
          type="checkbox"
          ref={input => checkCompleted = input}
          onChange={handleSearch}
        />
      </label>
    </div>
  );
};

TodosFilter.propTypes = {
  onSearch: React.PropTypes.func.isRequired
};

export default TodosFilter;
