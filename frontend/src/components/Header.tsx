import React from "react";
import Logo from "./shared/Logo";

import styles from './Header.module.css'

const Header = () => {
	return (
		<div className={styles.parent}>
			<div>
                <Logo/>
            </div>
		</div>
	);
};

export default Header;
