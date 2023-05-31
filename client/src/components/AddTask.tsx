import { useState } from 'react';
import Modal from './Modal';

function AddTask() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<button
				onClick={openModal}
				className='block text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'
				type='button'
			>
				Add Task
			</button>

			{isModalOpen && <Modal closeModal={closeModal} task={undefined} />}
		</>
	);
}

export default AddTask;
