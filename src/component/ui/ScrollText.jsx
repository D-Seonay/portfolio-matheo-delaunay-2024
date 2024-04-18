import React from 'react';
import styled from 'styled-components';
import { useTheme } from "./../ThemeContext";


const ScrollContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;

    animation: bounce 1s infinite alternate;
    @keyframes bounce {
        0% {
            transform: translateY(-5px);
        }

        100% {
        transform: translateY(5px); 
        }
    }
`;

const ScrollText = styled.p`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
    font-size: 0.6rem;
    margin-bottom: 5rem;
    opacity: 1;
    transition: opacity 1s ease;
    
`;


const ScrollTextComponent = ({ children, id }) => {
    const { theme } = useTheme();
    return (
        <ScrollContainer>
            <ScrollText id={id} theme={theme}> {children} </ScrollText>
        </ScrollContainer>
    );
};

export default ScrollTextComponent;
