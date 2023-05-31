import { Schema, model } from 'mongoose';
import { TaskI } from '../interfaces/task.interfaces';

const taskSchema = new Schema<TaskI>({
	title: { type: String, required: true },
	description: { type: String },
	finishDate: { type: Date, required: true },
	priority: { type: String, enum: ['High', 'Medium', 'Low'], required: true },
	state: { type: String, enum: ['Completed', 'In progress', 'Not started'], required: true },
	user: { type: String, required: true },
});

const TaskModel = model<TaskI>('Task', taskSchema);

export default TaskModel;
