import { StyledTemplateBlock } from './styled_components/editSidebarStyles';
import Button from '../UI/button/Button';
function TemplateBlock({ loadTemplate, clearInfo }) {
	return (
		<StyledTemplateBlock>
			<Button color={'red'} onClick={clearInfo}>
				<img src='../src/assets/trash.svg'></img>Clear fields
			</Button>
			<Button onClick={loadTemplate}>Load template</Button>
		</StyledTemplateBlock>
	);
}

export default TemplateBlock;
