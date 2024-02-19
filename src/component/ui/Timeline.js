import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useTheme } from "../ThemeContext";
import { Link, Element } from 'react-scroll';

const TimelineContainer = styled.div`
  padding: 5vh 5vw;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TimelineSection = styled.section`
  padding: 5vh 5vw;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TimelineList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
`;

const TimelineListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: ${props => (props.isOdd ? 'flex-end' : 'flex-start')};
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TimelineMarker = styled.div`
  position: absolute;
  top: 0;
  left: ${props => (props.isOdd ? 'auto' : 'calc(50% - 1px)')};
  right: ${props => (props.isOdd ? 'calc(50% - 1px)' : 'auto')};
  width: 2px;
  height: 100%;
  background-color: ${props => (props.theme === 'light' ? '#DADADA' : '#191919')};

  @media (max-width: 1024px) {
    z-index: -1;
  }

`;

const TimelineDot = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => (props.isOdd ? 'calc(50% - 4px)' : 'calc(50% - 4px)')};
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => (props.theme === 'light' ? '#DADADA' : '#191919')};

  @media (max-width: 1024px) {
    z-index: -1;
  }
`;

const TimelineContent = styled.div`
  margin-${props => (props.isOdd ? 'right' : 'left')}: 20px;
  padding: 20px;
  min-width: 30vw;
  border-radius: 5px;
  background-color: ${props => (props.theme === 'light' ? '#DADADA' : '#191919')};

  @media (max-width: 1024px) {
    min-width: 65vw;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    min-width: 90vw;
    border-radius: 25px;

  }
`;

const Time = styled.time`
  font-family: Gallery, sans-serif;
  display: block;
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const TitleH2 = styled.h2`
  color: ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};
  font-size: 2rem;
  margin-bottom: 8px;
`;

const Text = styled.p`
  color: ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};
  font-size: 1rem;
`;

const Divider = styled.hr`
  width: 75%;
  margin: 1rem auto;
  border-color: ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};
`;

const ReactTimeline = ({ events }) => {
	const { theme } = useTheme();
	const contentRefs = useRef(events.map(() => React.createRef())); // Create refs for each content item

	return (
		<TimelineSection className="timeline">
			<TimelineList>
				{events.map((event, index) => (
					<Element name={`event${index}`} key={index}>
						<TimelineListItem key={index} isOdd={index % 2 !== 0}>
							<TimelineMarker isOdd={index % 2 !== 0} theme={theme} />
							<TimelineDot isOdd={index % 2 !== 0} theme={theme} />
							<TimelineContent ref={contentRefs.current[index]} isOdd={index % 2 !== 0} theme={theme}>
								<Time theme={theme}>{event.date}</Time>
								<TitleH2 theme={theme}>{event.title}</TitleH2>
								<Text theme={theme}>{event.description}</Text>
							</TimelineContent>
						</TimelineListItem>
					</Element>
				))}
			</TimelineList>
		</TimelineSection>
	);
};

const MyTimeline = () => {
	const [visibleSections, setVisibleSections] = useState([]);
	const events = [
		{
			title: 'Études en Informatique',
			date: 'Septembre 2018 - Juin 2022',
			description: "Baccalauréat en Informatique à l'Université X",
		},
		{
			title: 'Stage en Développement Web',
			date: 'Juillet 2021 - Septembre 2021',
			description: "Stage chez XYZ Entreprise, développement d'une application web.",
		},
		{
			title: 'Études en Sciences des Données',
			date: 'Septembre 2022 - Présent',
			description: "Master en Sciences des Données à l'Université Y",
		},
		{
			title: 'Stage en Data Science',
			date: 'Juillet 2023 - Septembre 2023',
			description: "Stage chez ABC Entreprise, analyse de données.",
		},
		{
			title: 'Début de carrière',
			date: 'Septembre 2023 - Présent',
			description: "Début de carrière chez ZZZ Entreprise.",
		},
	];

	const { theme } = useTheme();

	const contentRefs = useRef(events.map(() => React.createRef())); // Create refs for each content item

	useEffect(() => {
		const handleScroll = () => {
			const sectionOffsets = contentRefs.current.map(ref => ref.current ? ref.current.getBoundingClientRect().top : null);
			const visibleIndex = sectionOffsets.findIndex(offset => offset && offset > 0) ?? events.length - 1;
			setVisibleSections([...Array(visibleIndex + 2).keys()]);
		};
		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial calculation
		return () => window.removeEventListener('scroll', handleScroll);
	}, [events]);


	return (
		<TimelineContainer>
			<TitleContainer>
				<Title theme={theme}>Me Timeline</Title>
				<Divider theme={theme} />
			</TitleContainer>
			<TimelineSection>
				<TimelineList>
					{events.map((event, index) => (
						<Element name={`event${index}`} key={index}>
							<TimelineListItem key={index} isOdd={index % 2 !== 0}>
								<TimelineMarker isOdd={index % 2 !== 0} theme={theme} />
								<TimelineDot isOdd={index % 2 !== 0} theme={theme} />
								<TimelineContent
									ref={contentRefs.current[index]}
									isOdd={index % 2 !== 0}
									theme={theme}
									style={{
										transition: 'opacity 0.5s',
										opacity: visibleSections.includes(index) ? 1 : 0,
									}}
								>
									<Time theme={theme}>{event.date}</Time>
									<TitleH2 theme={theme}>{event.title}</TitleH2>
									<Text theme={theme}>{event.description}</Text>
								</TimelineContent>
							</TimelineListItem>
						</Element>
					))}
				</TimelineList>
			</TimelineSection>
		</TimelineContainer>
	);
};

export default MyTimeline;
