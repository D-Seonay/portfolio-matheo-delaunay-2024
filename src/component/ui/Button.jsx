import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animation keyframes
const topBubbles = keyframes`
0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
}
50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
}
100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
}
`;

const bottomBubbles = keyframes`
0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
}
50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
}
100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
}
`;

// Styled component
const BubblyButtonLink = styled.a`

    display: inline-block;
    text-decoration: none;
    font-size: 1em;
    padding: 1em 2em;
    -webkit-appearance: none;
    appearance: none;
    background-color: ${props => props.buttonBg};
    color: ${props => props.buttonTextColor};
    border-radius: 4px;
    border: none;
    position: relative;
    transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
    box-shadow: 0 2px 25px rgba(0, 0, 255, 0.2);

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 2px 25px rgba(0, 0, 255, 0.7);
        }

    &:focus {
        outline: 0;
        }

    &:before, &:after {

        position: absolute;
        content: '';
        display: block;
        width: 140%;
        height: 100%;
        left: -20%;
        z-index: -1000;
        transition: all ease-in-out 0.5s;
        background-repeat: no-repeat;
        }

    &:before {

        display: none;
        top: -75%;
        background-image: radial-gradient(circle, ${props => props.buttonBg} 20%, transparent 20%),
        radial-gradient(circle, transparent 20%, ${props => props.buttonBg} 20%, transparent 30%),
        radial-gradient(circle, ${props => props.buttonBg} 20%, transparent 20%),
        radial-gradient(circle, ${props => props.buttonBg} 20%, transparent 20%),
        radial-gradient(circle, transparent 10%, ${props => props.buttonBg} 15%, transparent 20%),
        radial-gradient(circle, ${props => props.buttonBg} 20%, transparent 20%),
        radial-gradient(circle, ${props => props.buttonBg} 20%, transparent 20%),
        radial-gradient(circle, ${props => props.buttonBg} 20%, transparent 20%),
        radial-gradient(circle, ${props => props.buttonBg} 20%, transparent 20%);
        background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
        }

    &:after {

        display: none;
        bottom: -75%;
        background-image: radial-gradient(circle, ${props => props.buttonBg} 20%, transparent 20%),
        radial-gradient(circle, ${props => props.buttonBg} 20%, transparent 20%),
        radial-gradient(circle, transparent 10%, ${props => props.buttonBg} 15%, transparent 20%),
        radial-gradient(circle, ${props => props.buttonBg} 20%, transparent 20%),
        radial-gradient(circle, ${props => props.buttonBg} 20%, transparent 20%),
        radial-gradient(circle, ${props => props.buttonBg} 20%, transparent 20%),
        radial-gradient(circle, ${props => props.buttonBg} 20%, transparent 20%);
        background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
        }

    &:active {
            
            transform: scale(0.9);
            background-color: darken(${props => props.buttonBg}, 5%);
            box-shadow: 0 2px 25px rgba(0, 0, 255, 0.2);
            }

    &.animate {
        &:before {
            display: block;
            animation: ${topBubbles} ease-in-out 0.75s forwards;
            }
        &:after {
            display: block;
            animation: ${bottomBubbles} ease-in-out 0.75s forwards;
            }
        }

`;
// Component
const Button = ({ buttonBg, buttonTextColor, href, theme, text }) => {
    const handleClick = (e) => {
    e.preventDefault();
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(() => {
        e.target.classList.remove('animate');
        // Redirection après 500ms
        setTimeout(() => {
          window.location.href = href || '#'; // Rediriger vers l'URL spécifiée ou '#' par défaut
        }, 500);
    }, 700);
    };
    return (
    <div>
        <BubblyButtonLink buttonBg={buttonBg} buttonTextColor={buttonTextColor} href={href ? href : '#'} onClick={handleClick} theme={theme} target="_blank" rel="noreferrer" >
            {text}
            </BubblyButtonLink>
    </div>
    );
};

export default Button;