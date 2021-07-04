import classes from './advantagesBlock.module.scss';
import classesMain from 'pages/index.module.scss';
import { IProps } from './types';
import React from 'react';

const AdvantagesBlock: React.FC<IProps> = ({title = '', items = [], items1 = []}) => {
	return (
		<div className={classes.section_bg}>
			<div className={classesMain.content_wrapper}>
				<div className={classes.advantages_detail}>
					<h2 className={classesMain.title_cap}>{title}</h2>
					<div className={classes.list}>
						<ul>
							{items.map((item: any) => (
								<li className={classes.item_advantages}>
									<img src={item.link} alt="icon"/>
									<p className={classes.advanteges_text}>{item.text}</p>
								</li>
							))}
						</ul>
						<ul>
							{items1.map((item: any) => (
								<li className={classes.item_advantages}>
									<img src={item.link} alt="icon"/>
									<p className={classes.advanteges_text}>{item.text}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdvantagesBlock;
