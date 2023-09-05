import { useState } from 'react';
import { Wrapper } from './components/styled_components/appStyles';
import Sidebar from './components/Sidebar';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
	const [info, setInfo] = useState({ name: '', email: '', phone: '', location: '' });

	return (
		<Wrapper>
			<Sidebar setInfo={setInfo} info={info} />
			<Resume info={info} />
			<Footer />
		</Wrapper>
	);
}

export default App;
