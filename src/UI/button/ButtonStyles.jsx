import styled from 'styled-components';

export const PrimaryButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.$orange};
	color: white;
	border-radius: 8px;
	border-color: transparent;
	width: 150px;
	padding: 14px;
	font-size: ${(props) => props.theme.$size__m};
	font-weight: 700;
	cursor: pointer;
	&:hover {
		background-color: rgba(243, 166, 64, 0.8);
		border: 2px solid white;
	}
`;

export const DestructiveButton = styled(PrimaryButton)`
	background-color: rgb(255, 0, 0);

	&:hover {
		background-color: rgb(255, 0, 0, 0.5);
	}
`;

export const AcceptButton = styled(PrimaryButton)`
	background-color: rgba(54, 255, 47, 0.7);

	&:hover {
		background-color: rgba(54, 255, 47, 0.5);
	}
`;
