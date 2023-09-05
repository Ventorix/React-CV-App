import { PrimaryButton, DestructiveButton } from './ButtonStyles';

function Button({ children, color, ...props }) {
	return (
		<>
			{color === 'red' ? (
				<DestructiveButton {...props} onClick={props.onClick}>
					{children}
				</DestructiveButton>
			) : (
				<PrimaryButton {...props} onClick={props.onClick}>
					{children}
				</PrimaryButton>
			)}
		</>
	);
}

export default Button;
