import { useState } from 'react';
import { StyledSection } from '../styled_components/editSidebarStyles';
import Form from './Form';
import SectionTitle from './SectionTitle';

function InfoSection(props) {
	const [isOpen, setOpen] = useState(true);

	return (
		<StyledSection>
			<SectionTitle
				isOpen={isOpen}
				setOpen={setOpen}
				sectionImgPath={props.sectionImgPath}
				sectionTitle={props.sectionTitle}
			/>
			{isOpen ? <Form info={props.info} setInfo={props.setInfo} InfoObj={props.InfoObj} /> : ''}
		</StyledSection>
	);
}

export default InfoSection;
