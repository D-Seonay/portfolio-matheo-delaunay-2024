import React from 'react';
import styled from 'styled-components';
import {useTheme} from "./ThemeContext";

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrorCode = styled.h1`
  font-size: 5rem;
  margin-bottom: 20px;
  color: ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};
`;

const ErrorMessage = styled.p`
  font-size: 2rem;
  text-align: center;
`;

const BackToHomeLink = styled.a`
  margin-top: 20px;
  font-size: 1.5rem;
  color: ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  }
`;

const Error404Page = () => {
	const { theme } = useTheme();
	return (
		<ErrorPageContainer theme={theme}>
			<ErrorCode theme={theme}>404</ErrorCode>
			<ErrorMessage theme={theme}>Oops! La page que vous recherchez est introuvable.</ErrorMessage>
			<BackToHomeLink href="/" theme={theme}>Retour à la page d'accueil</BackToHomeLink>
		</ErrorPageContainer>
	);
};

export default Error404Page;
