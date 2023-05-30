import { hash, compare } from 'bcryptjs';

const encrypt = async (password: string) => {
	const passwordHash = await hash(password, 8);
	return passwordHash;
};

const verified = async (password: string, passwordHash: string) => {
	const isSamePassword = await compare(password, passwordHash);
	return isSamePassword;
};

export { encrypt, verified };
