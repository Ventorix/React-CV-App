import { StyledSectionTitle, StyledTitle } from './styled_components/editSidebarStyles';
import { ArrowSVG } from '../UI/svg/svg';

function SectionTitle({ isOpen, setOpen }) {
	return (
		<StyledSectionTitle onClick={() => setOpen((p) => !p)}>
			<StyledTitle>
				<img src='../src/assets/contacts.svg' alt='Contacts'></img>
				<h2 style={{ fontSize: '2rem' }}>Personal Details</h2>
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
