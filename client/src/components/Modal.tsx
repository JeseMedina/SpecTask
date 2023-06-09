import FormTask from '../components/FormTask';
import { TaskI } from '../interfaces/TaskInterface';

function Modal({ closeModal, task }: { closeModal: () => void; task: TaskI | undefined }) {
	const isEditing = task !== undefined;

	return (
		<div className='fixed top-0 left-0 right-0 z-50 w-full h-screen p-4 overflow-x-hidden overflow-y-auto bg-black bg-opacity-50  flex items-center justify-center'>
			<div className='relative bg-gray-800 rounded-lg shadow-lg max-w-2xl mx-auto'>
				<div className='flex items-start justify-between p-4 border-b'>
					<h3 className='text-xl font-semibold text-white'>
						{!isEditing ? `Add Task` : `Edit Task`}
					</h3>
					<button
						onClick={closeModal}
						type='button'
						className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
					>
						<svg
							aria-hidden='true'
							className='w-5 h-5'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
								clipRule='evenodd'
							></path>
						</svg>
						<span className='sr-only'>Close modal</span>
					</button>
				</div>

				<div className='p-6 space-y-6'>
					<FormTask closeModal={closeModal} task={task} isEditing={isEditing} />
				</div>
			</div>
		</div>
	);
}

export default Modal;
