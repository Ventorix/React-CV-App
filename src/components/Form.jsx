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
				recommendText={'recommended'}
				setValue={props.setEmail}
				id='email'
			/>
			<InputBlock
				labelText={'Phone Number'}
				placeholderText={'Enter phone number'}
				recommendText={'recommended'}
				setValue={props.setPhone}
				id='phone'
			/>
			<InputBlock
				labelText={'Address'}
				placeholderText={'City, Country'}
				recommendText={'recommended'}
				setValue={props.setLocation}
				id='location'
			/>
		</StyledForm>
	);
}

export default Form;
