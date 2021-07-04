import AdvantagesBlock from 'components/AdvantagesBlock';
import BlockWithSliderLeft from 'components/BlockWithSliderLeft';
import BlockWidthSliderRight from 'components/BlockWithSliderRight';
import BreadCrumbs from 'components/BreadCrumbs';
import classes from '../../index.module.scss';
import Info from 'components/TopInfo';
import InfoContent from 'components/InfoContent';
import Layout from 'layouts/main';
import MainSliderProducts from 'components/MainSliderProducts';
import React from 'react';
import SectionBlockLeft from 'components/SectionBlockLeft';
import SectionBlockRight from 'components/SectionBlockRight';
import toVal from '../../../helpers/clsx';

const mainTitle = 'Available systems';
const titleSection = 'Curved tribunes';
const subtitleSection = 'Jezet seating is one the telescopic tribune producers that has an extensive experience in\n' +
	'\t\t\t\t\t\t\tdesigning and manufacturing tribunes with a curved radius';
const itemAdvantages = [
	{
		link: '/img/products/circle_check.svg',
		text: 'Jezet tribunes can easily be integrated, within any new or existing  hall design'
	},
	{
		link: '/img/products/circle_check.svg',
		text: 'Quality control over full production process from design to delivery'
	},
	{
		link: '/img/products/circle_check.svg',
		text: 'Specialist in curved movable tribunes'
	},
	{
		link: '/img/products/circle_check.svg',
		text: 'All mobile tribunes are tailor made and fully test build before leaving factory'
	}
];
const itemAdvantages1 = [
	{
		link: '/img/products/circle_check.svg',
		text: 'Fully in-house produced one of a kind telescopic seating'
	},
	{
		link: '/img/products/circle_check.svg',
		text: 'Specialized in technical solutions for challenging hall lay outs'
	},
	{
		link: '/img/products/circle_check.svg',
		text: 'Lean production times that are cost efficient'
	},
	{
		link: '/img/products/circle_check.svg',
		text: 'Custom made armchair production for any type of venue: Arena’s, cultural spaces, theaters, sport stadiums etc'
	}
];
const checkListRight = ['Electrical horizontal moving straight tribunes\n', 'Tailor made tribune design \n', 'Operable by one push of a button\n', 'Manual of automatic armchair folding system\n', 'Manual of automatic armchair folding system\n', 'Use of closed metal profiles to increase stability of t he tribune base \n', 'Welded platforms for chairs to increase stability of the tribune structure\n', 'Minimum amount of bolts and nuts are used in the tribune production \n'];
const checkListLeft = ['Symmetric look when the tribune is in closed position\n', 'Tightest radius possible for this type of tribune is 5 meters\n', 'Round tribunes with 180 degree radius possible\n', 'Platform width reduces in size from back to front\n'];
const checkListRight1 = ["Asymmetric look when the tribune is in closed position\n", "Requires intensive engineering and a longer production time\n"]
const slides1 = ['detail_1.jpg', 'detail_1.jpg', 'detail_1.jpg', 'detail_1.jpg'];
const slides2 = ['2.jpg', '2.jpg', '2.jpg', '2jpg'];
const slides3 = ['4.jpg', '4.jpg', '4jpg', '4jpg'];
const slides4 = ['popUp.jpg', 'popUp.jpg', 'popUp.jpg', 'popUp.jpg'];
const slides5 = ['public.jpg', 'public.jpg', 'public.jpg', 'public.jpg'];

const breadCrumbs = [
	{
		text: 'Products',
		pathname: '/products',
	},{
		text: 'Retractable Tribune Systems',
		pathname: '/products/detail_1',
	}
];


const productsDetail_1 = () => {
	return (
		<Layout footerProps={{
			isBg: true,
			customClass: 'is_margin'
		}}>
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
					<BreadCrumbs items={breadCrumbs}/>
					<Info title="Telescopic tribunes" link={"/img/products/jezet.svg"}/>
				</div>
				<MainSliderProducts imageTop="/img/products/background_detail.png" imageBottom="/img/products/bg_detail_top.png"/>
				<InfoContent
					text1={"Tribunes for spectators that are fully designed and produced in house by Jezet Seating. Each retractable tribune system is custom made and unique to the venue. Excellent stability of the tribune structure is assured by welded spectators platforms and usage of closed metal profiles only. The full tribune system is operated by a handheld control unit with a single point of entry."}
					linkFrame={"https://www.youtube.com/embed/XBPjVzSoepo"}
					linkImage={"/img/products/jezet.svg"}/>
				<AdvantagesBlock title="Advantages" items={itemAdvantages as any} items1={itemAdvantages1 as any}/>
				<div className={classes.section_slider}>
					<div className={classes.content_wrapper}>
						<h2 className={classes.title_cap}>{mainTitle}</h2>
					</div>
					<BlockWidthSliderRight dotsClass="slideRightDots"  dotsClassItem= "slideRightDotsItem" customClass="padding_top" slides={slides1 as any} title="Straight tribunes" listItem={checkListRight as any}/>
				</div>
				<div className={toVal(classes.section_bg, classes.section_slider)}>
					<div className={classes.content_wrapper}>
						<h3 className={classes.title}>{titleSection}</h3>
						<p className={classes.subtitle}>{subtitleSection}</p>
					</div>
					<BlockWithSliderLeft slides={slides2 as any} title="Constant curved tribunes" listItem={checkListLeft as any}/>
				</div>
				<div className={classes.section_slider}>
					<BlockWidthSliderRight slides={slides3 as any} title="Concentric curved tribunes" listItem={checkListRight1 as any}/>
				</div>
				<div className={classes.section_bg}>
					<SectionBlockLeft link="/products/1/2/title" slides={slides4 as any} customClass="container" btnName="Learn more" title="Pop Up seating" text1="Pop up seating is available for floor integration and for integration on retractable platforms . It creates a flat floor configuration or a flexible tribune that transforms from a pop up seating system into a rigid bleacher."/>
				</div>
					<SectionBlockRight link="/products/1/2/id" slides={slides5 as any} btnName="View all" title="Armchairs for halls and public venues" text1="Jezet seats are used as theater armchair conference armchair and auditorium armchair. All models are available as fixed armchair and retractable armchair system for telescopic tribunes"/>
			</main>
		</Layout>
	);
};

export default productsDetail_1;
