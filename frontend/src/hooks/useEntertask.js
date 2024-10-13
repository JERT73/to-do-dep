import React, { useState } from 'react'

const useEntertask = () => {
    const [loading, setLoading] = useState(false);

    const entertask = async (task) => {
        setLoading(true);
        try {
            const res = await fetch("/api/task", {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify({
                    task,
                })
            })
            const data = await res.json();
            if (data.error){
                throw new Error(data.error);
            }
    
            console.log(data);
            const currentTasks = JSON.parse(localStorage.getItem("user-tasks")) || [];
            currentTasks.push(data);
            localStorage.setItem("user-tasks", JSON.stringify(currentTasks));

            return data;
        } catch  (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return {loading, entertask};
}

export default useEntertask