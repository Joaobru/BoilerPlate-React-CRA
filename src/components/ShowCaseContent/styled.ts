import styled from 'styled-components';

export const ShowCaseStyled = styled.div`
	height: 95%;
	display: grid;
`;

export const ContainerStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 100px;
	padding-left: 100px;

	@media (max-width: 768px) {
		flex-direction: column-reverse;
		justify-content: start;
		padding-right: 20px;
		padding-left: 20px;
	}
`;

export const TitleStyled = styled.h1`
	color: var(--text-light);
	font-size: 42px;
	margin-bottom: 16px;

	@media (max-width: 768px) {
		font-size: 26px;
		margin-top: 40px;
		margin-bottom: 26px;
	}
`;

export const SubTitleStyled = styled.h2`
	color: var(--text-light);
	font-size: 26px;
	font-weight: 400;

	@media (max-width: 768px) {
		font-size: 20px;
	}
`;

export const ContainerImageStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	height: 340px;
	width: 340px;
	background-color: var(--background);

	img {
		max-height: 320px;
		border-radius: 100%;
	}

	@media (max-width: 768px) {
		height: 280px;
		width: 280px;

		img {
			max-height: 260px;
		}
	}
`;
