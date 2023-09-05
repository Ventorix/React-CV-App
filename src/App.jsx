import { useState } from 'react';
import { Wrapper } from './components/styled_components/appStyles';
import Sidebar from './components/Sidebar';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	return (
		<Wrapper>
			<Sidebar setName={setName} setEmail={setEmail} />
			<Resume name={name} email={email} />
			<Footer />
		</Wrapper>
	);
}

export default App;
