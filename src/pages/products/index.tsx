import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import classes from "../index.module.scss";
import toVal from "../../helpers/clsx";
import ImgBlock from 'components/ImgBlock';


const imgBlock1 = [
	{
		title: 'Rotation system',
		link: '#',
		logo: '/img/products/Rotation_system.jpg'
	},{
		title: 'Translation system',
		link: '#',
		logo: '/img/products/Translation_system.jpg'
	},{
		title: 'Wagon system',
		link: '#',
		logo: '/img/products/Wagon_system.jpg'
	},{
		title: 'Under stage systems',
		link: '#',
		logo: '/img/products/Under_stage_systems.jpg'
	},
]
const imgBlock2 = [
	{
		title: 'Straight tribunes',
		link: '#',
		logo: '/img/products/Straight_tribunes.jpg'
	},{
		title: 'Constant curved tribunes',
		link: '#',
		logo: '/img/products/Constant_curved_tribunes.jpg'
	},{
		title: 'Concentric curved tribunes',
		link: '#',
		logo: '/img/products/concentric.jpg'
	},{
		title: 'Pop up seating',
		link: '#',
		logo: '/img/products/pop_up_seating.jpg'
	},{
		title: 'Seat models',
		link: '#',
		logo: '/img/products/Seat_models.jpg'
	},
]
const imgBlock3 = [
	{
		title: 'Zenith premium',
		link: '#',
		logo: '/img/products/Zenith_Premium.jpg'
	},{
		title: 'Zenith',
		link: '#',
		logo: '/img/products/Zenith.jpg'
	},{
		title: 'Classic',
		link: '#',
		logo: '/img/products/Classic.jpg'
	},{
		title: 'Mirage',
		link: '#',
		logo: '/img/products/Mirage.jpg'
	},
]
const imgBlock4 = [
	{
		title: 'Sonico',
		link: '#',
		logo: '/img/products/Sonico.jpg'
	},{
		title: 'Visio',
		link: '#',
		logo: '/img/products/Visio.jpg'
	},{
		title: 'Visio 100',
		link: '#',
		logo: '/img/products/Visio_101.jpg'
	},{
		title: 'Lumio',
		link: '#',
		logo: '/img/products/Lumio.jpg'
	},{
		title: 'Flexio',
		link: '#',
		logo: '/img/products/Flexio.jpg'
	},
]
const imgBlock5 = [
	{
		title: 'Residential pools',
		link: '#',
		logo: '/img/products/Residential_pools.jpg'
	},{
		title: 'Commercial pools',
		link: '#',
		logo: '/img/products/Commercial_pools.jpg'
	},
]
const imgBlock6 = [
	{
		title: 'Express 2',
		link: '#',
		logo: '/img/products/partitions/Express2_1.jpg'
	},{
		title: 'Glassline single',
		link: '#',
		logo: '/img/products/partitions/Glassline.jpg'
	},{
		title: 'Glassline double',
		link: '#',
		logo: '/img/products/partitions/O_Glassline_Double.jpg'
	},{
		title: 'Uni 1 single',
		link: '#',
		logo: '/img/products/partitions/Uni_1_Single\'1.jpg'
	},{
		title: 'Uni 2 double',
		link: '#',
		logo: '/img/products/partitions/O_Uni 2_Double.jpg'
	},{
		title: 'Fineline',
		link: '#',
		logo: '/img/products/partitions/O_Fineline.jpg'
	}
]
const imgBlock7 = [
	{
		title: 'Full glazed doors in frame',
		link: '#',
		logo: '/img/products/partitions/Full_glazed.jpg'
	},{
		title: 'Full glazed doors without frame',
		link: '#',
		logo: '/img/products/partitions/Full_glazed_without.jpg'
	},{
		title: 'Full glazed sliding doors',
		link: '#',
		logo: '/img/products/partitions/Full_glazed_sliding.jpg'
	},{
		title: 'Fineline 40',
		link: '#',
		logo: '/img/products/partitions/Fineline40.jpg'
	},{
		title: 'Fineline 58',
		link: '#',
		logo: '/img/products/partitions/Full1.jpg'
	},{
		title: 'Fineline 82',
		link: '#',
		logo: '/img/products/partitions/Fineline_82.jpg'
	},{
		title: 'Fineline 1',
		link: '#',
		logo: '/img/products/partitions/Uni_door_1.jpg'
	},{
		title: 'Fineline 2',
		link: '#',
		logo: '/img/products/partitions/Uni_door_2.jpg'
	},{
		title: 'Fire resistant glass doors',
		link: '#',
		logo: '/img/products/partitions/G_Fire_resistant.jpg'
	}
]
const imgBlock8 = [
	{
		title: 'Solid doors in partitions',
		link: '#',
		logo: '/img/products/partitions/S_doors_in_Partitions.jpg'
	},
	{
		title: 'Solid doors in structural openings',
		link: '#',
		logo: '/img/products/partitions/S_doorsinstructural_openings.jpg'
	},{
		title: 'Fire resistant solid doors',
		link: '#',
		logo: '/img/products/partitions/S_Fire_solid_doors.jpg'
	},
]
const imgBlock9 = [
	{
		title: 'Welcome area ',
		link: '#',
		logo: '/img/products/partitions/Cladding11.jpg'
	},
	{
		title: 'Working area',
		link: '#',
		logo: '/img/products/partitions/Working_area.jpg'
	},{
		title: 'Meeting area',
		link: '#',
		logo: '/img/products/partitions/Meeting_area.jpg'
	},{
		title: 'Eating area',
		link: '#',
		logo: '/img/products/partitions/Eating_area.jpg'
	},{
		title: 'Storage',
		link: '#',
		logo: '/img/products/partitions/Storage.jpg'
	},
]
const imgBlock10 = [
	{
		title: 'Wall and column cladding',
		link: '#',
		logo: '/img/products/partitions/M_Column_cladding.jpg'
	},{
		title: 'Smart glass',
		link: '#',
		logo: '/img/products/partitions/Smart_glass.jpg'
	},{
		title: 'Shop facade',
		link: '#',
		logo: '/img/products/partitions/M_Shopfacades.jpg'
	},{
		title: 'Staircase and ballustrades',
		link: '#',
		logo: '/img/products/partitions/M_Staircase_and_balustrades.jpg'
	},{
		title: 'Decorative ceilings',
		link: '#',
		logo: '/img/products/partitions/M_Decorative_ceilings.jpg'
	},
]

