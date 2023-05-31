import axios from 'axios';
import { TaskI } from '../interfaces/TaskInterface';

export const create = async (
	{ title, description, finishDate, priority, state, user }: TaskI,
	token: string
) => {
	try {
		const taskData = {
			title,
			finishDate,
			priority,
			state,
			user,
			...(description && { description }),
		};
		const response = await axios.post(`/api/tasks`, taskData, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const data = response.data;
		return data;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};

export const update = async (
	{ _id, title, description, finishDate, priority, state, user }: TaskI,
	token: string
) => {
	try {
		const taskData = {
			_id,
			title,
			finishDate,
			priority,
			state,
			user,
			...(description && { description }),
		};
		const response = await axios.put(`/api/tasks/${_id}`, taskData, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const data = response.data;
		return data;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};

export const remove = async (id: string, token: string) => {
	try {
		const response = await axios.delete(`/api/tasks/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const data = response.data;
		return data;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};

export const getTask = async (id: string, token: string) => {
	try {
		const response = await axios.get(`/api/tasks/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const data = response.data;
		return data;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};
export const getTaskByUser = async (idUser: string, token: string) => {
	try {
		const response = await axios.get(`/api/tasks/user/${idUser}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const data = response.data;
		return data;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};

export const updateStateToInProgress = async (
	{ _id, title, description, finishDate, priority, user }: TaskI,
	token: string
) => {
	try {
		const taskData = {
			_id,
			title,
			finishDate,
			priority,
			state: 'In progress',
			user,
			...(description && { description }),
		};
		const response = await axios.put(`/api/tasks/${_id}`, taskData, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const data = response.data;
		return data;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};

export const updateStateToCompleted = async (
	{ _id, title, description, finishDate, priority, user }: TaskI,
	token: string
) => {
	try {
		const taskData = {
			_id,
			title,
			finishDate,
			priority,
			state: 'Completed',
			user,
			...(description && { description }),
		};
		const response = await axios.put(`/api/tasks/${_id}`, taskData, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const data = response.data;
		return data;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};
