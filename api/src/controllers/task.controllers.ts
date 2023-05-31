import { Request, Response } from 'express';
import {
	insertTaskService,
	deleteTaskService,
	getTaskService,
	getTasksByUserService,
	updateTaskService,
} from '../services/task.services';
import handleHttp from '../utils/error.handle';

export const getTask = async ({ params }: Request, res: Response) => {
	try {
		const { id } = params;
		const response = await getTaskService(id);
		const data = response || 'Task not found';
		res.send(data);
	} catch (error) {
		if (error instanceof Error) handleHttp(res, error.message, `${error}`);
	}
};

export const getTasksByUser = async ({ params }: Request, res: Response) => {
	try {
		const { idUser } = params;
		const response = await getTasksByUserService(idUser);
		res.send(response);
	} catch (error) {
		if (error instanceof Error) handleHttp(res, error.message, `${error}`);
	}
};

export const postTask = async ({ body }: Request, res: Response) => {
	try {
		const response = await insertTaskService(body);
		res.send(response);
	} catch (error) {
		if (error instanceof Error) handleHttp(res, error.message, `${error}`);
	}
};

export const updateTask = async ({ params, body }: Request, res: Response) => {
	try {
		const { id } = params;
		const response = await updateTaskService(id, body);
		res.send(response);
	} catch (error) {
		if (error instanceof Error) handleHttp(res, error.message, `${error}`);
	}
};

export const deleteTask = async ({ params }: Request, res: Response) => {
	try {
		const { id } = params;
		await deleteTaskService(id);
		res.send('Task deleted successfully');
	} catch (error) {
		if (error instanceof Error) handleHttp(res, error.message, `${error}`);
	}
};
