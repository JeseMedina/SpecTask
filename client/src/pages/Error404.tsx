import { NavLink } from 'react-router-dom';

function Error404() {
	return (
		<section className='flex items-center h-screen p-16 bg-gray-900 text-gray-100'>
			<div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
				<div className='max-w-md text-center'>
					<h2 className='mb-8 font-extrabold text-9xl text-gray-600'>404</h2>
					<p className='text-2xl font-semibold md:text-3xl'>Sorry, we couldn't find this page.</p>
					<NavLink
						rel='noopener noreferrer'
						to='/'
						className='block text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4'
					>
						Back to homepage
					</NavLink>
				</div>
			</div>
		</section>
	);
}

export default Error404;
