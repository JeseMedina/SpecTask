import { getTaskByUser } from '../services/tasksService';
import { addTasks, removeAllTasks } from '../slices/taskSlice';
import { useAppSelector, useAppDispatch } from '../store/configureStore';
import { useEffect, useState } from 'react';
import { TaskI } from '../interfaces/TaskInterface';

import sortByDateAndPriority from '../utils/sortByDateAndPriority';
import Card from './Card';

function Calendar() {
	const dispatch = useAppDispatch();
	const authData = JSON.parse(window.sessionStorage.getItem('auth') || 'null');
	const user = authData?.id || '';
	const token = authData?.token || '';
	const storeTasks = useAppSelector(state => state.task);
	const [tasks, setTasks] = useState<TaskI[]>([]);

	useEffect(() => {
		setTasks(storeTasks);
	}, [storeTasks]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchedTasks = await getTaskByUser(user, token);
				dispatch(removeAllTasks());
				dispatch(addTasks(fetchedTasks));
				setTasks(fetchedTasks);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	const completedTasks = tasks.filter(task => task.state === 'Completed');
	const inProgressTasks = tasks.filter(task => task.state !== 'Completed');

	return (
		<div>
			{tasks && tasks.length > 0 ? (
				<>{inProgressTasks.length > 0 && (<>
					<h2 className='text-2xl font-bold my-4 text-white'>Non-completed Tasks</h2>
					<div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
						{sortByDateAndPriority(inProgressTasks).map(task => <Card key={task._id} task={task} />)}
					</div>
					</>)}
					{completedTasks.length > 0 && (<>
					<h2 className='text-2xl font-bold my-4 text-white'>Completed Tasks</h2>
					<div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
						{sortByDateAndPriority(completedTasks).map(task => <Card key={task._id} task={task} />)}
					</div>
					</>)}
				</>
			) : (
			<>
            <p className="text-4xl text-white">No tasks available.</p>
        </>
			)}
		</div>
	);
}

export default Calendar;
