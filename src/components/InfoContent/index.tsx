import React from 'react';
import classes from './styles.module.scss';
import classesMain from "pages/index.module.scss";
import toVal from "../../helpers/clsx";


export default ({linkImage = '', text1 = '', text2 = '', linkFrame = ''}) => {
	return (
		<div className={toVal(classes.info, classes.detail_info)}>
			<div className={classesMain.content_wrapper}>
				<div className={classes.info_content}>
					<div className={toVal(classes.in_content, classes.in_content_image)}>
						<img src={linkImage} alt="logotype"/>
					</div>
					<div className={classes.in_content}>
						<p className={classes.prev_text}>{text1}</p>
						<p className={classes.prev_text}>{text2}</p>
					</div>
				</div>
				<div className={classes.video_container}>
					<iframe width="100%" height="100%" src={linkFrame}
							title="YouTube video player" frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
				</div>
			</div>
		</div>
	)
}
