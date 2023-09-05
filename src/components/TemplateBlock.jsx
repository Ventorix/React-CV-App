import { StyledTemplateBlock } from './styled_components/editSidebarStyles';
import { useEffect } from 'react';
import Button from '../UI/button/Button';
function TemplateBlock(props) {
	function clearInfo() {
		props.setInfo({ name: '', email: '', phone: '', location: '' });
	}

	function loadTemplate() {
		props.setInfo({
			name: 'John Doe',
			email: 'randomemail@gmail.com',
			phone: '+1 (507) 674-4064',
			location: 'Berlin, Germany',
		});
	}

	useEffect(loadTemplate, []);

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
