import { useState } from 'react';
import { Wrapper } from './components/styled_components/appStyles';
import Sidebar from './components/Sidebar';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
	const [info, setInfo] = useState({ name: '', email: '', phone: '', location: '' });

	function clearInfo() {
		setInfo({ name: '', email: '', phone: '', location: '' });
	}

	function loadTemplate() {
		setInfo({
			name: 'John Doe',
			email: 'randomemail@gmail.com',
			phone: '+1 (507) 674-4064',
			location: 'Berlin, Germany',
		});
	}
	return (
		<Wrapper>
			<Sidebar loadTemplate={loadTemplate} clearInfo={clearInfo} setInfo={setInfo} info={info} />
			<Resume info={info} />
			<Footer />
		</Wrapper>
	);
}

export default App;
