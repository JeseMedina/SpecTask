import { NextFunction, Response } from 'express';
import { verifyToken } from '../utils/jwt.handle';
import { RequestExt } from '../interfaces/requestExt';

const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
	try {
		const jwtUser = req.headers.authorization || '';
		const jwt = jwtUser.split(' ').pop();
		const isUser = verifyToken(`${jwt}`) as { id: string };
		if (!isUser) {
			res.status(401);
			res.send('Session no Validated');
		} else {
			req.user = isUser;
			next();
		}
	} catch (error) {
		if (error instanceof Error) res.status(500).json({ message: error.message });
	}
};

export { checkJWT };
