import axios from 'axios';
import { UserI } from '../interfaces/UserInterface';

export const signup = async ({ email, name, password }: UserI) => {
	try {
		const response = await axios.post(`/api/users/register`, {
			email,
			name,
			password,
		});
		const data = response.data;
		return data;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};
