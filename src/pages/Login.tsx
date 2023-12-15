import React, {useState} from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import bot2 from "/page-photos/robot-2.png";

import PageImage from "../components/auth/PageImage";
import FormLabel from "../components/auth/FormLabel";
import Button from "../components/shared/Button";

import styles from "./AuthForm.module.css";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:5001/api";
axios.defaults.withCredentials = true; // Enable sending credentials (e.g., cookies) in cross-origin requests

import { useAuth } from "../context/context";

const Login = () => {

    const [buttonName, setButtonName] = useState('Login')

    const navigate = useNavigate()

	const auth = useAuth();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

		try {
            setButtonName('Loading ...')
			toast.loading("Signing in ..", { id: "login" });
			await auth?.login(email, password);
            setButtonName('Login')
            toast.success("Signed in successfully", { id: "login" })
            navigate('/chat')
		} catch (error: any) {
            setButtonName('Login')
            toast.error(error.message, { id: "login" })
			console.log(error, 'error');
		}
	};

	return (
		<div className={styles.parent}>
			<div>
				<PageImage
					src={bot2}
					alt='login chat bot image'
					className={styles.image}
				/>
			</div>
			<div>
				<h2>Log Into Your Account </h2>
				<form className={styles.form} onSubmit={handleSubmit}>
					<FormLabel
						className={styles.auth_label}
						htmlFor='email'
						id='email'
						name='email'
						type='text'
						required={true}
						maxLength={20}
						minLength={5}
						label='E-Mail'
						onChange={() => {}}
						inputPH='name@example.com'
					/>

					<FormLabel
						className={styles.auth_label}
						htmlFor='Password'
						id='password'
						name='password'
						type='password'
						required={true}
						maxLength={16}
						minLength={8}
						label='Password'
						onChange={() => {}}
						inputPH='Password'
					/>

					<Button buttonLabel={buttonName} type='submit' className={styles.button} />
				</form>
				<p>
					Don't have an account ? <Link to='/signup'>Create One </Link> now{" "}
				</p>
			</div>
		</div>
	);
};

export default Login;
