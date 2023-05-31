import { AuthI } from './AuthInterfaces';

export interface UserI extends AuthI {
	name: string;
}
