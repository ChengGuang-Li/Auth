import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
app.use(express.json());

mongoose
	.connect(process.env.MONGO || "mongodb://localhost:27017/api")
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.log(err);
	});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});

app.use("/api/user", userRoutes);

app.use("/api/auth", authRoutes);

app.use((error, req, res, next) => {
	const status = error.statusCode || 500;
	const message = error.message || "Something went wrong";
	return res.status(status).json({
		message: message,
		status: status,
		success: false,
	});
});
