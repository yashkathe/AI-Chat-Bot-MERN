import { ChangeEvent } from "react";

import styles from "./FormLabel.module.css";

type Props = {
	className?: string;
	htmlFor: string;
	label: string;
	type: string;
	id: string;
	required: boolean;
	maxLength: number;
	minLength: number;
	value?: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	inputPH?: string;
	labelPH?: string;
    name:string
};

const FormLabel = (props: Props) => {
	return (
		<div className={`${styles.label} ${props.className}`}>
			<label htmlFor={props.htmlFor} placeholder={props.labelPH}>
				{props.label}
			</label>
			<input
				type={props.type}
				id={props.id}
                name={props.name}
				required={props.required}
				maxLength={props.maxLength}
				minLength={props.minLength}
				value={props.value}
				onChange={props.onChange}
				placeholder={props.inputPH}
			/>
		</div>
	);
};

export default FormLabel;
