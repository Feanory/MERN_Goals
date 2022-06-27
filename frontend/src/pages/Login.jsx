import React, {useState} from 'react';
import {FaSignInAlt} from 'react-icons/fa';


function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const onChange = e => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault();
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
			</section>
		</>
	);
}

export default Login;
