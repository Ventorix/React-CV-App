import styled from 'styled-components';

export const StyledSidebar = styled.div`
	display: flex;
	flex-grow: 1;
	flex-wrap: wrap;
	gap: 24px;
	height: fit-content;
	max-width: 750px;
`;

export const StyledTemplateBlock = styled.div`
	background-color: #fff;
	border-radius: 12px;
	box-shadow: 0 7px 29px 0 hsla(240, 5%, 41%, 0.2);
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
	padding: 12px;
	position: sticky;
	top: 8px;
	z-index: 3;
`;

export const StyledFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 999;
	gap: 28px;
`;

export const StyledForm = styled.form`
	background-color: ${(props) => props.theme.$white};
	border-radius: 2rem;
`;

export const StyledSection = styled.div`
	background-color: ${(props) => props.theme.$white};
	border-radius: 2rem;
	padding: 1.5em;
`;

export const StyledInputBlock = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	gap: 6px;
	margin-bottom: 12px;
`;

export const StyledSectionTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;

export const StyledTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 6px;
`;
