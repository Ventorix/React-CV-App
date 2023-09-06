import { StyledResumeSection, StyledResumeSectionTitle } from '../styled_components/resumeStyles';
import ResumeInfoBlock from './ResumeInfoBlock';
function ResumeInfoSection(props) {
	return (
		<StyledResumeSection>
			{/* Check if the object (and section inputs respectively) has a value in its properties */}
			{Object.values(props.info).every((e) => e == false) ? (
				''
			) : (
				<StyledResumeSectionTitle>{props.title}</StyledResumeSectionTitle>
			)}
			<ResumeInfoBlock info={props.info} />
		</StyledResumeSection>
	);
}

export default ResumeInfoSection;
