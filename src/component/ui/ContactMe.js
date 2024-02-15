import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from "../ThemeContext";
const CV = require('../../pdf/cv-matheo-delaunay.pdf');

// Animation pour le texte "EMAIL" lorsqu'il est survolé
const shakeAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

// Style du texte "DROP ME AN EMAIL"
const DropMeEmailText = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  font-size: 8rem;
  text-align: center;
  margin: 5rem 0;
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  
  @media (max-width: 1192px) {
    font-size: 5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 576px) {
    font-size: 4rem;
  }
`;

// Style du texte "EMAIL" avec animation
const EmailText = styled.a`
  font-size: 8rem;
  font-family: 'Gallery', sans-serif;
  display: inline-block;
  transition: transform 0.3s ease-in-out;
  margin-left: 1rem;
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};

  &:hover {
    animation: ${shakeAnimation} 0.5s ease-in-out infinite; /* Animation de secousse lors du survol */
  }
  
  @media (max-width: 1192px) {
    font-size: 5rem;
  }

  @media (max-width: 768px) {
	flex-direction: column;

  @media (max-width: 576px) {
    flex-direction: column;
    font-size: 4rem;
  }
`;

const ContactMeContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 4rem;
  text-align: center;
  width: 100%;
  height: 60vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};

  &:hover {
    
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const Divider = styled.hr`
  width: 75%;
  margin: 1rem auto;
  border-color: ${props => (props.theme === 'light' ? '#000' : '#fff')};

`;


const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLink = styled.a`
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  text-decoration: none;
  font-size: 1rem;
  margin: 0 1rem;
transition: text-decoration 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
    color: ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};
  }
`;

const Date = styled.p`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  font-size: 1rem;
  transition: color 0.3s ease-in-out, text-decoration 1s ease-in-out	;

  &:hover {
    color: ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};
    text-decoration: underline;
    
  }
`;

const DateText = styled.p`
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  font-size: 1rem;
  margin-left: 0.5rem;
  transition: color 0.3s ease-in-out, text-decoration 1s ease-in-out;
  
  &:hover {
    color: ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};
	text-decoration: underline;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const CVLink = styled.a`
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  text-decoration: none;
  font-size: 1rem;
  margin: 0 1rem;
  transition: text-decoration 0.3s ease-in-out, color 0.3s ease-in-out;
  
  &:hover {
    text-decoration: underline;
	color: ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};
  }
`;

const SmallLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem auto;
  border-color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
`;

const ContactMe = () => {
	const { theme } = useTheme();

	return (
		<ContactMeContainer>
			<Title theme={theme}>Contact Me</Title>
			<Divider theme={theme} />
			<DropMeEmailText theme={theme}>
				DROP ME AN <EmailText theme={theme} href={`mailto:matheodelaunay04@gmail.com`}>EMAIL</EmailText>
			</DropMeEmailText>
			<Divider theme={theme} />
			<SmallLine>
				<Date theme={theme}>©2024 <DateText theme={theme}> Matheo Delaunay </DateText></Date>
				<CVLink theme={theme} href={CV} target="_blank">Download CV</CVLink>
				<SocialLinks>
					<SocialLink theme={theme} href="https://www.linkedin.com/in/matheo-delaunay/" target="_blank">LinkedIn</SocialLink>
					<SocialLink theme={theme} href="https://github.com/D-Seonay" target="_blank">GitHub</SocialLink>
				</SocialLinks>
			</SmallLine>
		</ContactMeContainer>
	);
};

export default ContactMe;
