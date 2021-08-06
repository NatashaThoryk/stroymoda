import AdvantagesMainSection from 'components/AdvantagesMainSection';
import BlockCenter from 'components/BlockCenter';
import classes from './index.module.scss';
import {IExtendedAppContext} from 'store/with-redux-store';
import Intro from 'components/Intro';
import Layout from 'layouts/main';
import MainIfoBlock from 'components/MainIfoBlock';
import React from 'react';
import SectionBlockLeft from 'components/SectionBlockLeft';
import SectionBlockRight from 'components/SectionBlockRight';
import {setTest} from 'store/test/actions';

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
];
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
];
const slider1 = {
	slides: ['1.jpg', '2.jpg', '3.jpg', '1.jpg', '1.jpg'],
	title: 'Venue Transformation Systems',
	btnName: 'Learn more',
	text1: 'We supply and install multipurpose hall seating\n' +
		'\t\t\t\t\t\t\ttransformation systems that are\n' +
		'\t\t\t\t\t\t\tflexible enough\n' +
		'\t\t\t\t\t\t\tto host any type of event.',
	text2: 'Gala Systems, with its Spiralift technology, is leader\n' +
		'\t\t\t\t\t\t\tin understage systems\n' +
		'\t\t\t\t\t\t\tand audience\n' +
		'\t\t\t\t\t\t\tseating transformation since 1980. It has reconfigured over 1750 multifunctional\n' +
		'\t\t\t\t\t\t\tvenues such as\n' +
		'\t\t\t\t\t\t\tconference centers, performing arts centers and event halls'

};
const slider2 = {
	slides: ['2.jpg', '2.jpg', '2.jpg', '2.jpg'],
	title: 'Retractable tribune Systems',
	btnName: 'Learn more',
	text1: 'We supply and install custom made retractable seating\n' +
		'\t\t\t\t\tsystems and fixed theater\n' +
		'\t\t\t\t\tseating for, cultural spaces, auditoriums, multifunctional halls and sports venues.',
	text2: 'Jezet Seating has been a leader in high quality telescopic\n' +
		'\t\t\t\t\ttribune design and\n' +
		'\t\t\t\t\tbleacher seating since 1973 with over 3500 projects installed worldwide'

};
const slider3 = {
	slides: ['3.jpg', '3.jpg', '3.jpg', '3.jpg'],
	title: 'Automatic vertical retractable walls',
	btnName: 'Learn more',
	text1: 'We supply and install vertical retractable folding\n' +
		'\t\t\t\t\t\t\t\t\t\twalls that increase\n' +
		'\t\t\t\t\t\t\t\t\t\tflexibility of any public venue, theater or office space. Skyfold is the operable\n' +
		'\t\t\t\t\t\t\t\t\t\twall solution\n' +
		'\t\t\t\t\t\t\t\t\t\tfor rooms that require exceptional functionality and need to make an impact on\n' +
		'\t\t\t\t\t\t\t\t\t\tvisitors\n' +
		'\t\t\t\t\t\t\t\t\t\talike.',
	text2: 'The acoustic automatic wall system is hidden in a\n' +
		'\t\t\t\t\t\t\t\t\t\tceiling void. Skyfold walls\n' +
		'\t\t\t\t\t\t\t\t\t\toffers quick venue adaptation and an aesthetic appeal.'
};
const slider4 = {
	slides: ['4.jpg', '4.jpg', '4.jpg', '4.jpg'],
	title: 'Mobile Walls',
	btnName: 'Learn more',
	text1: 'We supply and install mobile wall systems that ensure\n' +
		'\t\t\t\t\t\t\t\toptimal space efficiency in\n' +
		'\t\t\t\t\t\t\t\tboth new and existing buildings. Individual panels are suspended from, and slide along,\n' +
		'\t\t\t\t\t\t\t\tan overhead\n' +
		'\t\t\t\t\t\t\t\ttrack.',
	text2: 'Espero movable partition systems are positioned and put\n' +
		'\t\t\t\t\t\t\t\taway easily for quick\n' +
		'\t\t\t\t\t\t\t\treconfigurations and silent room separation.'
};
const slider5 = {
	slides: ['5.jpg', '5.jpg', '5.jpg', '5.jpg'],
	title: 'Movable Pool Floor Systems',
	btnName: 'Learn more',
	text1: 'We supply and install movable floors for swimming\n' +
		'\t\t\t\t\t\t\t\t\tpools. Akvo Spiralift uses a\n' +
		'\t\t\t\t\t\t\t\t\tSpiralift system to create multi purpose pool designs.',
	text2: 'We supply and install movable floors for swimming\n' +
		'\t\t\t\t\t\t\t\t\tpools. Akvo Spiralift uses a\n' +
		'\t\t\t\t\t\t\t\t\tSpiralift system to create multi purpose pool designs.\n' +
		'\t\t\t\t\t\t\t\t\tIts floor lifting platforms are suitable for swimming pools of any size and have\n' +
		'\t\t\t\t\t\t\t\t\tbeen applied in\n' +
		'\t\t\t\t\t\t\t\t\tresidential pools and commercial projects such as hotels, nightclubs and\n' +
		'\t\t\t\t\t\t\t\t\tcasino\'s.'
};
const title = 'Stroymoda';
const mainText = 'We produce, supply and install a vast range of partitions and doors for offices and public interiors. Stroymoda has been providing construction, installation and fit out services in Russia since 1994.';
const blockCenterTitle = 'Technical solutions for hall transformation';
const blockCenterText = 'In association with our international partners, we provide transport and import, project\n' +
	'\t\t\t\t\t\tdocumentation, production planning, project management, technical supervision,\n' +
	'\t\t\t\t\t\tconstruction\n' +
	'\t\t\t\t\t\tcontrol, installation, and commissioning for seating and venue transformation products\n' +
	'\t\t\t\t\t\tin\n' +
	'\t\t\t\t\t\tRussia.';


