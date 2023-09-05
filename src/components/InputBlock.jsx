import TextInput from '../UI/inputs/TextInput';
import { StyledInputBlock } from './styled_components/editSidebarStyles';
import InputLabel from './InputLabel';
function InputBlock(props) {
	return (
		<StyledInputBlock>
			<InputLabel htmlFor={props.id} text={props.labelText} recommendText={props.recommendText} />
			<TextInput
				placeholder={props.placeholderText}
				value={props.info[props.property]}
				onChange={(e) => props.setInfo({ ...props.info, [props.property]: e.target.value })}
				id={props.id}
			/>
		</StyledInputBlock>
	);
}

export default InputBlock;
