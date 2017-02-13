const TodoAPI = {
  setTodos: (todos) => {

  },
  getTodos: () => window.localStorage.getItem('todos') || []
};

export default TodoAPI;
