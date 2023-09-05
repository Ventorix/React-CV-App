import { StyledSidebar } from './styled_components/editSidebarStyles';
import Form from './Form';
function Sidebar(props) {
	return (
		<StyledSidebar>
			<Form setName={props.setName} setEmail={props.setEmail} />
		</StyledSidebar>
	);
}

export default Sidebar;
