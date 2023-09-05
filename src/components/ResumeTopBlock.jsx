import { StyledResumeTopBlock, StyledContactInfoBlock } from './styled_components/resumeStyles';
import SmallSVGImg from './SmallSVGImg';
function ResumeTopBlock(props) {
	return (
		<StyledResumeTopBlock>
			<h1>{props.info.name}</h1>
			<StyledContactInfoBlock>
				<div>
					{props.info.email ? (
						<SmallSVGImg src='../src/assets/email.svg' alt='Email'></SmallSVGImg>
					) : (
						''
					)}
					<span>{props.info.email}</span>
				</div>
				<div>
					{props.info.phone ? (
						<SmallSVGImg src='../src/assets/phone.svg' alt='Phone'></SmallSVGImg>
					) : (
						''
					)}
					<span>{props.info.phone}</span>
				</div>
				<div>
					{props.info.location ? (
						<SmallSVGImg src='../src/assets/map-location.svg' alt='Map location'></SmallSVGImg>
					) : (
						''
					)}
					<span>{props.info.location}</span>
				</div>
			</StyledContactInfoBlock>
		</StyledResumeTopBlock>
	);
}

export default ResumeTopBlock;
