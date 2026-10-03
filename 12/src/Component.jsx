import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
const Component = () => {
  const [log, setLog] = React.useState([]);

  const handleAdd = () => {
    const lastValue = log.length > 0 ? log[0].value : 0;
    const newValue = lastValue + 1;
    setLog([{ id: uniqueId(), value: newValue }, ...log]);
  };

  const handleSubtract = () => {
    const lastValue = log.length > 0 ? log[0].value : 0;
    const newValue = lastValue - 1;
    setLog([{ id: uniqueId(), value: newValue }, ...log]);
  };

  const handleRemove = (id) => {
    setLog(log.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="btn-group font-monospace" role="group">
        <button type="button" className="btn btn-outline-success" onClick={handleAdd}>+</button>
        <button type="button" className="btn btn-outline-danger" onClick={handleSubtract}>-</button>
      </div>
      {log.length > 0 && (
        <div className="list-group">
          {log.map((item) => (
            <button
              key={item.id}
              type="button"
              className="list-group-item list-group-item-action"
              onClick={() => handleRemove(item.id)}
            >
              {item.value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Component;ы
// END
