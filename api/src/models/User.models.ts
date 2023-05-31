import { Schema, model } from 'mongoose';
import { UserI } from '../interfaces/user.interfaces';

const userSchema = new Schema<UserI>({
	name: { type: String, required: true },
	password: { type: String, required: true },
	email: { type: String, unique: true, required: true },
});

const UserModel = model<UserI>('User', userSchema);

export default UserModel;
