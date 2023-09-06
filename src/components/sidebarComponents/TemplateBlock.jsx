import { StyledTemplateBlock } from '../styled_components/editSidebarStyles';
import { useEffect } from 'react';
import Button from '../../UI/button/Button';

function TemplateBlock(props) {
	function clearInfo() {
		props.setInfo({ name: '', email: '', phone: '', location: '' });
		props.setEducationInfo({
			school: '',
			degree: '',
			startDate: '',
			endDate: '',
			schoolLocation: '',
		});
	}

	function loadTemplate() {
		props.setInfo({
			name: 'John Doe',
			email: 'randomemail@gmail.com',
			phone: '+1 (507) 674-4064',
			location: 'Berlin, Germany',
		});
		props.setEducationInfo({
			school: 'University of London',
			degree: 'Bachelors in Computer Science',
			startDate: '2018-11-25',
			endDate: '2023-09-15',
			schoolLocation: 'London, UK',
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
