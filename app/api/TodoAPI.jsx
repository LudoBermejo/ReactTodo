const TodoAPI = {
  setTodos: (todos) => {
    if (Array.isArray(todos)) {
      window.localStorage.setItem('todos', JSON.stringify(todos));
    }
  },
  getTodos: () => JSON.parse(window.localStorage.getItem('todos') || '[]'),
  searchTodos: (todos, showCompleted, searchText) => {
    return todos.filter(item => ( (searchText && item.value.includes(searchText)) || (!searchText))
          && ((!showCompleted && !item.completed) || (showCompleted)));
  }
};

export default TodoAPI;
