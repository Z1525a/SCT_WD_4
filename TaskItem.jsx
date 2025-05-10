import React, { useState } from 'react';

const TaskItem = ({ task, index, onEdit, onToggle, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDatetime, setNewDatetime] = useState(task.datetime);
  const [newCategory, setNewCategory] = useState(task.category);

  const handleSave = () => {
    onEdit(index, {
      ...task,
      title: newTitle,
      datetime: newDatetime,
      category: newCategory,
    });
    setEditing(false);
  };

  return (
    <div className="task-card" style={{ marginBottom: '10px' }}>
      <div style={{ flexGrow: 1 }}>
        {editing ? (
          <>
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Edit task"
              style={{ padding: '4px', width: '100%' }}
            />
            <input
              type="datetime-local"
              value={newDatetime}
              onChange={(e) => setNewDatetime(e.target.value)}
              style={{ padding: '4px', width: '100%' }}
            />
            <input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Edit category"
              style={{ padding: '4px', width: '100%' }}
            />
          </>
        ) : (
          <>
            <div
              onClick={() => onToggle(index)}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                fontWeight: task.completed ? 'normal' : 'bold',
              }}
            >
              {task.title}
            </div>
            <div>{task.datetime}</div>
            <div className={`task-category ${task.category || 'default'}`}>
              {task.category || 'Uncategorized'}
            </div>
          </>
        )}
      </div>
      <div>
        {editing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
        )}
        <button onClick={() => onDelete(index)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
