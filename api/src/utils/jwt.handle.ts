import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = `${process.env.JWT_SECRET}`;

const generateToken = (id: string) => {
	const jwt = sign({ id }, JWT_SECRET, { expiresIn: '1h' });
	return jwt;
};

const verifyToken = (jwt: string) => {
	const isRight = verify(jwt, JWT_SECRET);
	return isRight;
};

export { generateToken, verifyToken };
