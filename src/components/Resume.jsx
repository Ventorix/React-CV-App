import { StyledResumeContainer, StyledResume } from './styled_components/resumeStyles';
import ResumeTopBlock from './ResumeTopBlock';
function Resume(props) {
	return (
		<StyledResumeContainer>
			<StyledResume>
				<ResumeTopBlock
					name={props.name}
					email={props.email}
					phone={props.phone}
					location={props.location}
				/>
			</StyledResume>
		</StyledResumeContainer>
	);
}

export default Resume;
