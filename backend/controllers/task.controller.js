import Task from "../models/task.model.js";

export const setTask = async (req, res) => {
    try {
        const {task} = req.body;
        const userId = req.user._id

        const newTask = new Task({
            userId,
            task,
        })
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error){
        console.log("Error while setting task: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const getTask = async (req, res) => {
    try {
        const userId = req.user._id;

        const userTasks = await Task.find({
            userId,
        });

        if (!userTasks) return res.status(200).json([]);

        res.status(200).json(userTasks);
    } catch {
        console.log("Error while getting task: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const deleteTask = async (req, res) => {
    try {
        const userId = req.user._id;
        const taskId = req.params.id;

        const task = await Task.findOneAndDelete({
            _id: taskId,
            userId,
        });

        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        console.log("Error while deleting task: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};