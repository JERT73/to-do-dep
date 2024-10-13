import React, { useState, useEffect } from 'react'
import EnterTask from '../../components/entertask/EnterTask'
import Tasks from '../../components/task/Tasks'
import useGettask from '../../hooks/useGettask'
import LogoutButton from '../../components/task/LogoutButton'

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await useGettask();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

    fetchTasks();
  }, []); // Empty dependency array ensures this runs once on component mount

  console.log("Home: ", tasks);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`/api/task/${taskId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTasks((prevTasks) => prevTasks.filter(task => task._id !== taskId));
      } else {
        console.error("Failed to delete task:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className='
      sm:min-w-[500px] 
      flex sm:h-[450px] md:h-[550px] overflow-hidden bg-red-400 
      bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-md
      flex-col
    '>
      <EnterTask addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
      <LogoutButton/>
    </div>
  )
}

export default Home