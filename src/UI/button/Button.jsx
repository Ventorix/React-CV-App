import { PrimaryButton, DestructiveButton, AcceptButton } from './ButtonStyles';

function Button({ children, color, ...props }) {
	return (
		<>
			{color === 'red' ? (
				<DestructiveButton {...props} onClick={props.onClick}>
					{children}
				</DestructiveButton>
			) : color === 'green' ? (
				<AcceptButton {...props} onClick={props.onClick}>
					{children}
				</AcceptButton>
			) : (
				<PrimaryButton {...props} onClick={props.onClick}>
					{children}
				</PrimaryButton>
			)}
		</>
	);
}

export default Button;
