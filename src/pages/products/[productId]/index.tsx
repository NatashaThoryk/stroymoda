import BreadCrumbs from 'components/BreadCrumbs';
import classes from "../../index.module.scss";
import ImgBlock from 'components/ImgBlock';
import Layout from 'layouts/main';
import React from 'react';
import toVal from '../../../helpers/clsx';
import {useAppContext} from 'context/App';

const title = 'Miscellaneous';
const breadCrumbs = [
	{
		text: 'Products',
		pathname: '/products',
	},
	{
		text: 'Miscellaneous',
		pathname: '/products/id',
	}
];

const productsId = () => {
	const {isMobile, isTablet} = useAppContext();
	return (
		<Layout footerProps={{
			isBg: true,
			customClass: 'footer'
		}}>
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
					<BreadCrumbs items={breadCrumbs}/>
					{isMobile || isTablet
						? (
							<>
								<h2 className={toVal(classes.title_cap, classes.title_cap_mob)}>{title}</h2>
								<div className={toVal(classes.in_list, classes.top_list)}>
									<ImgBlock href="/products/id/index" title="Venue Transformation Systems" img={"/img/products/columnCladding.jpg"} />
									<ImgBlock title="Retractable Tribune Systems" img={"/img/products/smartGlass.jpg"} />
									<ImgBlock title="Automatic Vertical Retractable Walls" img={"/img/products/shopFacade.jpg"} />
									<ImgBlock title="Mobile Walls" img={"/img/products/stairCase.jpg"} />
									<ImgBlock title="Movable Pool Floor Systems" img={"/img/products/decorativeCellling.jpg"} />
								</div>
							</>
						)
						: (
							<>
							<h2 className={classes.title_cap}>{title}</h2>
							<div className={classes.main_list}>
								<div className={toVal(classes.in_list, classes.top_list)}>
									<ImgBlock href="/products/id/index" title="Venue Transformation Systems" img={"/img/products/columnCladding.jpg"} />
									<ImgBlock title="Retractable Tribune Systems" img={"/img/products/smartGlass.jpg"} />
									<ImgBlock title="Automatic Vertical Retractable Walls" img={"/img/products/shopFacade.jpg"} />
								</div>
								<div className={classes.in_list}>
									<ImgBlock title="Mobile Walls" img={"/img/products/stairCase.jpg"} />
									<ImgBlock title="Movable Pool Floor Systems" img={"/img/products/decorativeCellling.jpg"} />
								</div>
							</div>
							</>
						)}
				</div>
			</main>
		</Layout>
	);
};

export default productsId;
