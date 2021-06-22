import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import classes from "../../index.module.scss";
import classesMain from 'styles/main.module.scss';
import Slider from "components/Slider";
import Info from "components/TopInfo"
import InfoContent from "components/InfoContent"
import AdvantagesBlock from "components/AdvantagesBlock"
import StepList from "components/StepList"
import BlockWidthSliderRight from "components/BlockWithSliderRight"
import BlockWithSliderLeft from "components/BlockWithSliderLeft"


const sliderList1 = ['https://www.youtube.com/embed/XBPjVzSoepo', 'https://www.youtube.com/embed/XBPjVzSoepo'];

const itemAdvantages = [
	{
		link: '/img/products/circle_check.svg',
		text: 'Gala Systems’ products can easily be integrated, within new or existing venues.'
	},
	{
		link: '/img/products/circle_check.svg',
		text: 'Gala Systems products allow for fast venue transformation  in under 30 minutes'
	},
	{
		link: '/img/products/circle_check.svg',
		text: 'Applicable to any type of venue: Conference centers, auditoriums, theaters, concert halls, etc'
	}
]

const itemAdvantages1 = [
	{
		link: '/img/products/circle_check.svg',
		text: 'Gala Systems’ products provide infinite automated settings for audience seating configurations  and stage transformation '
	},
	{
		link: '/img/products/circle_check.svg',
		text: 'Gala Systems uses Spiralift technology, the world’s most compact venue lifting system'
	}
]

const stepList = [
	{
		number: '1.',
		title: 'Move up front elevator',
		link: '/img/products/detail/st1.png'
	},
	{
		number: '2.',
		title: 'Rotate FRONT ELEVATOR\'S\n' +
			'\t\t\t\t\t\t\t\t\t\tSEAT UNDER FLOOR',
		link: '/img/products/detail/st2.png'
	},
	{
		number: '3.',
		title: 'MOVE DOWN FRONT ELEVATOR',
		link: '/img/products/detail/st3.png'
	}
]

const stepList1 = [
	{
		number: '1.',
		title: 'Move up rear elevator',
		link: '/img/products/detail/st1.1.png'
	},
	{
		number: '2.',
		title: "EXTEND SEAT'S MECHANISM OVER FRONT ELEVATOR",
		link: '/img/products/detail/st1.2.png'
	},
	{
		number: '3.',
		title: "MOVE UP FRONT ELEVATOR TO PIN SEATS ON IT (RETRACT SEAT'S)",
		link: '/img/products/detail/st1.3.png'
	}
]

const stepList2 = [
	{
		number: '1.',
		title: 'WAGON ON LIFT (RAILS AND SOCKETS)',
		link: '/img/products/detail/detail2.1.png'
	},
	{
		number: '2.',
		title: "1. LOWER LIFT TO STORAGE LEVEL",
		title1: "2. MOVE WAGON TO STORAGE AREA",
		link: '/img/products/detail/detail2.2.png'
	},
	{
		number: '3.',
		title: "RAISE LIFT TO STAGE LEVEL AND REMOVE RAILS",
		link: '/img/products/detail/detail2.3.png'
	}
]

const checkListRight = ["Seats rotate automatically from storage position to seating position\n", "Independent moving platforms for each audience row\n", "Straight or angled seating rows\n", "Compatible with conference seating from most chair producers\n", "Conversion time within 10 minutes\n"]

const checkListLeft = ["Seats move automatically, horizontally from one row to a storage position under the adjacent row\n", "Independent moving platforms for each spectator row\n", "Used in venues with curved seating rows\n", "Compatible with auditorium chairs of most seat manufacturers\n", "Conversion time within 10 minutes\n"]

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
							   href="https://www.stroymoda.ru/eng/products/" title="Venue Transformation Systems">
								<span itemProp="name">Venue Transformation Systems</span>
								<meta itemProp="name" content="Venue Transformation Systems"/>
							</a>
							<meta itemProp="position" content="3"/>
						</li>
					</ul>
					<Info title="Venue Transformation Systems" link={'/img/products/galaSystems.svg'}/>
				</div>
				<div className={classes.full_bg_slider}>
					<div className={classes.item_slide}></div>
					<div className={classes.item_slide}></div>
				</div>
				<InfoContent
					text1={'The Spiralift is the world its most compact lifting system. It allows hall reconfiguration by using moving floor platforms. Gala Systems solutions enables automated under the floor storage of spectators seats that are used in multi purpose halls.'}
					text2={'The Spiralift is used as main component in critically acclaimed platform lift  systems such as theater lifts , orchestra lifts and piano lifts . The spiralift uses two bands of intertwining stainless steel to form a strong and stable column. The Spiralift requires relative low-power electric motor drives thanks to its very high mechanical efficiency. Spiralifts are used easily in modular designs that suits any platform geometry in order to create truly flexible hall transformations.'}
					linkFrame={'https://www.youtube.com/embed/XBPjVzSoepo'} linkImage={'/img/products/galaSystems.svg'}/>
				<AdvantagesBlock title="Advantages" items={itemAdvantages as any} items1={itemAdvantages1 as any} />
				<div className={classes.section_slider}>
					<div className={classesMain.content_wrapper}>
						<h2 className={classesMain.title_cap}>Multipurpose hall systems</h2>
					</div>
					<BlockWidthSliderRight title="Rotation system" list={checkListRight as any}/>
					<div className={classesMain.content_wrapper}>
						<StepList stepList={stepList as any} />
					</div>
				</div>
				<div className={classes.section_bg}>
					<BlockWithSliderLeft title="Translation system" list={checkListLeft as any}/>
					<div className={classes.content_wrapper}>
						<StepList stepList={stepList1 as any}/>
					</div>
				</div>
				<div className={classes.section_slider}>
					<BlockWidthSliderRight title="Rotation system" list={checkListRight as any}/>
					<div className={classes.content_wrapper}>
						<StepList stepList={stepList2 as any}/>
					</div>
				</div>
				<div className={classes.section_bg}>
					<BlockWithSliderLeft title="Translation system" list={checkListLeft as any}/>
				</div>
			</main>
			<Footer/>
		</>
	)
}
