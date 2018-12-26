import React from 'react';
import styled from 'styled-components';
import LogoPNG from '../../../../assets/images/agvg-logo-web.png';
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
	padding-left: 50px;
	position: absolute;
	top: 15px;
	transform: rotate(45deg);
	transform-origin: top left;
`;

const Navigation = () => (
	<Container>
		<AGVGLogo />
		<Link>HOME</Link>
	</Container>
);

export default Navigation;
