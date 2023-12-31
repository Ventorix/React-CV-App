import styled from 'styled-components';

export const Wrapper = styled.main`
	position: relative;
	display: flex;
	justify-content: center;
	max-width: 1500px;
	width: 100%;
	min-height: 90vh;
	max-height: 100%;
	padding-bottom: 100px;
	gap: 30px;

	@media (max-width: 1340px) {
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}
`;

export const StyledFooter = styled.footer`
	position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	font-weight: 900;
	gap: 5px;
`;
