import { StyledResumeContainer, StyledResume } from '../styled_components/resumeStyles';
import ResumeTopBlock from './ResumeTopBlock';
import ResumeInfoSection from './ResumeInfoSection';

function Resume(props) {
	return (
		<StyledResumeContainer>
			<StyledResume>
				<ResumeTopBlock info={props.info} />
				<ResumeInfoSection info={props.educationInfo} title={'Education'} />
			</StyledResume>
		</StyledResumeContainer>
	);
}

export default Resume;
