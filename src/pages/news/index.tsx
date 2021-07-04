import BreadCrumbs from 'components/BreadCrumbs';
import classes from '../index.module.scss';
import Layout from 'layouts/main';
import React from 'react';
import SearchSocial from 'components/SearchSocial';


const title = 'News';
const breadCrumbs = [
	{
		text: 'News',
		pathname: '/news',
	}
];

const News = () => {
	return (
		<Layout footerProps={{
			isBg: true,
			customClass: 'footer'
		}}>
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
					<BreadCrumbs items={breadCrumbs}/>
					<h2 className={classes.title_cap}>{title}</h2>
				</div>
				<SearchSocial />
			</main>
		</Layout>
	);
};

export default News;
