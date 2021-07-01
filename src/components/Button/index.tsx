import React from 'react';
import classes from './styles.module.scss';
import classesMain from "pages/index.module.scss";

export default ({link = '', btnName = '', customClass = ''}) => {
	return (
		<div className={classes[customClass]}>
			<a href={link} className={classesMain.btn_learn}>{btnName}
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none"
					 xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0)">
						<path
							d="M8.12931 7.56102L0.741146 0.172852C0.496557 -0.0633678 0.106803 -0.0565857 -0.129416 0.188003C-0.359864 0.426603 -0.359864 0.80485 -0.129416 1.04341L6.82347 7.9963L-0.129416 14.9492C-0.369784 15.1896 -0.369784 15.5793 -0.129416 15.8197C0.111024 16.0601 0.500742 16.0601 0.741146 15.8197L8.12931 8.43158C8.36968 8.19114 8.36968 7.80142 8.12931 7.56102Z"
							fill="#DC3143"/>
					</g>
					<defs>
						<clipPath id="clip0">
							<rect width="16" height="16" fill="white"/>
						</clipPath>
					</defs>
				</svg>
			</a>
		</div>
	)
}
