import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App(): JSX.Element {
	return (
		<Router>
			<Routes>
				{/* Error404 */}
				<Route path='*' element={<Error404 />} />
				{/* Home */}
				<Route path='/' element={<Home />} />
				{/* Login */}
				<Route path='/login' element={<Login />} />
				{/* Signup */}
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</Router>
	);
}

export default App;
