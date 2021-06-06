import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
	return (
		<Svg viewBox="0 0 26 25" {...props}>
			<image width="25" height="25" href={props.isActive ? "/images/greenifoicon.png" : '/images/ifoicon.png'} />

		</Svg>
		// <Svg viewBox="0 0 24 24" {...props}>
		//   <path d="M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" />
		// </Svg>

		//     <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="30" height="30"
		// 	 viewBox="0 0 23.625 23.625"  >
		// <g>
		// 	<path  d="M11.812,0C5.289,0,0,5.289,0,11.812s5.289,11.813,11.812,11.813s11.813-5.29,11.813-11.813
		// 		S18.335,0,11.812,0z M14.271,18.307c-0.608,0.24-1.092,0.422-1.455,0.548c-0.362,0.126-0.783,0.189-1.262,0.189
		// 		c-0.736,0-1.309-0.18-1.717-0.539s-0.611-0.814-0.611-1.367c0-0.215,0.015-0.435,0.045-0.659c0.031-0.224,0.08-0.476,0.147-0.759
		// 		l0.761-2.688c0.067-0.258,0.125-0.503,0.171-0.731c0.046-0.23,0.068-0.441,0.068-0.633c0-0.342-0.071-0.582-0.212-0.717
		// 		c-0.143-0.135-0.412-0.201-0.813-0.201c-0.196,0-0.398,0.029-0.605,0.09c-0.205,0.063-0.383,0.12-0.529,0.176l0.201-0.828
		// 		c0.498-0.203,0.975-0.377,1.43-0.521c0.455-0.146,0.885-0.218,1.29-0.218c0.731,0,1.295,0.178,1.692,0.53
		// 		c0.395,0.353,0.594,0.812,0.594,1.376c0,0.117-0.014,0.323-0.041,0.617c-0.027,0.295-0.078,0.564-0.152,0.811l-0.757,2.68
		// 		c-0.062,0.215-0.117,0.461-0.167,0.736c-0.049,0.275-0.073,0.485-0.073,0.626c0,0.356,0.079,0.599,0.239,0.728
		// 		c0.158,0.129,0.435,0.194,0.827,0.194c0.185,0,0.392-0.033,0.626-0.097c0.232-0.064,0.4-0.121,0.506-0.17L14.271,18.307z
		// 		 M14.137,7.429c-0.353,0.328-0.778,0.492-1.275,0.492c-0.496,0-0.924-0.164-1.28-0.492c-0.354-0.328-0.533-0.727-0.533-1.193
		// 		c0-0.465,0.18-0.865,0.533-1.196c0.356-0.332,0.784-0.497,1.28-0.497c0.497,0,0.923,0.165,1.275,0.497
		// 		c0.353,0.331,0.53,0.731,0.53,1.196C14.667,6.703,14.49,7.101,14.137,7.429z" fill="#75dfee"/>
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
