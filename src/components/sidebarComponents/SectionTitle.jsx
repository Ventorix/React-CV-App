import { StyledSectionTitle, StyledTitle } from '../styled_components/editSidebarStyles';
import { ArrowSVG, MediumSVG } from '../../UI/svg/svg';

function SectionTitle({ isOpen, setOpen, sectionTitle, sectionImgPath }) {
	return (
		<StyledSectionTitle onClick={() => setOpen((p) => !p)}>
			<StyledTitle>
				<MediumSVG src={sectionImgPath} alt='Section img'></MediumSVG>
				<h2 style={{ fontSize: '2rem' }}>{sectionTitle}</h2>
			</StyledTitle>
			{isOpen ? (
				<ArrowSVG className='open' src='../src/assets/arrow.svg' alt='arrow'></ArrowSVG>
			) : (
				<ArrowSVG src='../src/assets/arrow.svg' alt='arrow'></ArrowSVG>
			)}
		</StyledSectionTitle>
	);
}

export default SectionTitle;
