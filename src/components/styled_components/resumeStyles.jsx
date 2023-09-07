import styled from 'styled-components';

export const StyledResumeContainer = styled.div`
	box-shadow:
		0 13px 27px -5px rgba(50, 50, 93, 0.1),
		0 8px 16px -8px rgba(0, 0, 0, 0.25);
	height: 29.7cm;
	width: 21cm;
	position: sticky;
	top: 10px;

	@media (max-width: 870px) {
		flex-shrink: 0;
		transform: scale(0.9);
		margin: -40px 0;
	}
	@media (max-width: 790px) {
		transform: scale(0.8);
		margin: -100px 0;
	}
	@media (max-width: 710px) {
		transform: scale(0.7);
		margin: -160px 0;
	}
	@media (max-width: 630px) {
		transform: scale(0.6);
		margin: -220px 0;
	}
	@media (max-width: 548px) {
		transform: scale(0.5);
		margin: -280px 0;
	}
	@media (max-width: 460px) {
		transform: scale(0.4);
		margin: -340px 0;
	}
	@media (max-width: 370px) {
		transform: scale(0.35);
		margin: -370px 0;
	}
`;

export const StyledResume = styled.div`
	background-color: #fff;
	display: grid;
	height: 100%;
	width: 100%;
	grid-template-rows: auto 1fr;
`;

export const StyledResumeTopBlock = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: ${(props) => props.theme.$white};
	background-color: ${(props) => props.theme.$resume_accent};
	text-align: center;
	padding: 36px 24px;
	gap: 10px;
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

export const StyledResumeInfoBlock = styled.div`
	display: flex;
	gap: 18px;
	margin-bottom: 24px;
`;

export const StyledResumeInfoGroup = styled.div`
	min-width: 200px;
`;

export const StyledResumeSectionTitle = styled.div`
	align-items: center;
	font-weight: 800;
	font-size: ${(props) => props.theme.$size__l};
	background-color: ${(props) => props.theme.$section_resume_bg};
	color: ${(props) => props.theme.$resume_accent};
	border-radius: 2px;
	display: flex;
	justify-content: center;
	margin-bottom: 13px;
	padding: 4px 0;
	text-align: center;
`;
