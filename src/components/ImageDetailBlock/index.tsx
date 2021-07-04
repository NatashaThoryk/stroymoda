import classes from './imageDetailBlock.module.scss';
import { IProps } from './types';
import React from 'react';

const ImageDetailBlock: React.FC<IProps> = ({imgList = []}) => {
	return (
		<div className={classes.images_detail}>
			{imgList.map((item: any) => (
				<img src={item.src} alt="image"/>
			))}
		</div>
	);
};

export default ImageDetailBlock;
