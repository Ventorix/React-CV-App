import Logo from './Logo';
import { StyledFooter } from './styled_components/appStyles';

function Footer() {
	return (
		<StyledFooter>
			<p>Developed by Ventorix</p>
			<Logo />
		</StyledFooter>
	);
}

export default Footer;
