import { verified, encrypt } from '../utils/encrypt.handle';
import UserModel from '../models/User.models';
import { generateToken } from '../utils/jwt.handle';
import { UserI } from '../interfaces/user.interfaces';
import { AuthI } from '../interfaces/auth.interfaces';

export const loginUserService = async ({ email, password }: AuthI) => {
	const user = await UserModel.findOne({ email });
	if (!user) throw new Error('User not found');
	const passwordHash = user.password;
	const isRight = await verified(password, passwordHash);
	if (!isRight) throw new Error('Incorrect password');
	const token = generateToken(user.id);
	const data = { token, user };
	return data;
};

export const registerUserService = async ({ email, password, name }: UserI) => {
	const user = await UserModel.findOne({ email });

	if (user) throw new Error('User already exists');
	const passwordHash = await encrypt(password);

	const newUser = new UserModel({
		name,
		password: passwordHash,
		email,
	});

	return await newUser.save();
};
