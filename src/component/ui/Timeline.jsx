import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useTheme } from "../ThemeContext";
import { Element } from 'react-scroll';
import logoEPSI from "../../img/logo-timeline/LOGO_EPSI.png";
import logoLaMennais from "../../img/logo-timeline/LOGO_LaMennais.png";
import logoStFelix from "../../img/logo-timeline/LOGO_StFelix.png";
import LogoNoBullShitTech from "../../img/logo-timeline/LOGO_NoBullShitTech.svg";
import LogoDCHIT from "../../img/logo-timeline/LOGO_DCHIT.png";
import ReportNoBullShitTech from "../../pdf/RapportDeStageNoBullShit.pdf";
import ReportDCHIT from "../../pdf/rapport-de-stage-dch-it.pdf";


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

const TimelineList = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
`;

const TimelineListItem = styled.div`
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
  background-color: ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};

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
  background-color: ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};

  @media (max-width: 1024px) {
    z-index: -1;
  }
`;

const TimelineContent = styled.div`
  margin-${props => (props.isOdd ? 'right' : 'left')}: 20px;
  padding: 20px;
  min-width: 30vw;
  max-width: 35vw;
  border-radius: 10px;
  background-color: ${props => (props.theme === 'light' ? '#DADADA' : '#404040')};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 1024px) {
    min-width: 65vw;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    min-width: 90vw;
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

const LowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const Rapport = styled.a`
  color: ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s;
  
  &:hover {
    color: ${props => (props.theme === 'light' ? '#000' : '#FFF')};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
  border-radius: 5px;
  transition: 0.3s;
  position: relative;
`;

const LogoImage = styled.img`
  width: 100px; /* taille du logo */
  height: auto;
  border-radius: inherit;
  margin-right: 1rem; /* espace à droite du logo */
`;

const LinkA = styled.a`
  position: relative;
  display: block;
  width: 100%;
  padding: 0.5rem;
  text-align: right;
  text-decoration: none;
  transition: background-color 0.3s;
`;


const Divider = styled.hr`
  width: 75%;
  margin: 1rem auto;
  border-color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
`;

const MyTimeline = () => {
	const [visibleSections, setVisibleSections] = useState([]);
	const events = [
		{
			title: 'Internship at DCH-IT as a 360° Developer',
			date: 'January 2024 - February 2024',
			description: "Web development, design, project management, DevOps.",
			logo: LogoDCHIT,
			link: '',
			report: ReportDCHIT,
		},
		{
			title: 'Web Development Internship',
			date: 'May 2023 - June 2023',
			description: "Internship at NoBullShitTech, a web development company.",
			logo: LogoNoBullShitTech,
			link: 'https://engineers.getnobullshit.com/',
			report: ReportNoBullShitTech,
		},
		{
			title: 'Computer Science Studies at EPSI Nantes',
			date: 'September 2022 - Present',
			description: "Engineering school in computer science located in Nantes, post-baccalaureate to bac+5.",
			logo: logoEPSI,
			link: 'https://www.epsi.fr/',
			report: '',
		},
		{
			title: 'Apprenticeship at La Mennais High School',
			date: 'November 2020 - August 2022',
			description: "Computer maintenance and fleet management.",
			logo: logoLaMennais,
			link: 'https://www.lycee-lamennais.fr/',
			report: '',
		},
		{
			title: 'Professional Bachelor’s Degree in SN with RISC option',
			date: 'September 2019 - August 2022',
			description: "Bachelor's degree in Digital Systems with a specialization in Computer Networks and Communicating Systems at St Félix La Salle.",
			logo: logoStFelix,
			link: 'https://stfelixlasalle.fr/',
			report: '',
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
	}, []); // Utilisez une liste de dépendances vide

	return (
		<TimelineContainer>
			<TitleContainer>
				<Title theme={theme}>My Timeline</Title>
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

									<LowContainer>

										{event.report ? (
											<Rapport theme={theme} href={event.report} target="_blank" rel="noopener noreferrer">
												Lien vers le rapport
											</Rapport>
										) : (
											''
										)}

										<LogoContainer>
											{event.link ? (
												<LinkA href={event.link} target="_blank" rel="noopener noreferrer">
													<LogoImage src={event.logo} alt={event.title} />
												</LinkA>
											) : (
												<LogoImage src={event.logo} alt={event.title} />
											)}
										</LogoContainer>

									</LowContainer>

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
