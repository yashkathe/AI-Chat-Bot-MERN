type Props = {
    buttonLabel: string
    type: "button" | "submit" | "reset"
    className?: string
}

import styles from './Button.module.css' 

const Button = (props:Props ) => {
  return (
    <div className={`${styles.button} ${props.className}`}>
        <button type={props.type}>
            {props.buttonLabel}
        </button>
    </div>
  )
}

export default Button