import React from 'react';
import styled, { keyframes } from 'styled-components';

import LogoPNG from '../../../../assets/images/agvg-logo-web.png';
import HomeIcon from '../../../../assets/svgs/HomeIcon';
import ListIcon from '../../../../assets/svgs/ListIcon';
import EmailIcon from '../../../../assets/svgs/EmailIcon';
// import FrontendSVG from '../../../../assets/svgs/frontend-svg.svg';

const rotationAnimation = angle => keyframes`{
  0% {
    transform: rotate(120deg);
  }
  100% {
    transform: rotate(${angle}deg);
	}
`;

const flipAnimation = angle => keyframes`{
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
	}
`;

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
	animation: ${props => rotationAnimation(props.angle)} 500ms ease-in-out forwards;
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

const Flipper = styled.div`
	perspective: 13rem;
`;

const IconWrapper = styled.div`
	align-items: center;
	border-radius: 100%;
	background-color: white;
	display: flex;
	height: 2.75rem;
	justify-content: center;
	width: 2.75rem;
	:hover {
		animation: ${flipAnimation} 500ms ease-in-out forwards;
	}
`;

const Navigation = () => (
	<Container>
		<AGVGLogo />
		<Link angle='0'>
			<Flipper>
				<IconWrapper>
					<HomeIcon />
				</IconWrapper>
			</Flipper>
		</Link>
		<Link angle='35'>
			<Flipper>
				<IconWrapper>
						<ListIcon />
				</IconWrapper>
			</Flipper>
		</Link>
		<Link angle='70'>
			<Flipper>
				<IconWrapper>
					<EmailIcon />
				</IconWrapper>
			</Flipper>
		</Link>
	</Container>
);

export default Navigation;
