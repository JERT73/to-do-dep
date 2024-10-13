import React , {useState} from 'react'
import useEntertask from '../../hooks/useEntertask';

const EnterTask = ({addTask}) => {
    const [task, setTask] = useState("");
    const {loading, entertask} = useEntertask();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = await entertask(task);
        addTask(newTask);
        setTask(""); 
    }
  return (
    <>
        <form className="join flex w-full px-1 py-1" onSubmit={handleSubmit}>
            <input className="input input-bordered join-item w-full" 
            placeholder="Enter Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
            <button className="btn join-item rounded-r-md" disabled={loading}> 
                {loading? 
                    <span className="loading loading-spinner"></span>:
                    "Add"    
                }
            </button>
        </form>
        <div className="divider m-0 px-1"></div>
    </>
  )
}

export default EnterTask