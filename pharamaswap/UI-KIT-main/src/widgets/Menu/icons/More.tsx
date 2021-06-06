import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
	return (
		<Svg viewBox="0 0 26 25" {...props}>
			<image width="25" height="25" href={props.isActive ? "/images/greenmoreicon.png" : '/images/moreicon.png'} />

		</Svg>
		// <Svg viewBox="0 0 24 24" {...props}>
		//   <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" />
		// </Svg>

		//     <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
		// 	 viewBox="0 0 512 512" height="20" width="20" {...props}>
		// <g>
		// 	<g>
		// 		<g>
		// 			<path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480
		// 				C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z" fill="#75dfee"/>
		// 			<circle cx="256" cy="256" r="32" fill="#75dfee"/>
		// 			<circle cx="368" cy="256" r="32" fill="#75dfee"/>
		// 			<circle cx="144" cy="256" r="32" fill="#75dfee"/>
		// 		</g>
		// 	</g>
		// </g>
		// <g>
		// </g>
		// <g>
		// </g>
		// <g>
		// </g>
		// <g>
		// </g>
		// <g>
		// </g>
		// <g>
		// </g>
		// <g>
		// </g>
		// <g>
		// </g>
		// <g>
		// </g>
		// <g>
		// </g>
		// <g>
		// </g>
		// <g>
		// </g>
		// <g>
		// </g>
		// <g>
		// </g>
		// <g>
		// </g>
		// </svg>
	);
};

export default Icon;
