import { StyledResumeInfoBlock, StyledResumeInfoGroup } from '../styled_components/resumeStyles';
function ResumeInfoBlock(props) {
	return (
		<StyledResumeInfoBlock>
			<StyledResumeInfoGroup>
				<p>{`${props.info.startDate} - ${props.info.endDate}`}</p>
				<p>{props.info.schoolLocation}</p>
			</StyledResumeInfoGroup>
			<StyledResumeInfoGroup>
				<p style={{ fontWeight: '700' }}>{props.info.school}</p>
				<p>{props.info.degree}</p>
			</StyledResumeInfoGroup>
		</StyledResumeInfoBlock>
	);
}

export default ResumeInfoBlock;
