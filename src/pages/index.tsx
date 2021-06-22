import React from 'react';
import {setTest} from 'store/test/actions';
import {IExtendedAppContext} from 'store/with-redux-store';
import classes from './index.module.scss';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Slider from 'components/Slider';
import MainIfoBlock from 'components/MainIfoBlock';
import BlockCenter from 'components/BlockCenter';
import SectionBlockRight from 'components/SectionBlockRight';
import SectionBlockLeft from 'components/SectionBlockLeft';
import AdvantagesMainSection from 'components/AdvantagesMainSection';
import {classBody} from "@babel/types";

const sliderList1 = ['1.jpg', '1.jpg', '1.jpg', '1.jpg', '1.jpg'];
const sliderList2 = ['2.jpg', '2.jpg', '2.jpg', '2.jpg', '2.jpg'];
const sliderList3 = ['3.jpg', '3.jpg', '3.jpg', '3.jpg', '3.jpg'];
const sliderList4 = ['4.jpg', '4.jpg', '4.jpg', '4.jpg', '4.jpg'];
const sliderList5 = ['5.jpg', '5.jpg', '5.jpg', '5.jpg', '5.jpg'];
const listAdvantagesTop = [
	{
		src: './img/adva1.svg',
		text: 'Maximize use of venue\n' +
			'floor space'
	},
	{
		src: './img/adva2.svg',
		text: 'Organize more and different events in the same hall on the same day'
	}
]
const listAdvantagesBottom = [
	{
		src: './img/adva3.svg',
		text: 'Quick floor and seating reconfiguration of spectator halls'
	},
	{
		src: './img/adva4.svg',
		text: 'Allows safe social distance seating configuration for visitors\n' +
			'\n'
	}
]

