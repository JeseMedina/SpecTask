import { Router } from 'express';
import { checkJWT } from '../middleware/session.middleware';
import { createUser, loginUser } from '../controllers/user.controllers';
import {
	postTask,
	deleteTask,
	getTask,
	getTasksByUser,
	updateTask,
} from '../controllers/task.controllers';
import swaggerUi from 'swagger-ui-express';
import swaggerSetup from '../docs/swagger';

const router = Router();

router.post('/users/login', loginUser);
router.post('/users/register', createUser);

router.post('/tasks', checkJWT, postTask);
router.get('/tasks/:id', checkJWT, getTask);
router.get('/tasks/user/:idUser', checkJWT, getTasksByUser);
router.put('/tasks/:id', checkJWT, updateTask);
router.delete('/tasks/:id', checkJWT, deleteTask);

router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerSetup));

export default router;
