import app from './app';
import db from './config/mongo';
import 'dotenv/config';

const PORT = process.env.PORT;

async function main() {
	try {
		db();
		app.listen(PORT);
		console.log('Server listening');
	} catch (error) {
		console.error(error);
	}
}

main();
