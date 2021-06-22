import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import classes from "../../../index.module.scss";
import StickyBox from 'components/StickyBox';
import ImageDetailBlock from 'components/ImageDetailBlock';

export default () => {
	return (
		<>
			<Header/>
			<main className={classes.main}>
			<div className={classes.content_wrapper}>
				<ul className={classes.breadcrumb_nav} itemScope itemType="http://schema.org/BreadcrumbList">
					<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
						<a itemProp="item" href="https://www.stroymoda.ru/eng/" title="home">
							<span itemProp="name">Home</span>
							<meta itemProp="name" content="home"/>
						</a>
						<meta itemProp="position" content="1"/>
					</li>
					<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
						<a itemProp="item" href="https://www.stroymoda.ru/eng/products/" title="Products">
							<span itemProp="name">Products</span>
							<meta itemProp="name" content="Products"/>
						</a>
						<meta itemProp="position" content="2"/>
					</li>
					<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
						<a itemProp="item" href="https://www.stroymoda.ru/eng/products/" title="Miscellaneous">
							<span itemProp="name">Miscellaneous</span>
							<meta itemProp="name" content="Miscellaneous"/>
						</a>
						<meta itemProp="position" content="3"/>
					</li>
					<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
						<a itemProp="item" href="https://www.stroymoda.ru/eng/products/" title="Wall cladding">
							<span itemProp="name">Wall cladding</span>
							<meta itemProp="name" content="Wall cladding"/>
						</a>
						<meta itemProp="position" content="4"/>
					</li>
					<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
						<a className={classes.breadcrumb_active} itemProp="item" href="https://www.stroymoda.ru/eng/products/" title="Glass cladding">
							<span itemProp="name">Wall cladding</span>
							<meta itemProp="name" content="Glass cladding"/>
						</a>
						<meta itemProp="position" content="5"/>
					</li>
				</ul>
			</div>
				<div className={classes.container}>
					<div className={classes.detail_wrap}>
						<ImageDetailBlock />
						<StickyBox />
					</div>
				</div>
			</main>
			<Footer/>
		</>
	)
}
