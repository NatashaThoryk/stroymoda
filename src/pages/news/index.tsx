import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import SearchSocial from "components/SearchSocial";
import BreadCrumbs from "components/BreadCrumbs";
import classes from '../index.module.scss';

const title = 'News'

export default () => {
	return (
		<>
			<Header/>
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
					<BreadCrumbs />
					<h2 className={classes.title_cap}>{title}</h2>
				</div>
				<SearchSocial />
			</main>
			<Footer isBg={true} customClass="footer"/>
		</>
	)
}
