import { Link } from "react-router-dom";

import bot2 from "/page-photos/robot-2.png";

import PageImage from "../components/auth/PageImage";
import FormLabel from "../components/auth/FormLabel";
import Button from "../components/shared/Button";

import styles from "./AuthForm.module.css";

const Login = () => {
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
				<div className={styles.form}>
					<FormLabel
						className={styles.auth_label}
						htmlFor='email'
						id='email'
						type='text'
						required={true}
						maxLength={20}
						minLength={5}
						label='E-Mail'
						value=''
						onChange={() => {}}
						inputPH='name@example.com'
					/>

					<FormLabel
						className={styles.auth_label}
						htmlFor='Password'
						id='password'
						type='password'
						required={true}
						maxLength={16}
						minLength={8}
						label='Password'
						value=''
						onChange={() => {}}
						inputPH='Password'
					/>

					<Button
						buttonLabel='Login'
						type='submit'
						className={styles.button}
					/>
				</div>
				<p>
					Don't have an account ? <Link to='/signup'>Create One </Link> now{" "}
				</p>
			</div>
		</div>
	);
};

export default Login;
