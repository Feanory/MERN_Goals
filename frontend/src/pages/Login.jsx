import React, {useState, useEffect} from 'react';
import {FaSignInAlt} from 'react-icons/fa';
import {useDispatch, useSelector} from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {useNavigate} from 'react-router-dom';
import Spinner from '../components/Spinner';
import {login, reset} from '../features/auth/authSlice';


function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [isShowAlert, setIsShowAlert] = useState(false);

	const { email, password } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isError) {
			setIsShowAlert(true);
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

		const userData = {
			email,
			password,
		}

		dispatch(login(userData));
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<>
			<section className="heading">
				<h1><FaSignInAlt /> Login</h1>
				<p>Login and start setting goals</p>
			</section>

			<section className="form" onSubmit={onSubmit}>
				<form>
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
						<button className="btn btn-block" type="submit">Login</button>
					</div>
				</form>
				<Snackbar open={isShowAlert} autoHideDuration={2000} onClose={() => setIsShowAlert(false)}>
					<MuiAlert severity="error" elevation={6} variant="filled">Wrong credentials</MuiAlert>
				</Snackbar>
			</section>
		</>
	);
}

export default Login;
