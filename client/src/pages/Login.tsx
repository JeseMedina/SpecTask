import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, FormikValues } from 'formik';
import { login } from '../services/loginService';

function Login() {
	const navigate = useNavigate();

	return (
		<section className='h-screen bg-gray-900'>
			<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
				<p className='flex items-center mb-6 text-2xl font-semibold text-white'>
					<img className='w-8 h-8 mr-2' src='icon.svg' alt='logo' />
					Spectasks
				</p>
				<div className='w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700'>
					<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
						<h1 className='text-xl font-bold leading-tight tracking-tight md:text-2xl text-white'>
							Sign in
						</h1>
						<Formik
							initialValues={{
								email: '',
								password: '',
							}}
							validate={(values: FormikValues) => {
								const error: Partial<FormikValues> = {};

								if (!values.email) {
									error.email = 'Required';
								} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
									error.email = 'Invalid email address';
								}

								if (!values.password) {
									error.password = 'Required';
								} else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(values.password)) {
									error.password =
										'Invalid password. It must contain at least one lowercase letter, one uppercase letter, one digit, and be 6-20 characters long.';
								}

								return error;
							}}
							onSubmit={async (values: FormikValues) => {
								const { email, password } = values;

								try {
									const data = await login({ email, password });

									if (!data) throw new Error('User invalid');
									const { user, token } = data;
									const { name } = user;
									const id = user._id;
									window.sessionStorage.setItem('auth', JSON.stringify({ name, id, token }));
									navigate('/');
								} catch (error) {
									console.error('Error:', error);
								}
							}}
						>
							<Form className='space-y-4 md:space-y-6'>
								<div>
									<label htmlFor='email' className='block mb-2 text-sm font-medium text-white'>
										Your email
									</label>
									<Field
										type='email'
										name='email'
										id='email'
										className='sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
										placeholder='name@company.com'
										autoComplete='email'
									/>
									<ErrorMessage name='email' component='div' className='text-red-500' />
								</div>
								<div>
									<label htmlFor='password' className='block mb-2 text-sm font-medium text-white'>
										Password
									</label>
									<Field
										type='password'
										name='password'
										id='password'
										placeholder='••••••••'
										className='sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
										autoComplete='current-password'
									/>
									<ErrorMessage name='password' component='div' className='text-red-500' />
								</div>
								<button
									type='submit'
									className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-cente'
								>
									Sign in
								</button>
								<p className='text-sm font-light text-gray-400'>
									Don’t have an account yet?{' '}
									<a href='/signup' className='font-medium hover:underline text-primary-500'>
										Sign up
									</a>
								</p>
							</Form>
						</Formik>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;
