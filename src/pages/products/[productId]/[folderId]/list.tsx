import BreadCrumbs from 'components/BreadCrumbs';
import classes from "pages/index.module.scss";
import ImgBlock from 'components/ImgBlock';
import Layout from 'layouts/main';
import React from 'react';
import toVal from '../../../../helpers/clsx';
import {useAppContext} from 'context/App';

const title = 'Office partitions';
const breadCrumbs = [
	{
		text: 'Products',
		pathname: '/products',
	},
	{
		text: 'Office partitions',
		pathname: '/products/id/index/list',
	}
];

const productsIdList = () => {
	const {isMobile} = useAppContext();

	return (
		<Layout footerProps={{
			isBg: true,
			customClass: 'is_margin'
		}}>
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
					<BreadCrumbs items={breadCrumbs}/>
					{isMobile
						? (<>
								<h2 className={toVal(classes.title_cap, classes.title_cap_mob)}>{title}</h2>
								<div className={toVal(classes.in_list, classes.top_list)}>
									<ImgBlock href="/products/id/index/title" title="Express 2" img={"/img/products/columnCladding.jpg"} />
									<ImgBlock href="/products/id/index/title" title="Glassline Single " img={"/img/products/smartGlass.jpg"} />
									<ImgBlock href="/products/id/index/title" title="Glassline Double" img={"/img/products/shopFacade.jpg"} />
								</div>
								<div className={classes.in_list}>
									<ImgBlock href="/products/id/index/title" title="Uni 1 Single" img={"/img/products/stairCase.jpg"} />
									<ImgBlock href="/products/id/index/title" title="Uni 2 Double" img={"/img/products/decorativeCellling.jpg"} />
									<ImgBlock href="/products/id/index/title" title="Fineline" img={"/img/products/decorativeCellling.jpg"} />
								</div>
							</>
						)
						: (
							<>
								<h2 className={classes.title_cap}>{title}</h2>
								<div className={classes.main_list}>
									<div className={toVal(classes.in_list, classes.top_list)}>
										<ImgBlock href="/products/id/index/title" title="Express 2" img={"/img/products/columnCladding.jpg"} />
										<ImgBlock href="/products/id/index/title" title="Glassline Single " img={"/img/products/smartGlass.jpg"} />
										<ImgBlock href="/products/id/index/title" title="Glassline Double" img={"/img/products/shopFacade.jpg"} />
									</div>
									<div className={classes.in_list}>
										<ImgBlock href="/products/id/index/title" title="Uni 1 Single" img={"/img/products/stairCase.jpg"} />
										<ImgBlock href="/products/id/index/title" title="Uni 2 Double" img={"/img/products/decorativeCellling.jpg"} />
										<ImgBlock href="/products/id/index/title" title="Fineline" img={"/img/products/decorativeCellling.jpg"} />
									</div>
								</div>
							</>
						)}
				</div>
			</main>
		</Layout>
	);
};

export default productsIdList;
