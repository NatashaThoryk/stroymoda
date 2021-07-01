import BreadCrumbs from 'components/BreadCrumbs';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ImageDetailBlock from 'components/ImageDetailBlock';
import StickyBox from 'components/StickyBox';
import React from 'react';
import classes from '../../../index.module.scss';

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

export default () => {
	return (
		<>
			<Header/>
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
					<BreadCrumbs />
				</div>
				<div className={classes.container}>
					<div className={classes.detail_wrap}>
						<ImageDetailBlock imgList={imgList as any}/>
						<StickyBox/>
					</div>
				</div>
			</main>
			<Footer isBg customClass="is_margin"/>
		</>
	);
};
