import BreadCrumbs from 'components/BreadCrumbs';
import classes from "pages/index.module.scss";
import ImgBlock from 'components/ImgBlock';
import Layout from 'layouts/main';
import React from 'react';
import toVal from '../../../../helpers/clsx';
import {useAppContext} from 'context/App';

const title = 'Wall Cladding';

const breadCrumbs = [
	{
		text: 'Products',
		pathname: '/products',
	},
	{
		text: 'Miscellaneous',
		pathname: '/products/id',
	},
	{
		text: 'Wall cladding',
		pathname: '/products/id/index',
	}
];

const productsIdItem = () => {
	const {isMobile, isTablet} = useAppContext();

	return (
		<Layout footerProps={{
			isBg: true,
			customClass: 'is_margin'
		}}>
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
					<BreadCrumbs items={breadCrumbs}/>
					{isMobile || isTablet
						? (<>
								<h2 className={toVal(classes.title_cap, classes.title_cap_mob)}>{title}</h2>
									<div className={toVal(classes.in_list, classes.top_list)}>
										<ImgBlock href="/products/id/index/title/" title="Venue Transformation Systems" img={"/img/products/columnCladding.jpg"} />
										<ImgBlock href="/products/id/index/title/" title="Retractable Tribune Systems" img={"/img/products/smartGlass.jpg"} />
										<ImgBlock href="/products/id/index/title/" title="Automatic Vertical Retractable Walls" img={"/img/products/shopFacade.jpg"} />
									</div>
							</>
						)
							: (
								<>
									<h2 className={classes.title_cap}>{title}</h2>
									<div className={classes.main_list}>
										<div className={toVal(classes.in_list, classes.top_list)}>
											<ImgBlock href="/products/id/index/title/" title="Venue Transformation Systems" img={"/img/products/columnCladding.jpg"} />
											<ImgBlock href="/products/id/index/title/" title="Retractable Tribune Systems" img={"/img/products/smartGlass.jpg"} />
											<ImgBlock href="/products/id/index/title/" title="Automatic Vertical Retractable Walls" img={"/img/products/shopFacade.jpg"} />
										</div>
									</div>
								</>
						)}
				</div>
			</main>
		</Layout>
	);
};

export default productsIdItem;
