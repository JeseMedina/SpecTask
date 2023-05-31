import axios from 'axios';
import { AuthI } from '../interfaces/AuthInterfaces';

export const login = async ({ email, password }: AuthI) => {
	try {
		const response = await axios.post(`/api/users/login`, { email, password });
		const data = response.data;
		return data;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};
