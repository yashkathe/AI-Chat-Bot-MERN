import Logo from "./Logo";

import styles from "./Header.module.css";
import { useAuth } from "../../context/context";
import NavigationLink from "./NavigationLink";

const Header = () => {
	const auth = useAuth();

	let links;

	if (auth?.isLoggedIn) {
		links = (
			<>
				<NavigationLink to='/chat' text='Go To Chat' />
				<NavigationLink to='/' text='Logout' onClick={auth.logout} />
			</>
		);
	} else {
		links = (
			<>
				<NavigationLink to='/login' text='Sign In'></NavigationLink>
				<NavigationLink to='/signup' text='Create an Account'></NavigationLink>
			</>
		);
	}

	return (
		<div className={styles.parent}>
			<div>
				<Logo />
			</div>
			<div>{links}</div>
		</div>
	);
};

export default Header;
