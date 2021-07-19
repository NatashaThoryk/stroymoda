import classes from './quoteBlock.module.scss';
import classesMain from "pages/index.module.scss";
import { IProps } from './types';
import React from 'react';

const QuoteBlock: React.FC<IProps> = ({text = ''}) => {
	return (
		<div className={classes.quote}>
			<div className={classesMain.content_wrapper}>
				<div className={classes.section_slide}>
					<p className={classes.quote_text}>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default QuoteBlock;
