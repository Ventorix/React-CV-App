import { useState } from 'react';
import { Wrapper } from './components/styled_components/appStyles';
import Sidebar from './components/Sidebar';
import Resume from './components/Resume';
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

	return (
		<Wrapper>
			<Sidebar
				setInfo={setInfo}
				info={info}
				educationInfo={educationInfo}
				setEducationInfo={setEducationInfo}
			/>
			<Resume info={info} educationInfo={educationInfo} />
			<Footer />
		</Wrapper>
	);
}

export default App;
