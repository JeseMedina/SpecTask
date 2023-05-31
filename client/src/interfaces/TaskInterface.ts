export interface TaskI {
	_id?: string;
	title: string;
	description?: string;
	finishDate: string;
	priority: 'High' | 'Medium' | 'Low';
	state: 'Completed' | 'In progress' | 'Not started';
	user: number;
}
