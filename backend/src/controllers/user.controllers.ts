import { Request, Response } from 'express';
import { loginUserService, registerUserService } from '../services/user.services';
import handleHttp from '../utils/error.handle';

export const createUser = async ({ body }: Request, res: Response) => {
	try {
		const reponse = await registerUserService(body);
		res.send(reponse);
	} catch (error) {
		if (error instanceof Error) handleHttp(res, error.message, `${error}`);
	}
};

export const loginUser = async ({ body }: Request, res: Response) => {
	try {
		const reponse = await loginUserService(body);
		res.send(reponse);
	} catch (error) {
		if (error instanceof Error) handleHttp(res, error.message, `${error}`);
	}
};
