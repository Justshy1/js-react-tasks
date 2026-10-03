import React from 'react';

// BEGIN (write your solution here)
const Item = ({ task, onRemove }) => {
  return (
    <div>
      <div className="row">
        <div className="col-auto">
          <button type="button" className="btn btn-primary btn-sm" onClick={onRemove}>-</button>
        </div>
        <div className="col">{task.text}</div>
      </div>
      <hr />
    </div>
  );
};

// Экспортируем и как default, и как CommonJS модуль для тестов Jest
module.exports = Item;
export default Item;
// END
