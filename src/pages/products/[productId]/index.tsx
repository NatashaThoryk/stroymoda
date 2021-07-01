import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import classes from "../../index.module.scss";
import toVal from "../../../helpers/clsx";
import ImgBlock from 'components/ImgBlock';
import BreadCrumbs from 'components/BreadCrumbs';

const title = 'Miscellaneous'

export default () => {
	return (
		<>
			<Header />
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
					<BreadCrumbs />
					<h2 className={classes.title_cap}>{title}</h2>
					<div className={classes.main_list}>
						<div className={toVal(classes.in_list, classes.top_list)}>
							<ImgBlock title="Venue Transformation Systems" img={'/img/products/columnCladding.jpg'} />
							<ImgBlock title="Retractable Tribune Systems" img={'/img/products/smartGlass.jpg'} />
							<ImgBlock title="Automatic Vertical Retractable Walls" img={'/img/products/shopFacade.jpg'} />
						</div>
						<div className={classes.in_list}>
							<ImgBlock title="Mobile Walls" img={'/img/products/stairCase.jpg'} />
							<ImgBlock title="Movable Pool Floor Systems" img={'/img/products/decorativeCellling.jpg'} />
						</div>
					</div>
				</div>
			</main>
			<Footer isBg customClass="footer"/>
		</>
	)
}
