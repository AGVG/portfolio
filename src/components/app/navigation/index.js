import React from 'react';
import styled from 'styled-components';

import LogoPNG from '../../../../assets/images/agvg-logo-web.png';
import HomeIcon from '../../../../assets/svgs/HomeIcon';
import ListIcon from '../../../../assets/svgs/ListIcon';
import EmailIcon from '../../../../assets/svgs/EmailIcon';
// import FrontendSVG from '../../../../assets/svgs/frontend-svg.svg';


const Container = styled.div`
	position: relative;
`;

const AGVGLogo = styled.img.attrs({
	alt: 'AGVG black with transparent background logo',
	src: LogoPNG
})`
	height: 2rem;
	max-height: 180px;
	max-width: 163px;
`;

const Link = styled.div`
	left: 15px;
	padding-left: 80px;
	position: absolute;
	top: 15px;
	transform: rotate(${props => props.angle}deg);
	transform-origin: top left;
	& > * {
		transform: rotate(-${props => props.angle}deg);
	}
`;

const Navigation = () => (
	<Container>
		<AGVGLogo />
		<Link angle='0'>
			<HomeIcon />
		</Link>
		<Link angle='35'>
			<ListIcon />
		</Link>
		<Link angle='70'>
			<EmailIcon />
		</Link>
	</Container>
);

export default Navigation;
