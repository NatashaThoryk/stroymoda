import AdvantagesBlock from 'components/AdvantagesBlock';
import BlockWithSliderLeft from 'components/BlockWithSliderLeft';
import BlockWidthSliderRight from 'components/BlockWithSliderRight';
import BreadCrumbs from 'components/BreadCrumbs';
import classes from 'pages/index.module.scss';
import Info from 'components/TopInfo';
import InfoContent from 'components/InfoContent';
import Layout from 'layouts/main';
import MainSliderProducts from 'components/MainSliderProducts';
import React, {useState} from 'react';
import StepList from 'components/StepList';
import Modal from 'components/Modal';

const mainTitle = 'Multipurpose hall systems';
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
];
const itemAdvantages1 = [
	{
		link: '/img/products/circle_check.svg',
		text: 'Gala Systems’ products provide infinite automated settings for audience seating configurations  and stage transformation '
	},
	{
		link: '/img/products/circle_check.svg',
		text: 'Gala Systems uses Spiralift technology, the world’s most compact venue lifting system'
	}
];
const stepList = [
	{
		number: '1.',
		title: 'Move up front elevator',
		link: '/img/products/detail/st1.svg'
	},
	{
		number: '2.',
		title: 'Rotate FRONT ELEVATOR\'S\n' +
			'\t\t\t\t\t\t\t\t\t\tSEAT UNDER FLOOR',
		link: '/img/products/detail/st2.svg'
	},
	{
		number: '3.',
		title: 'MOVE DOWN FRONT ELEVATOR',
		link: '/img/products/detail/st3.svg'
	}
];
const images = [ '/img/products/detail/st1Large.svg', '/img/products/detail/st2Large.svg', '/img/products/detail/st3Large.svg'];
const images1 = [ '/img/products/detail/st1.1Large.svg', '/img/products/detail/st1.2Large.svg', '/img/products/detail/st1.3Large.svg'];
const images2 = [ '/img/products/detail/1.svg', '/img/products/detail/2.svg', '/img/products/detail/1.svg'];
const stepList1 = [
	{
		number: '1.',
		title: 'Move up rear elevator',
		link: '/img/products/detail/st1.1.svg'
	},
	{
		number: '2.',
		title: "EXTEND SEAT'S MECHANISM OVER FRONT ELEVATOR",
		link: '/img/products/detail/st1.2.svg'
	},
	{
		number: '3.',
		title: "MOVE UP FRONT ELEVATOR TO PIN SEATS ON IT (RETRACT SEAT'S)",
		link: '/img/products/detail/st1.3.svg'
	}
];
const stepList2 = [
	{
		number: '1.',
		title: 'WAGON ON LIFT (RAILS AND SOCKETS)',
		link: '/img/products/detail/detail2.1.svg'
	},
	{
		number: '2.',
		title: "1. LOWER LIFT TO STORAGE LEVEL",
		title1: "2. MOVE WAGON TO STORAGE AREA",
		link: '/img/products/detail/detail2.2.svg'
	},
	{
		number: '3.',
		title: "RAISE LIFT TO STAGE LEVEL AND REMOVE RAILS",
		link: '/img/products/detail/detail2.3.svg'
	}
];
const checkListRight = ['Automatic or semi-automatic seat wagon system\n', 'Large tiered wagons with rows of seating are stored under the stage or adjacent audience area\n', 'All seating row geometries possible\n', 'Compatible with all audience seating manufacturers\n', 'Conversion time within 30 minutes'];
const checkListLeft = ["Stage Lift Systems", "Stage Lift", "Orchestra podiums", "Orchestra Lifts", "Turntable system"]
const InfoContentText1 = 'The Spiralift is the world its most compact lifting system. It allows hall reconfiguration by using moving floor platforms. Gala Systems solutions enables automated under the floor storage of spectators seats that are used in multi purpose halls.'
const InfoContentText2 = 'The Spiralift is used as main component in critically acclaimed platform lift  systems such as theater lifts , orchestra lifts and piano lifts . The spiralift uses two bands of intertwining stainless steel to form a strong and stable column. The Spiralift requires relative low-power electric motor drives thanks to its very high mechanical efficiency. Spiralifts are used easily in modular designs that suits any platform geometry in order to create truly flexible hall transformations.';
const slides1 = ['https://www.youtube.com/embed/XBPjVzSoepo', 'https://www.youtube.com/embed/XBPjVzSoepo', 'https://www.youtube.com/embed/XBPjVzSoepo'];
const breadCrumbs = [
	{
		text: 'Products',
		pathname: '/products',
	},{
		text: 'Venue Transformation Systems',
		pathname: '/products/detail',
	}
];

const productsDetail = () => {
	const [isModal, setIsModal] = useState(false);
	return (
		<Layout footerProps={{
			isBg: true,
			customClass: 'is_margin'
		}}>
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
					<BreadCrumbs items={breadCrumbs}/>
					<Info title="Venue Transformation Systems" link={"/img/products/galaSystems.svg"} />
				</div>
				<MainSliderProducts imageTop="/img/products/background_detail.png" imageBottom="/img/products/bg_detail_top.png"/>
				<InfoContent
					text1={InfoContentText1}
					text2={InfoContentText2}
					linkFrame={"https://www.youtube.com/embed/XBPjVzSoepo"} linkImage={"/img/products/galaSystems.svg"}/>
				<AdvantagesBlock title="Advantages" items={itemAdvantages as any} items1={itemAdvantages1 as any} />
				<div className={classes.section_slider} id={"rotation"}>
					<div className={classes.content_wrapper}>
						<h2 className={classes.title_cap}>{mainTitle}</h2>
					</div>
					<BlockWidthSliderRight customClass="padding_top" isVideo={true} slides={slides1 as any} title="Rotation system" listItem={checkListRight as any}/>
					<div className={classes.content_wrapper}>
						<StepList images={images} stepList={stepList as any} />
					</div>
				</div>
				<div className={classes.section_bg_color} id={"translation"}>
					<BlockWithSliderLeft isVideo={true} slides={slides1 as any} title="Translation system" listItem={checkListLeft as any}/>
					<div className={classes.content_wrapper}>
						<StepList images={images1} stepList={stepList1 as any}/>
					</div>
				</div>
				<div className={classes.section_slider} id={"wagon"}>
					<BlockWidthSliderRight isVideo={true} slides={slides1 as any} title="Wagon System" listItem={checkListRight as any}/>
					<div className={classes.content_wrapper}>
						<StepList images={images2} stepList={stepList2 as any}/>
					</div>
				</div>
				<div className={classes.section_bg_color} id={"stage"}>
					<BlockWithSliderLeft isVideo={true} slides={slides1 as any} title="Understage systems" listItem={checkListLeft as any}/>
				</div>
				<Modal isModal={isModal} setIsModal={setIsModal}/>
			</main>
		</Layout>
	);
};

export default productsDetail;
