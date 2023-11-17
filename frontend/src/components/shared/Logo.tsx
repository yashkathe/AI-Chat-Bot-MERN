import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

import styles from "./Logo.module.css";
import logo from "/logos/home-bot-icon.png";

const Logo = () => {
	return (
		<div className={styles.parent}>
			<Link to={"/"}>
				<img src={logo} alt='logo' className={styles.logo} />
			</Link>
			<Typography
				sx={{
					display: { md: "flex", sm: "none", xs: "none" },
					marginRight: "auto",
					fontWeight: "800",
					textShadow: "2px 2px 20px #000",
					alignItems: "center",
				}}>
				<span className={styles.span}>MERN</span>-GPT
			</Typography>
		</div>
	);
};

export default Logo;
