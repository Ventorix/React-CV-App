import { StyledSidebar, StyledFormContainer } from './styled_components/editSidebarStyles';
import Form from './Form';
function Sidebar(props) {
	return (
		<StyledSidebar>
			<StyledFormContainer>
				<Form
					setName={props.setName}
					setEmail={props.setEmail}
					setPhone={props.setPhone}
					setLocation={props.setLocation}
				/>
			</StyledFormContainer>
		</StyledSidebar>
	);
}

export default Sidebar;
