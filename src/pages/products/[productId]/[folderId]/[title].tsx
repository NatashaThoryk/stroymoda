import BreadCrumbs from 'components/BreadCrumbs';
import classes from '../../../index.module.scss';
import ImageDetailBlock from 'components/ImageDetailBlock';
import Layout from 'layouts/main';
import React from 'react';
import StickyBox from 'components/StickyBox';


const imgList = [
	{
		src: '/img/products/detail/detail1.jpg'
	}, {
		src: '/img/products/detail/detail2.jpg'
	}, {
		src: '/img/products/detail/detail3.jpg'
	}, {
		src: '/img/products/detail/detail4.jpg'
	},
	{
		src: '/img/products/detail/detail5.jpg'
	},
	{
		src: '/img/products/detail/detail6.jpg'
	}
];
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
		pathname: '/products/id/index/',
	},
	{
		text: 'Glass cladding',
		pathname: '/products/id/index/title',
	}
];

const productsDetail = () => {
	return (
		<Layout footerProps={{
			isBg: true,
			customClass: 'is_margin'
		}}>
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
					<BreadCrumbs items={breadCrumbs}/>
				</div>
				<div className={classes.container}>
					<div className={classes.detail_wrap}>
						<ImageDetailBlock imgList={imgList as any}/>
						<StickyBox/>
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default productsDetail;
