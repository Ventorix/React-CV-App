import { StyledSidebar, StyledFormContainer } from './styled_components/editSidebarStyles';
import TemplateBlock from './TemplateBlock';
import InfoSection from './InfoSection';

function Sidebar(props) {
	const inputInfoObj = {
		labelTextArr: ['Full name', 'Email', 'Phone Number', 'Address'],
		propertyArr: ['name', 'email', 'phone', 'location'],
		placeholderTextArr: [
			'First and last name',
			'Enter email',
			'Enter phone number',
			'City, Country',
		],
	};

	return (
		<StyledSidebar>
			<StyledFormContainer>
				<TemplateBlock setInfo={props.setInfo} />
				<InfoSection info={props.info} setInfo={props.setInfo} inputInfoObj={inputInfoObj} />
			</StyledFormContainer>
		</StyledSidebar>
	);
}

export default Sidebar;
