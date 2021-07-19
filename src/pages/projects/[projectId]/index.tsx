import BreadCrumbs from 'components/BreadCrumbs';
import classes from "../../index.module.scss";
import ImageDetailBlock from 'components/ImageDetailBlock';
import Layout from 'layouts/main';
import ParamFixBlock from 'components/ParamFixBlock';
import React from 'react';
import SocialBlock from 'components/SocialBlock';
import TopFixedBlock from 'components/TopFixedBlock';

const title = 'Tetra Pak';
const imgList = [
	{
		src: '/img/project/detail11.jpg'
	}, {
		src: '/img/project/detail12.jpg'
	}, {
		src: '/img/project/detail13.jpg'
	}, {
		src: '/img/project/detail14.jpg'
	},
	{
		src: '/img/project/detail15.jpg'
	},
	{
		src: '/img/project/detail16.jpg'
	}
];
const breadCrumbs = [
	{
		text: 'Projects',
		pathname: '/projects',
	},
	{
		text: 'Gazprom neft',
		pathname: '/projects/id'
	}
];
const param = [
	{
		text: 'Size:',
		param: '3521 SQM'
	},{
		text: 'Location:',
		param: 'Moscow'
	},{
		text: 'Architect:',
		param: 'ABD Architects'
	},{
		text: 'Partitions:',
		param: <span className={classes.active}>GlassLine Double</span>
	},{
		text: 'Doors:',
		param: <span>FineLine40, Solid hidden frames</span>
	},{
		text: 'Miscellaneous:',
		param: <span>Glass Cladding</span>
	},
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
							<TopFixedBlock arrowDesk="/img/nextArrow.svg" arrowMobile="/img/prevArrow.svg" link="/projects" title={title}/>
							<ParamFixBlock list={param as any}/>
							<SocialBlock customClass="leftText"/>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default productsDetail;