const IndexPage = () => {
	return (
		<>
			<Header/>
			<main className={classes.main}>
				<div className={classes.intro}>
					<div className={classes.video}>
						<video className={classes.video_media} muted autoPlay loop height="800" width="100%" poster="">
							<source
								src="https://www.decor-plywood.com/video/Manufacturing%20process%20of%20plywood%20chair%20Flow%20-%20Plycollection.mp4"
								type="video/mp4"/>
						</video>
					</div>
					<div className={classes.intro_content}>
						<div className={classes.content_wrapper}>
							<h1>Transform<br/> your vision into reality</h1>
							<span>Seat & Wall transformation • Manufacturer of glass partitions and doors</span>
						</div>
						<div className={classes.container}>
							<div className={classes.in_wrap}>
								<div className={classes.right}>
									<p>TRUSTED BY</p>
									<div className={classes.logotype_into}>
										<img src="./img/microsoft.svg" alt="logo"/>
										<img src="./img/deloite.svg" alt="logo"/>
										<img src="./img/siemens.svg" alt="logo"/>
									</div>
								</div>
								<div className={classes.left}>
									<a href="">
										<svg width="22" height="22" viewBox="0 0 22 22" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M15.125 0H6.875C3.07863 0 0 3.07863 0 6.875V15.125C0 18.9214 3.07863 22 6.875 22H15.125C18.9214 22 22 18.9214 22 15.125V6.875C22 3.07863 18.9214 0 15.125 0ZM19.9375 15.125C19.9375 17.7787 17.7787 19.9375 15.125 19.9375H6.875C4.22125 19.9375 2.0625 17.7787 2.0625 15.125V6.875C2.0625 4.22125 4.22125 2.0625 6.875 2.0625H15.125C17.7787 2.0625 19.9375 4.22125 19.9375 6.875V15.125Z"
												fill="white"/>
											<path
												d="M11 5.5C7.96262 5.5 5.5 7.96262 5.5 11C5.5 14.0374 7.96262 16.5 11 16.5C14.0374 16.5 16.5 14.0374 16.5 11C16.5 7.96262 14.0374 5.5 11 5.5ZM11 14.4375C9.10525 14.4375 7.5625 12.8948 7.5625 11C7.5625 9.10388 9.10525 7.5625 11 7.5625C12.8948 7.5625 14.4375 9.10388 14.4375 11C14.4375 12.8948 12.8948 14.4375 11 14.4375Z"
												fill="white"/>
											<path
												d="M16.9107 5.82062C17.3155 5.82062 17.6436 5.4925 17.6436 5.08775C17.6436 4.68299 17.3155 4.35487 16.9107 4.35487C16.506 4.35487 16.1779 4.68299 16.1779 5.08775C16.1779 5.4925 16.506 5.82062 16.9107 5.82062Z"
												fill="white"/>
										</svg>
									</a>
									<a href="">
										<svg width="13" height="23" viewBox="0 0 13 23" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M12.4451 0.850731L9.40082 0.846153C5.98064 0.846153 3.77038 2.97124 3.77038 6.26038V8.75671H0.709462C0.444963 8.75671 0.230774 8.95766 0.230774 9.20553V12.8224C0.230774 13.0703 0.445207 13.271 0.709462 13.271H3.77038V22.3976C3.77038 22.6454 3.98456 22.8462 4.24906 22.8462H8.24269C8.50719 22.8462 8.72138 22.6452 8.72138 22.3976V13.271H12.3003C12.5648 13.271 12.779 13.0703 12.779 12.8224L12.7805 9.20553C12.7805 9.08651 12.7299 8.97253 12.6403 8.88831C12.5506 8.80408 12.4285 8.75671 12.3015 8.75671H8.72138V6.64054C8.72138 5.62343 8.98001 5.10709 10.3939 5.10709L12.4446 5.1064C12.7089 5.1064 12.9231 4.90545 12.9231 4.65781V1.29932C12.9231 1.05191 12.7091 0.851188 12.4451 0.850731Z"
												fill="white"/>
										</svg>
									</a>
									<a href="">
										<svg width="22" height="16" viewBox="0 0 22 16" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M17.4309 0.692314H4.56912C2.04566 0.692314 0 2.69369 0 5.16253V11.4529C0 13.9217 2.04566 15.9231 4.56912 15.9231H17.4309C19.9543 15.9231 22 13.9217 22 11.4529V5.16253C22 2.69369 19.9543 0.692314 17.4309 0.692314ZM14.3408 8.61375L8.32495 11.4208C8.16465 11.4956 7.97949 11.3813 7.97949 11.2076V5.41792C7.97949 5.24171 8.16952 5.12751 8.33016 5.20716L14.346 8.18971C14.5249 8.27838 14.5218 8.52933 14.3408 8.61375Z"
												fill="white"/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<MainIfoBlock title="Stroymoda"
							  text="We produce, supply and install a vast range of partitions and doors for offices and public interiors. Stroymoda has been providing construction, installation and fit out services in Russia since 1994."/>
				<BlockCenter title="Technical solutions for hall transformation" text="In association with our international partners, we provide transport and import, project
						documentation, production planning, project management, technical supervision,
						construction
						control, installation, and commissioning for seating and venue transformation products
						in
						Russia."/>
				<SectionBlockRight btnName="Learn more" title="Venue Transformation Systems" text1="We supply and install multipurpose hall seating
							transformation systems that are
							flexible enough
							to host any type of event." text2="Gala Systems, with its Spiralift technology, is leader
							in understage systems
							and audience
							seating transformation since 1980. It has reconfigured over 1750 multifunctional
							venues such as
							conference centers, performing arts centers and event halls"/>
				<div className={classes.section_bg}>
					<SectionBlockLeft customClass="container" btnName="Learn more" title="Retractable tribune Systems" text1="We supply and install custom made retractable seating
					systems and fixed theater
					seating for, cultural spaces, auditoriums, multifunctional halls and sports venues." text2="Jezet Seating has been a leader in high quality telescopic
					tribune design and
					bleacher seating since 1973 with over 3500 projects installed worldwide"/>
				</div>
				<div className={classes.pd_top}>
					<SectionBlockRight btnName="Learn more" title="Automatic vertical retractable walls" text1="We supply and install vertical retractable folding
										walls that increase
										flexibility of any public venue, theater or office space. Skyfold is the operable
										wall solution
										for rooms that require exceptional functionality and need to make an impact on
										visitors
										alike." text2="The acoustic automatic wall system is hidden in a
										ceiling void. Skyfold walls
										offers quick venue adaptation and an aesthetic appeal."/>
				</div>
				<div className={classes.section_bg}>
					<SectionBlockLeft customClass="container" btnName="Learn more" title="Mobile Walls" text1="We supply and install mobile wall systems that ensure
								optimal space efficiency in
								both new and existing buildings. Individual panels are suspended from, and slide along,
								an overhead
								track." text2="Espero movable partition systems are positioned and put
								away easily for quick
								reconfigurations and silent room separation."/>
				</div>
				<div className={classes.pd_top}>
					<SectionBlockRight btnName="Learn more" title="Movable Pool Floor Systems" text1="We supply and install movable floors for swimming
									pools. Akvo Spiralift uses a
									Spiralift system to create multi purpose pool designs." text2="We supply and install movable floors for swimming
									pools. Akvo Spiralift uses a
									Spiralift system to create multi purpose pool designs.
									Its floor lifting platforms are suitable for swimming pools of any size and have
									been applied in
									residential pools and commercial projects such as hotels, nightclubs and
									casino's."/>
				</div>
				<AdvantagesMainSection customClass='advantages' title="Advantages of transformation" list={listAdvantagesTop as any} list1={listAdvantagesBottom as any}/>
			</main>
			<Footer/>
		</>
	);
};

IndexPage.getInitialProps = (ctx: IExtendedAppContext) => {
	const {reduxStore} = ctx;
	// change data stare from SSR
	reduxStore.dispatch(setTest(2));
};

export default IndexPage;
