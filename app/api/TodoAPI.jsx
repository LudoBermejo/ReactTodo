const TodoAPI = {
  setTodos: (todos) => {
    if (Array.isArray(todos)) {
      window.localStorage.setItem('todos', JSON.stringify(todos));
    }
  },
  getTodos: () => JSON.parse(window.localStorage.getItem('todos') || '[]')
};

export default TodoAPI;
