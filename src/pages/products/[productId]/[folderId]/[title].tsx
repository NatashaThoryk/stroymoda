import BreadCrumbs from 'components/BreadCrumbs';
import CheckListBlock from 'components/CheckListBlock';
import classes from '../../../index.module.scss';
import FileBlock from 'components/FileBlock';
import ImageDetailBlock from 'components/ImageDetailBlock';
import Layout from 'layouts/main';
import PrevText from 'components/PrevText';
import React from 'react';
import SocialBlock from 'components/SocialBlock';
import TopFixedBlock from 'components/TopFixedBlock';


const title = 'Glass cladding';
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
const checkList = [
	{
		src: '/img/products/check.svg',
		text: 'Cladding.'
	},{
		src: '/img/products/check.svg',
		text: 'Staircases.'
	},{
		src: '/img/products/check.svg',
		text: 'Balustrades.'
	},{
		src: '/img/products/check.svg',
		text: 'Floors.'
	},{
		src: '/img/products/check.svg',
		text: 'Special constructions.'
	},
];
const textBlock = 'This product range offers a broad range of  reative possibilities in glass to designers and architects for:';
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
						<div className={classes.fixed_block}>
							<TopFixedBlock link='/products' title={title}/>
							<PrevText text1={textBlock} />
							<CheckListBlock checkList={checkList as any}/>
							{/*<ImgSideBar src='/img/products/det1.jpg'/>*/}
							<FileBlock />
							<SocialBlock customClass="leftText"/>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default productsDetail;
