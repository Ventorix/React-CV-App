import { StyledForm } from './styled_components/editSidebarStyles';
import InputList from './InputList';

function Form(props) {
	return (
		<StyledForm>
			<InputList inputInfoObj={props.inputInfoObj} setInfo={props.setInfo} info={props.info} />
		</StyledForm>
	);
}

export default Form;
