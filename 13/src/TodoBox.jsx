import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
const TodoBox = () => {
  const [tasks, setTasks] = React.useState([]);
  const [text, setText] = React.useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newTask = { id: uniqueId(), text };
    setTasks([newTask, ...tasks]);
    setText('');
  };

  const handleRemove = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div className="mb-3">
        <form className="d-flex" onSubmit={handleSubmit}>
          <div className="me-3">
            <input
              type="text"
              value={text}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="I am going..."
            />
          </div>
          <button type="submit" className="btn btn-primary">add</button>
        </form>
      </div>
      {tasks.map((task) => (
        <Item
          key={task.id}
          task={task}
          onRemove={() => handleRemove(task.id)}
        />
      ))}
    </div>
  );
};

export default TodoBox;
// END
