import { StyledResumeTopBlock, StyledContactInfoBlock } from './styled_components/resumeStyles';
import SmallSVGImg from './SmallSVGImg';
function ResumeTopBlock(props) {
	return (
		<StyledResumeTopBlock>
			<h1>{props.name}</h1>
			<StyledContactInfoBlock>
				<div>
					{props.email ? <SmallSVGImg src='../src/assets/email.svg' alt='Email'></SmallSVGImg> : ''}
					<span>{props.email}</span>
				</div>
				<div>
					{props.phone ? <SmallSVGImg src='../src/assets/phone.svg' alt='Phone'></SmallSVGImg> : ''}
					<span>{props.phone}</span>
				</div>
				<div>
					{props.location ? (
						<SmallSVGImg src='../src/assets/map-location.svg' alt='Map location'></SmallSVGImg>
					) : (
						''
					)}
					<span>{props.location}</span>
				</div>
			</StyledContactInfoBlock>
		</StyledResumeTopBlock>
	);
}

export default ResumeTopBlock;
