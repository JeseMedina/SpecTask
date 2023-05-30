import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc';

const swaggerDefinition: OAS3Definition = {
	openapi: '3.0.0',
	info: {
		title: 'SpecTask Api',
		version: '1.0.0',
	},
	components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
		schemas: {
			task: {
				type: 'object',
				required: ['title', 'finishDate', 'priority', 'state', 'user'],
				properties: {
					title: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					finishDate: {
						type: 'string',
						format: 'date-time',
					},
					priority: {
						type: 'string',
						enum: ['High', 'Medium', 'Low'],
					},
					state: {
						type: 'string',
						enum: ['Completed', 'In progress', 'Not started'],
					},
					user: {
						type: 'string',
					},
				},
			},
			auth: {
				type: 'object',
				required: ['email', 'password'],
				properties: {
					email: {
						type: 'string',
					},
					password: {
						type: 'string',
					},
				},
			},
			user: {
				type: 'object',
				required: ['email', 'password', 'name'],
				properties: {
					email: {
						type: 'string',
					},
					password: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
				},
			},
		},
	},
	paths: {
		'/users/login': {
			post: {
				summary: 'Login User',
        tags: ['User'],
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/auth',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Returns the user id, username and session jwt',
					},
					'500': {
						description: 'Internal server error',
					},
				},
			},
		},
		'/users/register': {
			post: {
				summary: 'Register User',
        tags: ['User'],
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/user',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Successful operation',
					},
					'500': {
						description: 'Internal server error',
					},
				},
			},
		},
		'/tasks': {
			post: {
				summary: 'Register Task',
        tags: ['Task'],
				security: [
					{
						bearerAuth: [],
					},
				],
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/task',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Successful operation',
					},
					'500': {
						description: 'Internal server error',
					},
				},
			},
		},
		'/tasks/{id}': {
			get: {
				summary: 'Get a Task',
        tags: ['Task'],
        parameters: [{
            name: 'id',
            in: 'path',
            description: 'ID of task that needs to be fetched',
            required: true,
            schema: {
              type: 'string'
            }
          }],
				security: [
					{
						bearerAuth: [],
					},
				],
				responses: {
					'200': {
						description: 'Returns the task',
					},
					'500': {
						description: 'Internal server error',
					},
				},
			},
			put: {
				summary: 'Update a Task',
        tags: ['Task'],
        parameters: [{
            name: 'id',
            in: 'path',
            description: 'ID of task that needs to be updated',
            required: true,
            schema: {
              type: 'string'
            }
          }],
				security: [
					{
						bearerAuth: [],
					},
				],
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/task',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Returns the task updated',
					},
					'500': {
						description: 'Internal server error',
					},
				},
			},
			delete: {
				summary: 'Delete a Task',
        tags: ['Task'],
        parameters: [{
            name: 'id',
            in: 'path',
            description: 'ID of task that needs to be deleted',
            required: true,
            schema: {
              type: 'string'
            }
        }],
				security: [
					{
						bearerAuth: [],
					},
				],
				responses: {
					'200': {
						description: 'Returns the task deleted',
					},
					'500': {
						description: 'Internal server error',
					},
				},
			},
		},
		'/tasks/user/{idUser}': {
			get: {
				summary: 'Get Tasks from a User',
        tags: ['Task'],
        parameters: [{
            name: 'idUser',
            in: 'path',
            description: 'ID of user that needs tasks to be fetched',
            required: true,
            schema: {
              type: 'string'
            }
        }],
				security: [
					{
						bearerAuth: [],
					},
				],
				responses: {
					'200': {
						description: 'Returns the tasks',
					},
					'500': {
						description: 'Internal server error',
					},
				},
			},
		},
	},
};

const options: OAS3Options = {
	swaggerDefinition,
	apis: ['./routes/routes.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
