import { StyledTemplateBlock } from '../styled_components/editSidebarStyles';
import { useEffect } from 'react';
import Button from '../../UI/button/Button';
import { useReactToPrint } from 'react-to-print';
import { MediumSVG } from '../../UI/svg/svg';

function TemplateBlock({ resumeRef, ...props }) {
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

	// Solution for PDF resume, but don't see svg
	/* 	function generatePDF() {
		const resume = new JsPDF('p', 'px', 'a4');

		resume.html(resumeRef.current, {
			html2canvas: {
				scale: 0.568,
				scrollY: 0,
			},
			x: 0.5,
			y: -5,
			callback: function (resume) {
				resume.save();
			},
		});
	} */

	const handlePrint = useReactToPrint({
		content: () => resumeRef.current,
		documentTitle: '.',
	});

	useEffect(loadTemplate, []);

	return (
		<StyledTemplateBlock>
			<Button color={'red'} onClick={clearInfo}>
				<MediumSVG src={'trash.svg'}></MediumSVG>Clear fields
			</Button>
			<Button onClick={loadTemplate}>
				<MediumSVG src={'document.svg'}></MediumSVG>
				Load template
			</Button>
			<Button color={'green'} onClick={handlePrint}>
				<MediumSVG src={'pdf.svg'}></MediumSVG>
				Print
			</Button>
		</StyledTemplateBlock>
	);
}

export default TemplateBlock;