export default () => {

	return (
		<>
			<Header />
			<main className={toVal(classes.main, classes.main_wrapper)}>
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
							<a className={classes.breadcrumb_active} itemProp="item" href="https://www.stroymoda.ru/eng/products/" title="Products">
								<span itemProp="name">Products</span>
								<meta itemProp="name" content="Products"/>
							</a>
							<meta itemProp="position" content="2"/>
						</li>
					</ul>
					<h2 className={classes.title_cap}>Transformation Systems</h2>
					<div className={classes.main_list}>
						<div className={toVal(classes.in_list, classes.top_list)}>
							<ImgBlock links={imgBlock1} title="Venue Transformation Systems" logo={'/img/products/galaSystems.svg'} img={'/img/slider/1.jpg'} />
							<ImgBlock links={imgBlock2} title="Retractable Tribune Systems" logo={'/img/products/jezet.svg'} img={'/img/slider/2.jpg'} />
							<ImgBlock links={imgBlock3} title="Automatic Vertical Retractable Walls" logo={'/img/products/skyfold.svg'} img={'/img/slider/3.jpg'} />
						</div>
						<div className={classes.in_list}>
							<ImgBlock links={imgBlock4} title="Mobile Walls" logo={'/img/products/mobilewalls.svg'} img={'/img/slider/4.jpg'} />
							<ImgBlock links={imgBlock5} title="Movable Pool Floor Systems " logo={'/img/products/poolfloor.svg'} img={'/img/slider/5.jpg'} />
						</div>
					</div>
					<h2 className={classes.title_cap}>Partitions and Doors</h2>
					<div className={classes.main_list}>
						<div className={toVal(classes.in_list, classes.top_list)}>
							<ImgBlock links={imgBlock6} title="Office partitions" logo={'/img/Logo.svg'} img={'/img/products/office.jpg'} />
							<ImgBlock links={imgBlock7} title="Glass Doors" logo="/img/Logo.svg" img={'/img/products/doors.jpg'}/>
							<ImgBlock links={imgBlock8} title="Solid doors" logo="/img/Logo.svg" img={'/img/products/solid_dors.jpg'}/>
						</div>
						<div className={toVal(classes.in_list, classes.bottom_list)}>
							<ImgBlock links={imgBlock9} title="Office Furniture" logo={'/img/Logo.svg'} img={'/img/products/furniture.jpg'} />
							<ImgBlock links={imgBlock10} title="Miscellaneous" logo="/img/Logo.svg" img={'/img/products/miscellaneous.jpg'}/>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}
