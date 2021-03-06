import classes from './breadCrumbs.module.scss';
import clsx from 'helpers/clsx';
import { IProps } from './types';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const BreadCrumbs: React.FC<IProps> = ({items = []}) => {
	const router = useRouter();
	if (!items.length) return null;
	items = [
		{
			text: 'Home',
			pathname: '/',
		},
		...items,
	];

	return (
		<ul className={classes.breadcrumb_nav} itemScope itemType="http://schema.org/BreadcrumbList">
			{items.map(({ text, pathname, hash }) => {
				const active = router.pathname === pathname;
				return (
					<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" key={pathname}>
						<Link href={{
							pathname,
							hash
						}}>
							<a itemProp="item" title="home" className={clsx({
								[classes.breadcrumb_active]: active
							})}>
								<span itemProp="name">{text}</span>
								<meta itemProp="name" content="home"/>
							</a>
						</Link>
						<meta itemProp="position" content="1"/>
					</li>
				);
			})}
		</ul>
	);
};

export default BreadCrumbs;
