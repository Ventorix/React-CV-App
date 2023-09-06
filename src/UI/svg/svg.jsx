import { styled, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360);
  }
`;

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

export const MediumSVG = styled.img`
	height: 32px;
	width: 32px;
	margin-right: 5px;
`;

export const ArrowSVG = styled(SmallSVG)`
	height: 24px;
	width: 24px;
	transition: transform 0.3s;
	transform: rotate(0deg);
	&.open {
		transform: rotate(180deg);
	}
`;
