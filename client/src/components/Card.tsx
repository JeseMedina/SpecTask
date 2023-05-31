import { remove, updateStateToCompleted, updateStateToInProgress } from '../services/tasksService';
import { deleteTask, editToCompleted, editToInProgress } from '../slices/taskSlice';
import {
	RiCloseCircleLine,
	RiEditCircleLine,
	RiTimeLine,
	RiCheckboxCircleLine,
} from 'react-icons/ri';
import Modal from './Modal';
import getDaysDifference from '../utils/getDaysDifference';
import { useState } from 'react';
import { TaskI } from '../interfaces/TaskInterface';
import { useAppDispatch } from '../store/configureStore';

function Card({ task }: { task: TaskI }) {
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [taskToEdit, setTaskToEdit] = useState<TaskI>();
	const dispatch = useAppDispatch();
	const authData = JSON.parse(window.sessionStorage.getItem('auth') || 'null');
	const token = authData?.token || '';
	const [tasks, setTasks] = useState<TaskI[]>([]);

	const handleDelete = async (task: TaskI) => {
		try {
			if (window.confirm('Are you sure you want to delete this task?')) {
				if (task._id !== undefined) {
					await remove(task._id, token);
					dispatch(deleteTask(task));
					setTasks(prevTasks => prevTasks.filter(prevTask => prevTask._id !== task._id));
				}
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleUpdateTaskToInProgress = async (task: TaskI) => {
		try {
			if (window.confirm('Are you sure you want to update this task?')) {
				updateStateToInProgress(task, token);
				const updatedTask: TaskI = { ...task, state: 'In progress' };
				const updatedTasks = tasks.map(prevTask =>
					prevTask._id === task._id ? updatedTask : prevTask
				);
				const filteredTasks = updatedTasks.filter(task => task.state !== undefined);
				setTasks(filteredTasks);
				dispatch(editToInProgress(updatedTask));
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleUpdateTaskToCompleted = async (task: TaskI) => {
		try {
			if (window.confirm('Are you sure you want to update this task?')) {
				updateStateToCompleted(task, token);
				const updatedTask: TaskI = { ...task, state: 'Completed' };
				const updatedTasks = tasks.map(prevTask =>
					prevTask._id === task._id ? updatedTask : prevTask
				);
				const filteredTasks = updatedTasks.filter(task => task.state !== undefined);
				setTasks(filteredTasks);
				dispatch(editToCompleted(updatedTask));
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleEditButtonClick = (task: TaskI) => {
		setTaskToEdit(task);
		setIsEditModalOpen(true);
	};

	return (
		<div className='min-w-80 p-6 bg-gray-800 border-white rounded-lg shadow sm:w-full md:w-auto'>
			<h3 className='mb-2 text-2xl font-bold tracking-tight text-white'>{task.title}</h3>
			{task.description && <p className='mb-3 font-normal text-gray-400'>{task.description}</p>}
			{task.state !== 'Completed' && (
				<>
					<p className='mb-3 text-sm font-medium text-gray-400'>
						Priority:
						{task.priority === 'High' && <span className='text-red-400'> {task.priority}</span>}
						{task.priority === 'Medium' && (
							<span className='text-yellow-400'> {task.priority}</span>
						)}
						{task.priority === 'Low' && <span className='text-green-400'> {task.priority}</span>}
					</p>
					<p className='mb-3 text-sm font-medium text-gray-400'>
						Days Remaining:
						{getDaysDifference(task.finishDate) < 0 && (
							<span className='text-red-400'> {getDaysDifference(task.finishDate)}</span>
						)}
						{getDaysDifference(task.finishDate) === 0 && (
							<span className='text-yellow-400'> {getDaysDifference(task.finishDate)}</span>
						)}
						{getDaysDifference(task.finishDate) > 0 && (
							<span className='text-green-400'> {getDaysDifference(task.finishDate)}</span>
						)}
					</p>
				</>
			)}
			<p className='mb-3 text-sm font-medium text-gray-400'>
				State:
				{task.state === 'Not started' && <span className='text-red-400'> {task.state}</span>}
				{task.state === 'In progress' && <span className='text-yellow-400'> {task.state}</span>}
				{task.state === 'Completed' && <span className='text-green-400'> {task.state}</span>}
			</p>
			<div className='flex justify-between items-center space-x-2 border-t  rounded-b border-gray-600'>
				<div>
					<button onClick={() => handleDelete(task)} aria-label='Delete Task'>
						<RiCloseCircleLine className='w-6 h-6 m-3 text-red-500 hover:text-red-700' />
					</button>
					{isEditModalOpen && taskToEdit && (
						<Modal closeModal={() => setIsEditModalOpen(false)} task={taskToEdit} />
					)}
					<button onClick={() => handleEditButtonClick(task)} aria-label='Edit Task'>
						<RiEditCircleLine className='w-6 h-6 m-3 text-yellow-500 hover:text-yellow-700' />
					</button>
				</div>
				{task.state === 'Not started' && (
					<button
						onClick={() => handleUpdateTaskToInProgress(task)}
						aria-label='Update To In Progress Task'
					>
						<RiTimeLine className='w-6 h-6 m-3 text-blue-500 hover:text-blue-700' />
					</button>
				)}
				{task.state === 'In progress' && (
					<button
						onClick={() => handleUpdateTaskToCompleted(task)}
						aria-label='Update to Complete Task'
					>
						<RiCheckboxCircleLine className='w-6 h-6 m-3 text-green-500 hover:text-green-700' />
					</button>
				)}
			</div>
		</div>
	);
}

export default Card;
