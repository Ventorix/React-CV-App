import { StyledSidebar, StyledFormContainer } from './styled_components/editSidebarStyles';
import TemplateBlock from './TemplateBlock';
import Form from './Form';

function Sidebar(props) {
	return (
		<StyledSidebar>
			<StyledFormContainer>
				<TemplateBlock clearInfo={props.clearInfo} loadTemplate={props.loadTemplate} />
				<Form info={props.info} setInfo={props.setInfo} />
			</StyledFormContainer>
		</StyledSidebar>
	);
}

export default Sidebar;
