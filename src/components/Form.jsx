import { StyledForm } from './styled_components/editSidebarStyles';
import InputBlock from './InputBlock';
function Form(props) {
	return (
		<StyledForm>
			<h2 style={{ fontSize: '2rem' }}>Personal Details</h2>
			<InputBlock
				labelText={'Full name'}
				placeholderText={'First and last name'}
				setValue={props.setName}
				id='full-name'
			/>
			<InputBlock
				labelText={'Email'}
				placeholderText={'Enter email'}
				recommendedText={'recommended'}
				setValue={props.setEmail}
				id='email'
			/>
		</StyledForm>
	);
}

export default Form;
