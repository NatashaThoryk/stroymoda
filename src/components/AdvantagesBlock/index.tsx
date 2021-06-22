import React from 'react';
import classes from './styles.module.scss';
import classesMain from 'styles/main.module.scss';


export default ({title = '', items = [], items1 = []}) => {
	return (
		<div className={classes.section_bg}>
			<div className={classesMain.content_wrapper}>
				<div className={classes.advantages_detail}>
					<h2 className={classesMain.title_cap}>{title}</h2>
					<div className={classes.list}>
						<ul>
							{items.map((item: any) => (
								<li className={classes.item_advantages}>
									<img src={item.link} alt=""/>
									<p className={classes.advanteges_text}>{item.text}</p>
								</li>
							))}
						</ul>
						<ul>
							{items1.map((item: any) => (
								<li className={classes.item_advantages}>
									<img src={item.link} alt=""/>
									<p className={classes.advanteges_text}>{item.text}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
