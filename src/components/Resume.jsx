import { StyledResumeContainer, StyledResume } from './styled_components/resumeStyles';
import ResumeTopBlock from './ResumeTopBlock';
function Resume(props) {
	return (
		<StyledResumeContainer>
			<StyledResume>
				<ResumeTopBlock info={props.info} />
			</StyledResume>
		</StyledResumeContainer>
	);
}

export default Resume;
