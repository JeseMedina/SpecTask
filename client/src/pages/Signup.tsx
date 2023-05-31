import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, FormikValues } from 'formik';
import { signup } from '../services/signupService';

function Signup() {
	const navigate = useNavigate();

	return (
		<section className='h-screen bg-gray-900'>
			<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
				<a href='#' className='flex items-center mb-6 text-2xl font-semibold text-white'>
					<img className='w-8 h-8 mr-2' src='icon.svg' alt='logo' />
					Spectasks
				</a>
				<div className='w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700'>
					<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
						<h1 className='text-xl font-bold leading-tight tracking-tight md:text-2xl text-white'>
							Create an account
						</h1>
						<Formik
							initialValues={{
								email: '',
								name: '',
								password: '',
								confirmPassword: '',
							}}
							validate={(values: FormikValues) => {
								const error: Partial<FormikValues> = {};

								if (!values.name) {
									error.name = 'Required';
								}

								if (!values.email) {
									error.email = 'Required';
								} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
									error.email = 'Invalid email address';
								}

								if (values.password !== values.confirmPassword) {
									error.confirmPassword = 'Passwords do not match';
								}

								if (!values.password) {
									error.password = 'Required';
								} else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(values.password)) {
									error.password =
										'Invalid password. It must contain at least one lowercase letter, one uppercase letter, one digit, and be 6-20 characters long.';
								}

								if (!values.confirmPassword) {
									error.confirmPassword = 'Required';
								} else if (
									!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(values.confirmPassword)
								) {
									error.confirmPassword =
										'Invalid password. It must contain at least one lowercase letter, one uppercase letter, one digit, and be 6-20 characters long.';
								}

								return error;
							}}
							onSubmit={async (values: FormikValues) => {
								const { email, name, password, confirmPassword } = values;

								if (!password === confirmPassword) throw new Error('Passwords are not equal');
								try {
									const data = signup({ email, name, password });
									if (!data) throw new Error('Signup failed');
									navigate('/login');
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
										className='sm:text-sm border rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
										placeholder='name@company.com'
										autoComplete='email'
									/>
									<ErrorMessage name='email' component='div' className='text-red-500' />
								</div>
								<div>
									<label htmlFor='name' className='block mb-2 text-sm font-medium text-white'>
										Your Name
									</label>
									<Field
										type='text'
										name='name'
										id='name'
										className='border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
										placeholder='Jhon Doe'
										autoComplete='name'
									/>
									<ErrorMessage name='name' component='div' className='text-red-500' />
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
										className='border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
										required
										autoComplete='password'
									/>
									<ErrorMessage name='password' component='div' className='text-red-500' />
								</div>
								<div>
									<label
										htmlFor='confirm-password'
										className='block mb-2 text-sm font-medium text-white'
									>
										Confirm password
									</label>
									<Field
										type='password'
										name='confirmPassword'
										id='confirmPassword'
										placeholder='••••••••'
										className='border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
										required
										autoComplete='confirmPassword'
									/>
									<ErrorMessage name='confirmPassword' component='div' className='text-red-500' />
								</div>
								<button
									type='submit'
									className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-cente'
								>
									Create an account
								</button>
								<p className='text-sm font-light text-gray-400'>
									Already have an account?{' '}
									<a href='/login' className='font-medium hover:underline text-primary-500'>
										Login
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

export default Signup;
