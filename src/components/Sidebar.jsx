import { StyledSidebar, StyledFormContainer } from './styled_components/editSidebarStyles';
import TemplateBlock from './TemplateBlock';
import InfoSection from './InfoSection';

function Sidebar(props) {
	const labelTextArr = ['Full name', 'Email', 'Phone Number', 'Address'];
	const propertyArr = ['name', 'email', 'phone', 'location'];
	const placeholderTextArr = [
		'First and last name',
		'Enter email',
		'Enter phone number',
		'City, Country',
	];

	return (
		<StyledSidebar>
			<StyledFormContainer>
				<TemplateBlock setInfo={props.setInfo} />
				<InfoSection
					info={props.info}
					setInfo={props.setInfo}
					labelTextArr={labelTextArr}
					placeholderTextArr={placeholderTextArr}
					propertyArr={propertyArr}
				/>
			</StyledFormContainer>
		</StyledSidebar>
	);
}

export default Sidebar;
