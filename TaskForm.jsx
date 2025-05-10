import React, { useState } from 'react';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [datetime, setDatetime] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    onAdd({
      title,
      datetime,
      category,
      completed: false,
    });

    setTitle('');
    setDatetime('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <input
        type="datetime-local"
        value={datetime}
        onChange={(e) => setDatetime(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Category (e.g. Work, Personal)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '8px' }}>Add Task</button>
    </form>
  );
}

export default TaskForm;
