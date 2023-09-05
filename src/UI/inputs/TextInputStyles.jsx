import styled from 'styled-components';

export const FormTextInput = styled.input`
	width: 100%;
	min-width: 18ch;
	max-width: 30ch;
	border-radius: 12px;
	padding: 10px;
	color: ${(props) => props.theme.$black};
	background-color: ${(props) => props.theme.$darken_white};
	height: 2rem;
	font-size: 1.3rem;
	border: 2px solid transparent;
	transition: all 0.25s;

	&:focus {
		outline: ${(props) => props.theme.$darken_blue} 1px solid;
		border: 2px solid ${(props) => props.theme.$lighten_blue};
		box-shadow: 0 0 15px 2px ${(props) => props.theme.$lighten_blue};
	}
`;
