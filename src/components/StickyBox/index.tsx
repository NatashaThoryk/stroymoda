import React, {useEffect, useRef, useState, useCallback} from "react";
import classes from './styles.module.scss';
import CheckListBlock from 'components/CheckListBlock';
import SocialBlock from 'components/SocialBlock';
import FileBlock from 'components/FileBlock';
import PrevText from 'components/PrevText';
import TopFixedBlock from 'components/TopFixedBlock';
import ParamFixBlock from 'components/ParamFixBlock';
// import ImgSideBar from "components/ImgSideBar";

const title = 'Glass cladding'
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
]
const textBlock = 'This product range offers a broad range of  reative possibilities in glass to designers and architects for:'
const param = [
	{
		text: 'Size:',
		param: <a href="">123123</a>
	},{
		text: 'Location:',
		param: 'Moscow'
	},{
		text: 'Architect:',
		param: 'ABD Architects'
	},{
		text: 'Partitions:',
		param: '3521SQM'
	},{
		text: 'Doors:',
		param: '3521SQM'
	},{
		text: 'Miscellaneous:',
		param: '3521SQM'
	},
]


export default () => {
	const [isSticky, setIsSticky]  = useState(false);
	const [offsetTop, setOffsetTop]  = useState(0);
	const myRef = useRef<any>();
	const handleScroll = useCallback(() => {
		if (window.scrollY >= offsetTop) {
			console.log(222222, offsetTop)
			!isSticky && setIsSticky(true)
		} else {
			console.log(1111111)
			isSticky && setIsSticky(false)
		}
	}, [offsetTop])
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		setOffsetTop(myRef.current.offsetTop);
	}, [])
	return (
<div className={classes.fixed_block} ref={myRef} style={{position: isSticky? 'fixed' : 'relative', right: 0}}>
	<TopFixedBlock title={title}/>
	{/*<ParamFixBlock list={param as any}/>*/}
	<PrevText text1={textBlock} />
	<CheckListBlock checkList={checkList as any}/>
	{/*<ImgSideBar src='/img/products/det1.jpg'/>*/}
	<FileBlock />
	<SocialBlock customClass='leftText'/>
</div>
	)
}
