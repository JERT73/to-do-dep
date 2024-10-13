import React from 'react';
import { IoRemoveCircle } from "react-icons/io5";

const Task = ({ task, deleteTask }) => {
  return (
    <>
      <div className='
          flex flex-col flex-1 pl-2 px-2 py-3
          rounded-md max-w-[500px] 
          bg-green-500
      '>
          <div className='
              flex gap-3 justify-between items-center
          '>
              <p className='
                  font-bold text-gray-600
                  overflow-x-auto whitespace-nowrap
                  scrollbar-thin scrollbar-thumb-gray-400
                  pr-2
              '>
                  {task.task}
              </p>
              <button 
                className='p-1 hover:bg-red-500 rounded-full transition-colors duration-200'
                onClick={() => deleteTask(task._id)}
              >
                <IoRemoveCircle size={30} className='text-black'/>
              </button>
          </div>
      </div>
      <div className='divider px-3 my-1'></div>
    </>
  );
}

export default Task;
