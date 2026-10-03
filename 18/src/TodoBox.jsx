import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
class TodoBox extends React.Component {
  state = {
    tasks: [],
    inputValue: '',
  };

  async componentDidMount() {
    try {
      const response = await axios.get(routes.tasksPath());
      this.setState({ tasks: response.data });
    } catch (error) {
      console.error(error);
    }
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { inputValue, tasks } = this.state;
    if (!inputValue.trim()) return;

    try {
      const response = await axios.post(routes.tasksPath(), { text: inputValue });
      // Добавляем новую задачу в начало массива
      this.setState({
        tasks: update(tasks, { $unshift: [response.data] }),
        inputValue: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleTaskClick = async (e, id, currentState) => {
    e.preventDefault();
    const { tasks } = this.state;
    const isFinished = currentState === 'finished';
    
    // Определяем правильный роут в зависимости от текущего состояния задачи
    const path = isFinished ? routes.activateTaskPath(id) : routes.finishTaskPath(id);

    try {
      const response = await axios.patch(path);
      const updatedTask = response.data;

      const index = tasks.findIndex((task) => task.id === id);
      
      // Обновляем задачу внутри массива с сохранением иммутабельности
      this.setState({
        tasks: update(tasks, { [index]: { $set: updatedTask } }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  renderTasks(tasksList) {
    return tasksList.map((task) => (
      <Item key={task.id} task={task} onClick={this.handleTaskClick} />
    ));
  }

  render() {
    const { tasks, inputValue } = this.state;

    // Фильтруем активные и завершенные задачи
    const activeTasks = tasks.filter((task) => task.state === 'active');
    const finishedTasks = tasks.filter((task) => task.state === 'finished');

    return (
      <div>
        <div className="mb-3">
          <form className="todo-form mx-3" onSubmit={this.handleSubmit}>
            <div className="d-flex col-md-3">
              <input
                type="text"
                value={inputValue}
                onChange={this.handleInputChange}
                required
                className="form-control me-3"
                placeholder="I am going..."
              />
              <button type="submit" className="btn btn-primary">
                add
              </button>
            </div>
          </form>
        </div>

        {activeTasks.length > 0 && (
          <div className="todo-active-tasks">
            {this.renderTasks(activeTasks)}
          </div>
        )}

        {finishedTasks.length > 0 && (
          <div className="todo-finished-tasks">
            {this.renderTasks(finishedTasks)}
          </div>
        )}
      </div>
    );
  }
}

export default TodoBox;
// END
