import styled from 'styled-components';

export const Select = styled.select`
	appearance: none;
	width: 100%;
	min-width: 18ch;
	max-width: 30ch;
	border: 1px solid white;
	border-radius: 0.4rem;
	padding: 0.5rem 3rem 0.5rem 1rem;
	color: white;
	line-height: 1.5;

	background-color: #18181b;
	background-image: url('/arrows.svg');
	background-repeat: no-repeat;
	background-position: right 0.8rem center;
	background-size: 2rem;
	height: 3rem;
	cursor: pointer;
	line-height: normal;
	font-size: 1.3rem;

	&:hover {
		outline: none;
		border-color: #dedee366;
		box-shadow: inset 0 0 0 2px #dedee366;
		background-color: #18181b;
	}
`;
