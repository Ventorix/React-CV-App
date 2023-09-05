import { StyledSidebar, StyledFormContainer } from './styled_components/editSidebarStyles';
import TemplateBlock from './TemplateBlock';
import ContactsInfoSection from './ContactsInfoSection';

function Sidebar(props) {
	return (
		<StyledSidebar>
			<StyledFormContainer>
				<TemplateBlock setInfo={props.setInfo} />
				<ContactsInfoSection info={props.info} setInfo={props.setInfo} />
			</StyledFormContainer>
		</StyledSidebar>
	);
}

export default Sidebar;
