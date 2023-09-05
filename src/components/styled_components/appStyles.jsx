import styled from 'styled-components';

export const Wrapper = styled.main`
	position: relative;
	max-width: 1280px;
	width: 100%;
	margin: 0 auto;
	padding: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 90vh;
	max-height: 100%;
	padding-bottom: 100px;
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
