import {useState} from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [creationDate, setCreationDate] = useState('');
  const [completionDate, setCompletionDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, creationDate, completionDate });
    setTitle('');
    setCreationDate('');
    setCompletionDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        placeholder="Creation Date"
        value={creationDate}
        onChange={(e) => setCreationDate(e.target.value)}
      />
      <input
        type="date"
        placeholder="Completion Date"
        value={completionDate}
        onChange={(e) => setCompletionDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
