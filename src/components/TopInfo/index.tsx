import classes from './topInfo.module.scss';
import {IProps} from './types';
import React from 'react';
import toVal from '../../helpers/clsx';
import {useAppContext} from '../../context/App';


const TopInfo: React.FC<IProps> = ({title = '', link = ''}) => {
	const {isMobile} = useAppContext();

	return (
		<>
			{isMobile
				? (
					<div className={toVal(classes.top_center, classes.title_mob)}>
						<img src={link} alt="logo"/>
						<h2 className={classes.title_cap}>{title}</h2>
					</div>
				)
				: (
					<div className={classes.top_center}>
						<img src={link} alt="logo"/>
						<h2 className={classes.title_cap}>{title}</h2>
					</div>

				)}
		</>
	);
};

export default TopInfo;
