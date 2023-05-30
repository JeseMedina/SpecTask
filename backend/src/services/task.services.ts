import { TaskI } from '../interfaces/task.interfaces';
import TaskModel from '../models/Task.models';

export const insertTaskService = async (body: TaskI) => {
	const { title, description, finishDate, priority, state, user } = body;
	console.log(body);

	const task = new TaskModel({
		title,
		description,
		finishDate: new Date(finishDate),
		priority,
		state,
		user,
	});
	const newTask = await task.save();

	if (!newTask) throw new Error('User not found');
	return newTask;
};

export const getTasksByUserService = async (id: string) => {
	const tasks = await TaskModel.find({ user: id });
	if (!tasks) throw new Error('No tasks found for the user');
	return tasks;
};

export const getTaskService = async (id: string) => {
	const task = await TaskModel.findOne({ _id: id });
	if (!task) throw new Error('Task not found');
	return task;
};

export const updateTaskService = async (id: string, data: TaskI) => {
	const task = await TaskModel.findOne({ _id: id });

	if (!task) throw new Error('Task not found');
	const updatedTask = await TaskModel.findOneAndUpdate({ _id: id }, data, {
		new: true,
	});

	return updatedTask;
};

export const deleteTaskService = async (id: string) => {
	const task = await TaskModel.findOneAndDelete({ _id: id });

	if (!task) throw new Error('Task not found');
	return task;
};
