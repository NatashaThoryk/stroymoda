import React from 'react';
import classes from './styles.module.scss';
import classesMain from 'styles/main.module.scss';
import toVal from "../../helpers/clsx";


export default ({title = '', list = [], list1 = [], customClass = ''}) => {
	return (
		<div className={classes[customClass]}>
			<div className={classesMain.content_wrapper}>
				<h2 className={classesMain.title_cap}>{title}</h2>
				<div className={classes.list_advantages}>
					<ul className={toVal(classes.list, classes.top_list)}>
							{list.map((item: any) => (
								<li className={classes.item_advantages}>
									<div className={classes.bg}>
										<img src={item.src} alt=""/>
									</div>
									<p>{item.text}</p>
								</li>
							))}
					</ul>
					<ul className={toVal(classes.list, classes.bottom_list)}>
							{list1.map((item: any) => (
								<li className={classes.item_advantages}>
									<div className={classes.bg}>
										<img src={item.src} alt=""/>
									</div>
									<p>{item.text}</p>
								</li>
							))}
					</ul>
				</div>
			</div>
		</div>
	)
}
