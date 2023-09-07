import { StyledResumeContainer, StyledResume } from '../styled_components/resumeStyles';
import ResumeTopBlock from './ResumeTopBlock';
import ResumeInfoSection from './ResumeInfoSection';

function Resume(props) {
	return (
		<StyledResumeContainer>
			<StyledResume>
				<ResumeTopBlock info={props.info} />
				<div>
					<ResumeInfoSection info={props.educationInfo} title={'Education'} />
					<ResumeInfoSection info={props.experienceInfo} title={'Experience'} />
				</div>
			</StyledResume>
		</StyledResumeContainer>
	);
}

export default Resume;
