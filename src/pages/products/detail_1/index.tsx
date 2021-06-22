import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import classes from "../../index.module.scss";
import classesMain from "styles/main.module.scss";
import Info from "components/TopInfo"
import InfoContent from "components/InfoContent"
import AdvantagesBlock from "components/AdvantagesBlock"
import StepList from "components/StepList"
import BlockWidthSliderRight from "components/BlockWithSliderRight"
import BlockWithSliderLeft from "components/BlockWithSliderLeft"
import SectionBlockLeft from "components/SectionBlockLeft"
import SectionBlockRight from "components/SectionBlockRight"
import toVal from "../../../helpers/clsx";

const sliderList1 = ['https://www.youtube.com/embed/XBPjVzSoepo', 'https://www.youtube.com/embed/XBPjVzSoepo'];

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
]

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
]

const checkListRight = ["Electrical horizontal moving straight tribunes\n", "Tailor made tribune design \n", "Operable by one push of a button\n", "Manual of automatic armchair folding system\n", "Manual of automatic armchair folding system\n", "Use of closed metal profiles to increase stability of t he tribune base \n", "Welded platforms for chairs to increase stability of the tribune structure\n", "Minimum amount of bolts and nuts are used in the tribune production \n"]

const checkListLeft = ["Symmetric look when the tribune is in closed position\n", "Tightest radius possible for this type of tribune is 5 meters\n", "Round tribunes with 180 degree radius possible\n", "Platform width reduces in size from back to front\n"]

const checkListRight1 = ["Asymmetric look when the tribune is in closed position\n", "Requires intensive engineering and a longer production time\n"]

export default () => {
	return (
		<>
			<Header/>
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
					<ul className={classes.breadcrumb_nav} itemScope itemType="http://schema.org/BreadcrumbList">
						<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
							<a itemProp="item" href="https://www.stroymoda.ru/eng/" title="home">
								<span itemProp="name">Home</span>
								<meta itemProp="name" content="home"/>
							</a>
							<meta itemProp="position" content="1"/>
						</li>
						<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
							<a itemProp="item" href="https://www.stroymoda.ru/eng/products/" title="Products">
								<span itemProp="name">Products</span>
								<meta itemProp="name" content="Products"/>
							</a>
							<meta itemProp="position" content="2"/>
						</li>
						<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
							<a className={classes.breadcrumb_active} itemProp="item"
							   href="https://www.stroymoda.ru/eng/products/" title="Retractable Tribune Systems">
								<span itemProp="name">Venue Transformation Systems</span>
								<meta itemProp="name" content="Retractable Tribune Systems"/>
							</a>
							<meta itemProp="position" content="3"/>
						</li>
					</ul>
					<Info title="Telescopic tribunes" link={'/img/products/jezet.svg'}/>
				</div>
				<div className={classes.full_bg_slider}>
					<div className={classes.item_slide}></div>
					<div className={classes.item_slide}></div>
				</div>
				<InfoContent
					text1={'Tribunes for spectators that are fully designed and produced in house by Jezet Seating. Each retractable tribune system is custom made and unique to the venue. Excellent stability of the tribune structure is assured by welded spectators platforms and usage of closed metal profiles only. The full tribune system is operated by a handheld control unit with a single point of entry.'}
					linkFrame={'https://www.youtube.com/embed/XBPjVzSoepo'}
					linkImage={'/img/products/jezet.svg'}/>
				<AdvantagesBlock title="Advantages" items={itemAdvantages as any} items1={itemAdvantages1 as any}/>
				<div className={classes.section_slider}>
					<div className={classesMain.content_wrapper}>
						<h2 className={classesMain.title_cap}>Available systems</h2>
					</div>
					<BlockWidthSliderRight title="Straight tribunes" list={checkListRight as any}/>
				</div>
				<div className={toVal(classes.section_bg, classes.tex_section)}>
					<div className={classesMain.content_wrapper}>
						<h3 className={classesMain.title}>Curved tribunes</h3>
						<p className={classes.subtitle}>Jezet seating is one the telescopic tribune producers that has an extensive experience in
							designing and manufacturing tribunes with a curved radius</p>
					</div>
					<BlockWithSliderLeft title="Constant curved tribunes" list={checkListLeft as any}/>
				</div>
				<div className={classes.section_slider}>
					<BlockWidthSliderRight title="Concentric curved tribunes" list={checkListRight1 as any}/>
				</div>
				<div className={classes.section_bg}>
					<SectionBlockLeft customClass="container" btnName="Learn more" title="Pop Up seating" text1="Pop up seating is available for floor integration and for integration on retractable platforms . It creates a flat floor configuration or a flexible tribune that transforms from a pop up seating system into a rigid bleacher."/>
				</div>
				<div className={classes.tex_section}>
					<SectionBlockRight btnName="View all" title="Armchairs for halls and public venues" text1="Jezet seats are used as theater armchair conference armchair and auditorium armchair. All models are available as fixed armchair and retractable armchair system for telescopic tribunes"/>
				</div>
			</main>
			<Footer/>
		</>
	)
}
