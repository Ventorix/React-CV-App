import { StyledForm } from './styled_components/editSidebarStyles';
import InputList from './InputList';

function Form(props) {
	return (
		<StyledForm>
			<InputList
				labelTextArr={props.labelTextArr}
				placeholderTextArr={props.placeholderTextArr}
				propertyArr={props.propertyArr}
				setInfo={props.setInfo}
				info={props.info}
			/>
		</StyledForm>
	);
}

export default Form;
