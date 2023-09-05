import { useState } from 'react';
import { StyledSection } from './styled_components/editSidebarStyles';
import Form from './Form';
import SectionTitle from './SectionTitle';

function ContactsInfoSection(props) {
	const [isOpen, setOpen] = useState(true);
	return (
		<StyledSection>
			<SectionTitle isOpen={isOpen} setOpen={setOpen} />
			{isOpen ? <Form info={props.info} setInfo={props.setInfo} /> : ''}
		</StyledSection>
	);
}

export default ContactsInfoSection;
