import TextInput from '../../UI/inputs/TextInput';
import TextArea from '../../UI/inputs/TextArea';
import { StyledInputBlock } from '../styled_components/editSidebarStyles';
import InputLabel from './InputLabel';

function InputBlock(props) {
	return (
		<StyledInputBlock>
			<InputLabel htmlFor={props.propertyArr} text={props.labelTextArr} />
			{props.propertyArr === 'description' ? (
				<TextArea
					placeholder={props.placeholderTextArr}
					value={props.info[props.propertyArr]}
					onChange={(e) => props.setInfo({ ...props.info, [props.propertyArr]: e.target.value })}
					id={props.propertyArr}
				/>
			) : (
				<TextInput
					placeholder={props.placeholderTextArr}
					value={props.info[props.propertyArr]}
					onChange={(e) => props.setInfo({ ...props.info, [props.propertyArr]: e.target.value })}
					id={props.propertyArr}
					type={props.type}
				/>
			)}
		</StyledInputBlock>
	);
}

export default InputBlock;
