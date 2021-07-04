import CheckListBlock from 'components/CheckListBlock';
import FileBlock from 'components/FileBlock';
import PrevText from 'components/PrevText';
import SocialBlock from 'components/SocialBlock';
import TopFixedBlock from 'components/TopFixedBlock';
import React from 'react';
import classes from './stickyBox.module.scss';
import ParamFixBlock from 'components/ParamFixBlock';
import ImgSideBar from "components/ImgSideBar";

const title = 'Glass cladding';
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
// const param = [
// 	{
// 		text: 'Size:',
// 		param: <a href="">123123</a>
// 	},{
// 		text: 'Location:',
// 		param: 'Moscow'
// 	},{
// 		text: 'Architect:',
// 		param: 'ABD Architects'
// 	},{
// 		text: 'Partitions:',
// 		param: '3521SQM'
// 	},{
// 		text: 'Doors:',
// 		param: '3521SQM'
// 	},{
// 		text: 'Miscellaneous:',
// 		param: '3521SQM'
// 	},
// ];


const StickyBox = () => {
	return (
		<div className={classes.fixed_block}>
			<TopFixedBlock link='/products' title={title}/>
			{/*<ParamFixBlock list={param as any}/>*/}
			<PrevText text1={textBlock} />
			<CheckListBlock checkList={checkList as any}/>
			{/*<ImgSideBar src='/img/products/det1.jpg'/>*/}
			<FileBlock />
			<SocialBlock customClass="leftText"/>
		</div>
	);
};

export default StickyBox;
