import classes from './stepList.module.scss';
import {IProps} from './types';
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const StepList: React.FC<IProps> = ({stepList = [], images = []}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);
	const handleOpen = () => {
		setIsOpen(true);
	};
	const handleClose = () => {
		setIsOpen(false);
	};
	const handleMovePrev = () => {
		setPhotoIndex((photoIndex + images.length - 1) % images.length);
	};
	const handleMoveNext = () => {
		setPhotoIndex((photoIndex + 1) % images.length);
	};
	return (
		<div>
			<ul className={classes.step_list}>
				{stepList.map((item: any) => (
					<li className={classes.list}>
						<div className={classes.top}>
							<div className={classes.circle}>
								{item.number}
							</div>
							<div>
								<p>{item.title}</p>
								<p>{item.title1}</p>
							</div>
						</div>
						<img onClick={handleOpen} src={item.link} alt="image"/>
						{isOpen && (
							<Lightbox
								mainSrc={images[photoIndex]}
								nextSrc={images[(photoIndex + 1) % images.length]}
								prevSrc={images[(photoIndex + images.length - 1) % images.length]}
								onCloseRequest={handleClose}
								onMovePrevRequest={handleMovePrev}
								onMoveNextRequest={handleMoveNext}
							/>
						)}
					</li>
				))}
			</ul>
		</div>

	);
};

export default StepList;
