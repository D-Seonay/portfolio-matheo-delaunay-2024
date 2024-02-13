import React from 'react';
import styled, { css } from 'styled-components';

const CursorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
`;

const Cursor = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 50%;
  transition: transform 0.1s ease;
  pointer-events: none;
`;

const CursorRing = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  border: 2px solid #000;
  border-radius: 50%;
  pointer-events: none;
`;

class CursorTracker extends React.Component {
	state = {
		mouseX: 0,
		mouseY: 0,
		clicked: false,
	};

	componentDidMount() {
		document.addEventListener('mousemove', this.handleMouseMove);
		document.addEventListener('mousedown', this.handleMouseDown);
		document.addEventListener('mouseup', this.handleMouseUp);
	}

	componentWillUnmount() {
		document.removeEventListener('mousemove', this.handleMouseMove);
		document.removeEventListener('mousedown', this.handleMouseDown);
		document.removeEventListener('mouseup', this.handleMouseUp);
	}

	handleMouseDown = () => {
		this.setState({ clicked: true });
	};

	handleMouseUp = () => {
		this.setState({ clicked: false });
	};

	handleMouseMove = (event) => {
		this.setState({
			mouseX: event.clientX,
			mouseY: event.clientY,
		});
	};

	render() {
		const { mouseX, mouseY, clicked } = this.state;
		return (
			<CursorContainer clicked={clicked}>
				<Cursor
					style={{ transform: `translate(-50%, -50%) translate(${mouseX}px, ${mouseY}px)` }}
				/>
				<CursorRing style={{ left: mouseX - 16, top: mouseY - 16 }} />
			</CursorContainer>
		);
	}
}

export default CursorTracker;
