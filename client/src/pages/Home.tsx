import AddTask from '../components/AddTask';
import Calendar from '../components/Calendar';
import Layout from '../components/Layout';

function Home() {
	return (
		<Layout>
			<div className='bg-gray-900 flex items-center justify-center pt-8'>
				<AddTask />
			</div>
			<div className='bg-gray-900 mx-auto my-auto px-8 md:px-20 lg:px-28 pt-4 pb-8 flex'>
				<Calendar />
			</div>
		</Layout>
	);
}

export default Home;
