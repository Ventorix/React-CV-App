import styled from 'styled-components';

export const LogoSVG = styled.svg`
	border-radius: 50%;

	&:hover {
		fill: black;
		box-shadow: 0 0 15px 2px ${(props) => props.theme.$lighten_blue};
		transition: 0.5s;
	}
`;

export const SmallSVG = styled.img`
	height: 16px;
	width: 16px;
	margin-right: 5px;
`;
