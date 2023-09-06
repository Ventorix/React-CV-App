import { FormTextInput } from './TextInputStyles';
function TextInput(props) {
	return <FormTextInput {...props} maxLength={30} />;
}

export default TextInput;
