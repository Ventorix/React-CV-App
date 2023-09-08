import { StyledResumeTopBlock, StyledContactInfoBlock } from '../styled_components/resumeStyles';
import { SmallSVG } from '../../UI/svg/svg';
import getImageUrl from '../../utils/getImgURL';

function ResumeTopBlock(props) {
	return (
		<StyledResumeTopBlock>
			<h1>{props.info.name}</h1>
			<StyledContactInfoBlock>
				<div>
					{props.info.email ? (
						<SmallSVG src={getImageUrl('email', 'svg')} alt='Email'></SmallSVG>
					) : (
						''
					)}
					<span>{props.info.email}</span>
				</div>
				<div>
					{props.info.phone ? (
						<SmallSVG src={getImageUrl('phone', 'svg')} alt='Phone'></SmallSVG>
					) : (
						''
					)}
					<span>{props.info.phone}</span>
				</div>
				<div>
					{props.info.location ? (
						<SmallSVG src={getImageUrl('map-location', 'svg')} alt='Map location'></SmallSVG>
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
