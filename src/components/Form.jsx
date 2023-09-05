import { StyledForm } from './styled_components/editSidebarStyles';
import InputBlock from './InputBlock';
function Form(props) {
	return (
		<StyledForm>
			<h2 style={{ fontSize: '2rem' }}>Personal Details</h2>
			<InputBlock
				labelText={'Full name'}
				placeholderText={'First and last name'}
				setInfo={props.setInfo}
				info={props.info}
				property={'name'}
				id='full-name'
			/>
			<InputBlock
				labelText={'Email'}
				placeholderText={'Enter email'}
				recommendText={'recommended'}
				setInfo={props.setInfo}
				info={props.info}
				property={'email'}
				id='email'
			/>
			<InputBlock
				labelText={'Phone Number'}
				placeholderText={'Enter phone number'}
				recommendText={'recommended'}
				setInfo={props.setInfo}
				info={props.info}
				property={'phone'}
				id='phone'
			/>
			<InputBlock
				labelText={'Address'}
				placeholderText={'City, Country'}
				recommendText={'recommended'}
				setInfo={props.setInfo}
				info={props.info}
				property={'location'}
				id='location'
			/>
		</StyledForm>
	);
}

export default Form;
