import './Todos.css';

const Todos = ({ todos }) => {
    return (
      <div className="todos-container">
        {todos.map((todo) => (
          <div key={todo._id} className="todo-item">
            <h1 className="todo-title">{todo.title}</h1>
            <p className="todo-description">{todo.description}</p>
            <button className={`todo-button ${todo.completed ? 'completed' : ''}`}>
              {todo.completed ? "Done" : "Mark as Completed"}
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Todos;
  