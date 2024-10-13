import express from "express"
import protectRoute from "../middleware/protectRoute.js"
import { setTask, getTask, deleteTask } from "../controllers/task.controller.js";


const router = express.Router();

router.post('/', protectRoute, setTask);
router.get('/', protectRoute, getTask);
router.delete('/:id', protectRoute, deleteTask);

export default router;