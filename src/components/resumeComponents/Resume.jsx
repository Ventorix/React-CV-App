import { StyledResumeContainer, StyledResume } from '../styled_components/resumeStyles';
import ResumeTopBlock from './ResumeTopBlock';
import ResumeInfoSection from './ResumeInfoSection';
import React from 'react';

const Resume = React.forwardRef((props, ref) => {
	return (
		<StyledResumeContainer ref={ref}>
			<StyledResume>
				<ResumeTopBlock info={props.info} />
				<div>
					<ResumeInfoSection info={props.educationInfo} title={'Education'} />
					<ResumeInfoSection info={props.experienceInfo} title={'Experience'} />
				</div>
			</StyledResume>
		</StyledResumeContainer>
	);
});

Resume.displayName = 'Resume';
export default Resume;
