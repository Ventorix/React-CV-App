import styled from 'styled-components';

export const StyledResumeContainer = styled.div`
	box-shadow:
		0 13px 27px -5px rgba(50, 50, 93, 0.1),
		0 8px 16px -8px rgba(0, 0, 0, 0.25);
	height: 29.7cm;
	width: 21cm;
`;

export const StyledResume = styled.div`
	background-color: #fff;
	display: grid;
	height: 100%;
	width: 100%;
	position: sticky;
	top: 0;
	grid-template-rows: auto 1fr;
`;

export const StyledResumeTopBlock = styled.div`
	color: ${(props) => props.theme.$white};
	background-color: ${(props) => props.theme.$primary};
	text-align: center;
	padding: 36px 24px;
`;

export const StyledContactInfoBlock = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	gap: 18px;
	margin: auto;
	width: fit-content;
`;

export const StyledResumeSection = styled.div`
	margin-top: 40px;
	padding: 0 56px;
`;
