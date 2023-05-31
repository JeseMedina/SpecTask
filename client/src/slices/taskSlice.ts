import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskI } from '../interfaces/TaskInterface';

const initialState: TaskI[] = [];

const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<TaskI>) => {
			state.push(action.payload);
		},
		addTasks: (state, action: PayloadAction<TaskI[]>) => {
			state.push(...action.payload);
		},
		editTask: (state, action: PayloadAction<TaskI>) => {
			const {
				_id,
				title,
				description,
				finishDate,
				priority,
				state: stateTask,
				user,
			} = action.payload;
			const foundTask = state.find(task => task._id === _id);

			if (foundTask) {
				foundTask.title = title;
				foundTask.description = description;
				foundTask.finishDate = finishDate;
				foundTask.priority = priority;
				foundTask.state = stateTask;
				foundTask.user = user;
			}
		},
		deleteTask: (state, action: PayloadAction<TaskI>) => {
			const { _id } = action.payload;
			state = state.filter(task => task._id !== _id);
			return state;
		},
		removeAllTasks: state => {
			state.splice(0, state.length);
		},
		editToInProgress: (state, action: PayloadAction<TaskI>) => {
			const { _id, title, description, finishDate, priority, user } = action.payload;

			const foundTask = state.find(task => task._id === _id);
			const index = state.findIndex(task => task._id === _id);

			if (foundTask) {
				foundTask.title = title;
				foundTask.description = description;
				foundTask.finishDate = finishDate;
				foundTask.priority = priority;
				foundTask.state = 'In progress';
				foundTask.user = user;
			}
			state[index] = { ...state[index], ...foundTask, state: 'In progress' };
		},
		editToCompleted: (state, action: PayloadAction<TaskI>) => {
			const { _id, title, description, finishDate, priority, user } = action.payload;

			const foundTask = state.find(task => task._id === _id);

			if (foundTask) {
				foundTask.title = title;
				foundTask.description = description;
				foundTask.finishDate = finishDate;
				foundTask.priority = priority;
				foundTask.state = 'Completed';
				foundTask.user = user;
			}
		},
	},
});

export default taskSlice.reducer;
export const {
	addTask,
	editTask,
	deleteTask,
	addTasks,
	removeAllTasks,
	editToCompleted,
	editToInProgress,
} = taskSlice.actions;
