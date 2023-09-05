import TextInput from '../UI/inputs/TextInput';
import { StyledInputBlock } from './styled_components/editSidebarStyles';
import InputLabel from './InputLabel';
function InputBlock(props) {
	return (
		<StyledInputBlock>
			<InputLabel
				htmlFor={props.id}
				text={props.labelText}
				recommendedText={props.recommendedText}
			/>
			<TextInput
				placeholder={props.placeholderText}
				onChange={(e) => props.setValue(e.target.value)}
				id={props.id}
			/>
		</StyledInputBlock>
	);
}

export default InputBlock;
