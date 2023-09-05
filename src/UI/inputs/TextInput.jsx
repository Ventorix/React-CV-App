import { FormTextInput } from './TextInputStyles';
function TextInput(props) {
	return <FormTextInput {...props} type='text' maxLength={30} title='Input' />;
}

export default TextInput;
