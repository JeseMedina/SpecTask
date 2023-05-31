import { TaskI } from '../interfaces/TaskInterface';

const sortByDateAndPriority = (tasks: TaskI[]) => {
	const sortedTasks = tasks.slice().sort((a, b) => {
		const dateComparison = new Date(a.finishDate).getTime() - new Date(b.finishDate).getTime();

		if (dateComparison !== 0) {
			return dateComparison;
		} else {
			const priorityOrder = {
				High: 1,
				Medium: 2,
				Low: 3,
			};

			const priorityA = priorityOrder[a.priority];
			const priorityB = priorityOrder[b.priority];

			return priorityA - priorityB;
		}
	});

	return sortedTasks;
};

export default sortByDateAndPriority;