const IndexPage = () => {
	return (
		<Layout footerProps={{
			isBg: true,
			customClass: 'footer'
		}}>
			<main className={classes.main}>
				<Intro />
				<MainIfoBlock link="/about" title={title}
							  text={mainText}/>
				<BlockCenter title={blockCenterTitle} text={blockCenterText}/>
				<SectionBlockRight link="/products/detail" dotsClass="slideDotsWhite" dotsClassItem="slideLeftDotsItem" slides={slider1.slides as any} btnName={slider1.btnName} title={slider1.title}
								   text1={slider1.text1} text2={slider1.text2}/>
				<div className={classes.section_bg}>
					<SectionBlockLeft link="/products/detail_1" dotsClass="slideDotsWhite" dotsClassItem="slideLeftDotsItem" slides={slider2.slides as any} customClass="container" btnName={slider2.btnName}
									  title={slider2.title} text1={slider2.text1} text2={slider2.text2}/>
				</div>
					<SectionBlockRight link="/products/detail" dotsClass="slideDotsWhite" dotsClassItem="slideLeftDotsItem" slides={slider3.slides as any} btnName={slider3.btnName}
									   title={slider3.title} text1={slider3.text1} text2={slider3.text2}/>
				<div className={classes.section_bg}>
					<SectionBlockLeft link="/products/detail_1" dotsClass="slideDotsWhite" dotsClassItem="slideLeftDotsItem" slides={slider4.slides as any} customClass="container" btnName={slider4.btnName}
									  title={slider4.title} text1={slider4.text1} text2={slider4.text2}/>
				</div>
					<SectionBlockRight link="/products/detail" dotsClass="slideDotsWhite" dotsClassItem="slideLeftDotsItem" slides={slider5.slides as any} btnName={slider5.btnName}
									   title={slider5.title} text1={slider5.text1} text2={slider5.text2}/>
				<AdvantagesMainSection customClass="advantages" title="Advantages of transformation"
									   list={listAdvantagesTop as any} list1={listAdvantagesBottom as any}/>
			</main>
		</Layout>
	);
};

IndexPage.getInitialProps = (ctx: IExtendedAppContext) => {
	const {reduxStore} = ctx;
	// change data stare from SSR
	reduxStore.dispatch(setTest(2));
};

export default IndexPage;
