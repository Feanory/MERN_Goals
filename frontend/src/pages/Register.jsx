import React, {useEffect, useState} from 'react';
import {FaUser} from 'react-icons/fa';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Spinner from '../components/Spinner';
import {register, reset} from '../features/auth/authSlice';

function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});
	const [alertMessage, setAlertMessage] = useState('');

	const { name, password, email, password2 } = formData;
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isError) {
			setAlertMessage(message)
		}

		if (isSuccess || user) {
			navigate('/')
		}

		dispatch(reset())

	}, [user, isError, isSuccess, message, dispatch, navigate]);

	const onChange = e => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value
		}))
	}


	const onSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			setAlertMessage('Password do not match!');
		} else {
			const userData = {
				name,
				password,
				email
			}

			dispatch(register(userData));
		}
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<>
			<section className="heading">
				<h1><FaUser /> Register</h1>
				<p>Please create an account</p>
			</section>

			<section className="form" onSubmit={onSubmit}>
				<form>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="name"
							name="name"
							placeholder="Enter your name"
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							placeholder="Enter your email"
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							placeholder="Enter your password"
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="password2"
							name="password2"
							placeholder="Confirm your password"
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<button className="btn btn-block" type="submit">Submit</button>
					</div>
				</form>
				<Snackbar open={alertMessage} autoHideDuration={2000} onClose={() => setAlertMessage('')}>
					<MuiAlert severity="error" elevation={6} variant="filled">{alertMessage}</MuiAlert>
				</Snackbar>
			</section>
		</>
	);
}

export default Register;
