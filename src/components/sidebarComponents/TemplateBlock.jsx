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
		props.setExperienceInfo({
			companyName: '',
			positionTitle: '',
			startDate: '',
			endDate: '',
			companyLocation: '',
			description: '',
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
			startDate: '2015/11/25',
			endDate: '2020/09/15',
			schoolLocation: 'London, UK',
		});
		props.setExperienceInfo({
			companyName: 'A Better Company',
			positionTitle: 'Web Developer',
			startDate: '2021/04/15',
			endDate: '2022/07/03',
			companyLocation: 'Los Angeles, California',
			description:
				'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
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
