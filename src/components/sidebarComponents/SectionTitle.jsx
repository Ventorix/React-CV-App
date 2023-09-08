import { StyledSectionTitle, StyledTitle } from '../styled_components/editSidebarStyles';
import { ArrowSVG, BigSVG } from '../../UI/svg/svg';
import getImageUrl from '../../utils/getImgURL';

function SectionTitle({ isOpen, setOpen, sectionTitle, sectionImgPath }) {
	return (
		<StyledSectionTitle onClick={() => setOpen((p) => !p)}>
			<StyledTitle>
				<BigSVG src={getImageUrl(sectionImgPath[0], sectionImgPath[1])} alt='Section img'></BigSVG>
				<h2 style={{ fontSize: '2rem' }}>{sectionTitle}</h2>
			</StyledTitle>
			{isOpen ? (
				<ArrowSVG className='open' src={getImageUrl('arrow', 'svg')} alt='arrow'></ArrowSVG>
			) : (
				<ArrowSVG src={getImageUrl('arrow', 'svg')} alt='arrow'></ArrowSVG>
			)}
		</StyledSectionTitle>
	);
}

export default SectionTitle;
