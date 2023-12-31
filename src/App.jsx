import { useState, useRef } from 'react';
import { Wrapper } from './components/styled_components/appStyles';
import Sidebar from './components/sidebarComponents/Sidebar';
import Resume from './components/resumeComponents/Resume';
import Footer from './components/Footer';

function App() {
	const [info, setInfo] = useState({ name: '', email: '', phone: '', location: '' });
	const [educationInfo, setEducationInfo] = useState({
		school: '',
		degree: '',
		startDate: '',
		endDate: '',
		schoolLocation: '',
	});
	const [experienceInfo, setExperienceInfo] = useState({
		companyName: '',
		positionTitle: '',
		startDate: '',
		endDate: '',
		companyLocation: '',
		description: '',
	});
	const reportRef = useRef(null);

	return (
		<Wrapper>
			<Sidebar
				ref={reportRef}
				setInfo={setInfo}
				info={info}
				educationInfo={educationInfo}
				setEducationInfo={setEducationInfo}
				experienceInfo={experienceInfo}
				setExperienceInfo={setExperienceInfo}
			/>
			<Resume
				ref={reportRef}
				info={info}
				educationInfo={educationInfo}
				experienceInfo={experienceInfo}
			/>
			<Footer />
		</Wrapper>
	);
}

export default App;
