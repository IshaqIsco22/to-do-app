import React from "react";

const TodoList = ({ todo, setTodo, editTodo, setEditTodo }) => {
  const handleDelete = ({ id }) => {
    setTodo(todo.filter((todos) => todos.id !== id));
  };
  const handleComplete = (todos) => {
    setTodo(
      todo.map((item) => {
        if (item.id === todos.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todo.find((todos) => todos.id === id);
    setEditTodo(findTodo);
  };

  return (
    <div>
      {todo.map((todos) => (
        <li className="list-item" key={todos.id}>
          <input
            type="text"
            value={todos.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todos)}
            >
              <i className="fa fa-check-circle "></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todos)}
            >
              <i className="fa fa-edit "></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todos)}
            >
              <i className="fa fa-trash "></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
