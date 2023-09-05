import styled from 'styled-components';

export const StyledSidebar = styled.div`
	display: flex;
	flex-grow: 1;
	flex-wrap: wrap;
	gap: 24px;
	height: fit-content;
	max-width: 750px;
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
	padding: 3em;
`;

export const StyledInputBlock = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	gap: 6px;
	margin-bottom: 12px;
`;
