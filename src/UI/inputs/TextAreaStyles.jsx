import styled from 'styled-components';

export const FormTextArea = styled.textarea`
	border-radius: 12px;
	padding: 10px;
	color: ${(props) => props.theme.$black};
	background-color: ${(props) => props.theme.$darken_white};
	height: 100px;
	max-width: 100%;
	min-height: 42px;
	font-size: 1.3rem;
	border: 2px solid transparent;
	transition: all 0.25s;
	resize: vertical;
	white-space: pre-wrap;

	&:focus {
		outline: ${(props) => props.theme.$darken_blue} 1px solid;
		border: 2px solid ${(props) => props.theme.$lighten_blue};
		box-shadow: 0 0 2px 2px ${(props) => props.theme.$lighten_blue};
	}
`;
