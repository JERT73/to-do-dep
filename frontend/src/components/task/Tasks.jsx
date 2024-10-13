import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, deleteTask }) => {
  console.log("Within Task.jsx: ", tasks);
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {tasks.map((task) => (
        <Task key={task._id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default Tasks;
