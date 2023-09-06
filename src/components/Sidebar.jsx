import { StyledSidebar, StyledFormContainer } from './styled_components/editSidebarStyles';
import TemplateBlock from './TemplateBlock';
import InfoSection from './InfoSection';

function Sidebar(props) {
	const contactsInfoObj = {
		labelTextArr: ['Full name', 'Email', 'Phone Number', 'Address'],
		propertyArr: Object.keys(props.info),
		placeholderTextArr: [
			'First and last name',
			'Enter email',
			'Enter phone number',
			'City, Country',
		],
	};

	const educationInfoObj = {
		labelTextArr: ['School', 'Degree', 'Start Date', 'End Date', 'Location'],
		propertyArr: Object.keys(props.educationInfo),
		placeholderTextArr: [
			'Enter school / university',
			'Enter Degree / Field Of Study',
			'Enter Start Date',
			'Enter End Date',
			'Enter Location',
		],
	};

	const sectionTitlesArr = ['Personal Details', 'Education', 'Experience'];
	const sectionImgPathsArr = [
		'../src/assets/contacts.svg',
		'../src/assets/education.svg',
		'../src/assets/briefcase.svg',
	];

	return (
		<StyledSidebar>
			<StyledFormContainer>
				<TemplateBlock setInfo={props.setInfo} />
				<InfoSection
					info={props.info}
					setInfo={props.setInfo}
					InfoObj={contactsInfoObj}
					sectionTitle={sectionTitlesArr[0]}
					sectionImgPath={sectionImgPathsArr[0]}
				/>
				<InfoSection
					info={props.educationInfo}
					setInfo={props.setEducationInfo}
					InfoObj={educationInfoObj}
					sectionTitle={sectionTitlesArr[1]}
					sectionImgPath={sectionImgPathsArr[1]}
				/>
			</StyledFormContainer>
		</StyledSidebar>
	);
}

export default Sidebar;
