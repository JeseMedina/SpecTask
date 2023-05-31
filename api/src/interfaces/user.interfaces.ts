import { AuthI } from './auth.interfaces';
import { Document } from 'mongoose';

export interface UserI extends AuthI, Document {
	name: string;
}
