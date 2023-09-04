import { FormTextInput } from './TextInputStyles';
function TextInput(props) {
	return (
		<FormTextInput
			{...props}
			type='text'
			maxLength={10}
			title='Card Text'
			placeholder='Type a card name'
		/>
	);
}

export default TextInput;
