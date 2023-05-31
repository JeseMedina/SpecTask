import { createRoot } from 'react-dom/client';
import App from './App';
import './app.css';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

const container = document.getElementById('root');

if (container) {
	const root = createRoot(container);
	root.render(
		<Provider store={store}>
			<App />
		</Provider>
	);
}
