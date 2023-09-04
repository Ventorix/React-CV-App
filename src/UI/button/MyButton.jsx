import classes from './MyButton.module.css';
import { PrimaryButton } from './ButtonStyles';

function MyButton({ children, ...props }) {
	return (
		/* 		<button className={`${classes.remove} ${classes.base}`} onClick={props.onClick}>
			{children}
		</button> */
		<PrimaryButton {...props} onClick={props.onClick}>
			{children}
		</PrimaryButton>
	);
}

export default MyButton;
