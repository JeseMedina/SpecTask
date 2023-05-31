import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/configureStore';
import capitalizeString from '../utils/capitalizeString';
import { removeAllTasks } from '../slices/taskSlice';
import { useEffect } from 'react';

function Navbar() {
	const authData = JSON.parse(window.sessionStorage.getItem('auth') || 'null');
	const name = authData?.name || '';
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (!name) navigate('/login');
	}, [navigate, name]);

	const handleLogOut = () => {
		window.sessionStorage.removeItem('auth');
		dispatch(removeAllTasks());
		navigate('/login');
	};

	return (
		<header className='border-b-2 border-white'>
			<nav className='bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5'>
				<div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
					<div className='flex items-center'>
						<img src='icon.svg' className='w-6 h-6 mr-3 sm:h-9' alt='Tasks Logo' />
						<span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
							<h1>Spectask</h1>
						</span>
					</div>
					<div className='flex items-center lg:order-2'>
						<span className='text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2'>
							{capitalizeString(name)}
						</span>
						<button
							onClick={handleLogOut}
							className='block text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
						>
							Log out
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
