import { ReactNode } from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className='h-screen'>
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
