import { StyledSidebar, StyledFormContainer } from './styled_components/editSidebarStyles';
import Form from './Form';

function Sidebar(props) {
	return (
		<StyledSidebar>
			<StyledFormContainer>
				<Form info={props.info} setInfo={props.setInfo} />
			</StyledFormContainer>
		</StyledSidebar>
	);
}

export default Sidebar;
