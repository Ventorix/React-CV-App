import { StyledResumeInfoBlock, StyledResumeInfoGroup } from '../styled_components/resumeStyles';
function ResumeInfoBlock(props) {
	const propertyArr = Object.keys(props.info);
	return (
		<StyledResumeInfoBlock>
			<StyledResumeInfoGroup>
				<p>{`${props.info[propertyArr[2]]} - ${props.info[propertyArr[3]]}`}</p>
				<p>{props.info[propertyArr[4]]}</p>
			</StyledResumeInfoGroup>
			<StyledResumeInfoGroup>
				<p style={{ fontWeight: '700' }}>{props.info[propertyArr[0]]}</p>
				<p>{props.info[propertyArr[1]]}</p>
				<p>{props.info[propertyArr[5]]}</p>
			</StyledResumeInfoGroup>
		</StyledResumeInfoBlock>
	);
}

export default ResumeInfoBlock;
