import React from 'react';
import classes from './styles.module.scss';
import classesMain from 'styles/main.module.scss';

export default ({list = []}) => {
	return (
		<ul className={classes.breadcrumb_nav} itemScope itemType="http://schema.org/BreadcrumbList">
			<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
				<a itemProp="item" href="https://www.stroymoda.ru/eng/" title="home">
					<span itemProp="name">Home</span>
					<meta itemProp="name" content="home"/>
				</a>
				<meta itemProp="position" content="1"/>
			</li>
			<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
				<a className={classes.breadcrumb_active} itemProp="item"
				   href="https://www.stroymoda.ru/eng/products/"
				   title="About">
					<span itemProp="name">About</span>
					<meta itemProp="name" content="About"/>
				</a>
				<meta itemProp="position" content="2"/>
			</li>
		</ul>
	)
}
