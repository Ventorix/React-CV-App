import { PrimaryButton } from './ButtonStyles';

function Button({ children, ...props }) {
	return (
		<PrimaryButton {...props} onClick={props.onClick}>
			{children}
		</PrimaryButton>
	);
}

export default Button;
