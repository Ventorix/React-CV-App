import { StyledResumeTopBlock, StyledContactInfoBlock } from './styled_components/resumeStyles';
function ResumeTopBlock(props) {
	return (
		<StyledResumeTopBlock>
			<h1>{props.name}</h1>
			<StyledContactInfoBlock></StyledContactInfoBlock>
		</StyledResumeTopBlock>
	);
}

export default ResumeTopBlock;
