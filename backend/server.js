import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from 'path';

import authRoutes from "./routes/auth.routes.js"
import taskRoutes from "./routes/task.routes.js"


import connectToMongoDB from "./db/connectToMongoDB.js";
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/task", taskRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server listening on port ${PORT}`);
})