import { StyledSectionTitle, StyledTitle } from '../styled_components/editSidebarStyles';
import { ArrowSVG, BigSVG } from '../../UI/svg/svg';

function SectionTitle({ isOpen, setOpen, sectionTitle, sectionImgPath }) {
	return (
		<StyledSectionTitle onClick={() => setOpen((p) => !p)}>
			<StyledTitle>
				<BigSVG src={sectionImgPath} alt='Section img'></BigSVG>
				<h2 style={{ fontSize: '2rem' }}>{sectionTitle}</h2>
			</StyledTitle>
			{isOpen ? (
				<ArrowSVG className='open' src={'arrow.svg'} alt='arrow'></ArrowSVG>
			) : (
				<ArrowSVG src={'arrow.svg'} alt='arrow'></ArrowSVG>
			)}
		</StyledSectionTitle>
	);
}

export default SectionTitle;
