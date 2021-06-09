import React from 'react';
import classes from './TestComponent.module.scss';
import { IProps } from './types';

const TestComponent: React.FC<IProps> = ({value}) => {
	return (
		<div className={classes.root}>
			TestComponent {value}
		</div>
	);
};

export default TestComponent;
