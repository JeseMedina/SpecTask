import { Formik, Form, Field, ErrorMessage, FormikValues } from 'formik';
import { addTask, editTask } from '../slices/taskSlice';
import { create, update } from '../services/tasksService';
import { useAppDispatch } from '../store/configureStore';
import { TaskI } from '../interfaces/TaskInterface';
import formatDate from '../utils/formatDate';

function FormTask({
	closeModal,
	task,
	isEditing,
}: {
	closeModal: () => void;
	task: TaskI | undefined;
	isEditing: boolean;
}) {
	const dispatch = useAppDispatch();
	const authData = JSON.parse(window.sessionStorage.getItem('auth') || 'null');
	const user = authData?.id || '';
	const token = authData?.token || '';

	const initialValues =
		isEditing && task
			? {
					id: task._id,
					title: task.title,
					description: task.description || undefined,
					finishDate: formatDate(new Date(task.finishDate)),
					priority: task.priority,
					state: task.state,
			  }
			: {
					title: '',
					description: '',
					finishDate: '',
					priority: '',
					state: 'Not started',
			  };

	return (
		<Formik
			initialValues={initialValues}
			validate={(values: FormikValues) => {
				const error: Partial<FormikValues> = {};
				if (!values.title) error.title = 'Required';
				if (!values.finishDate) error.finishDate = 'Required';
				if (!values.priority) error.priority = 'Required';
				return error;
			}}
			onSubmit={async (values: FormikValues) => {
				try {
					if (!isEditing) {
						const { title, description, finishDate, priority, state } = values;
						const data = await create(
							{ title, description, finishDate, priority, state, user },
							token
						);
						if (!data) throw new Error('Error to create');
						dispatch(addTask(data));
					} else {
						const { id:_id, title, description, finishDate, priority, state } = values;
						console.log(values)
						const data = await update(
							{
								_id,
								title,
								description,
								finishDate,
								priority,
								state,
								user,
							},
							token
						);
						if (!data) throw new Error('Error to update');
						dispatch(editTask(data));
					}
					closeModal();
				} catch (error) {
					console.error('Error:', error);
				}
			}}
		>
			<Form>
				<div className='relative z-0 w-full mb-6 group'>
					<Field
						type='text'
						name='title'
						id='title'
						className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer'
						placeholder=' '
						autoComplete='off'
					/>
					<label
						htmlFor='title'
						className='peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
					>
						Title (*)
					</label>
					<ErrorMessage name='title' component='div' className='text-red-500' />
				</div>
				<div className='relative z-0 w-full mb-6 group'>
					<Field
						type='text'
						id='description'
						name='description'
						className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer'
						placeholder=' '
						autoComplete='off'
					/>
					<label
						htmlFor='description'
						className='peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
					>
						Description
					</label>
				</div>
				<div className='grid md:grid-cols-2 md:gap-6'>
					<div className='relative z-0 w-full mb-6 group'>
						<Field
							type='date'
							name='finishDate'
							id='finishDate'
							className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer'
							placeholder=' '
						/>
						<label
							htmlFor='finishDate'
							className='peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
						>
							Finish Date (*)
						</label>
						<ErrorMessage name='finishDate' component='div' className='text-red-500' />
					</div>
					<div className='relative z-0 w-full mb-6 group'>
						<Field
							as='select'
							name='priority'
							id='priority'
							className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer'
						>
							<option className='bg-gray-800 text-white'>High</option>
							<option className='bg-gray-800 text-white'>Medium</option>
							<option className='bg-gray-800 text-white00'>Low</option>
						</Field>
						<label
							htmlFor='priority'
							className='peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
						>
							Priority (*)
						</label>
						<ErrorMessage name='priority' component='div' className='text-red-500' />
					</div>
				</div>
				<button
					type='submit'
					className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
				>
					Submit
				</button>
			</Form>
		</Formik>
	);
}

export default FormTask;
