import { Document } from 'mongoose';

export interface TaskI extends Document {
	title: string;
	description: string;
	finishDate: Date;
	priority: 'High' | 'Medium' | 'Low';
	state: 'Completed' | 'In progress' | 'Not started';
	user: string;
}
