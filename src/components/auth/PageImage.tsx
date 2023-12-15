import styles from "./PageImage.module.css";

type Props = {
	className: string;
	alt: string;
	src: string;
};

const PageImage = (props: Props) => {
	return (
		<div className={`${styles.parent} ${props.className}`}>
			<img alt={props.alt} src={props.src} />
		</div>
	);
};

export default PageImage;
