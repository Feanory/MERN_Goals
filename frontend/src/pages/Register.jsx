import React, {useState} from 'react';
import {FaUser} from 'react-icons/fa';


function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
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
							id="password"
							name="password"
							placeholder="Confirm your password"
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<button className="btn btn-block" type="submit">Submit</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default Register;
