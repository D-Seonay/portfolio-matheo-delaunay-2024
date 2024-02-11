import React from 'react';
import { NavbarStyle, Title, Link, Icons, NavbarLink } from '../styles';
import { IoMdMail } from "react-icons/io";
import { useTheme} from "./ThemeContext";
import ThemeToggleButton from "./ui/ToggleThemeButton";

function Navbar() {
	const { theme } = useTheme();
	return (
		<NavbarStyle theme={theme}>
			<Link href="/">
				<Title theme={theme}>SEONAY</Title>
			</Link>
			<NavbarLink className="row">
				{/* Link page about me*/}
				<Link theme={theme} href="/about">
						<p>/About-me</p>
				</Link>
				{/*Icon mail*/}
				<Link href="mailto:matheodelaunay04@gmail.com">
					<Icons theme={theme}><IoMdMail /></Icons>
				</Link>
				<ThemeToggleButton theme={theme} />
			</NavbarLink>
		</NavbarStyle>
	);
}

export default Navbar;
