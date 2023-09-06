import TextInput from '../UI/inputs/TextInput';
import { StyledInputBlock } from './styled_components/editSidebarStyles';
import InputLabel from './InputLabel';

function InputBlock(props) {
	return (
		<StyledInputBlock>
			<InputLabel htmlFor={props.propertyArr} text={props.labelTextArr} />
			<TextInput
				placeholder={props.placeholderTextArr}
				value={props.info[props.propertyArr]}
				onChange={(e) => props.setInfo({ ...props.info, [props.propertyArr]: e.target.value })}
				id={props.propertyArr}
			/>
		</StyledInputBlock>
	);
}

export default InputBlock;
