import { StyledForm } from '../styled_components/editSidebarStyles';
import InputList from './InputList';

function Form(props) {
	return (
		<StyledForm>
			<InputList InfoObj={props.InfoObj} setInfo={props.setInfo} info={props.info} />
		</StyledForm>
	);
}

export default Form;
