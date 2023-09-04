import styled from 'styled-components';

export const PrimaryButton = styled.button`
	background-color: rgb(122, 122, 452);
	color: white;
	border-radius: 8px;
	border-color: transparent;
	width: 150px;
	padding: 14px;
	font-size: 20px;
	font-weight: 700;
	cursor: pointer;
	&&:hover {
		background-color: rgb(122, 122, 452, 0.5);
		border: 2px solid white;
	}
`;

export const DestructiveButton = styled(PrimaryButton)`
	background-color: rgb(255, 0, 0);

	&&:hover {
		background-color: rgb(255, 0, 0, 0.5);
	}
`;

export const RemoveButton = styled(PrimaryButton)`
	background-color: rgb(255, 0, 0);
	width: 100px;
	padding: 8px;

	&&:hover {
		background-color: rgb(255, 0, 0, 0.5);
	}
`;
