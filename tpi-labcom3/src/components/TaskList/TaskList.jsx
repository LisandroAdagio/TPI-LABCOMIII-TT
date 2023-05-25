import React from 'react';
import "./TaskList.css";

const TaskList = ({ tasks, markTaskCompleted }) => {
  const handleMarkCompleted = (index) => {
    markTaskCompleted(index);
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <div className="Task-container" key={index}>
          <h3>{task.title}</h3>
          <p>Creation Date: {task.creationDate}</p>
          <p>Completion Date: {task.completionDate}</p>
          {!task.completed && (
            <button onClick={() => handleMarkCompleted(index)}>
              Mark Completed
            </button>
          )}
        </div>
      ))}
    </div>
    
  );
};

export default TaskList;
