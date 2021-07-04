import BreadCrumbs from 'components/BreadCrumbs';
import classes from '../index.module.scss';
import classesMain from 'pages/index.module.scss';
import Layout from 'layouts/main';
import React from 'react';
import SustainabilityTopBlock from 'components/SustainabilityTopBlock';
import SustainabilityMainBlock from 'components/SustainabilityMainBlock';
import toVal from '../../helpers/clsx';


const title = 'Sustainability';
const topInfo = {
	text: 'One of our corporate values is to be a sustainable company that positively contributes to economic, social, ecological areas and within the community field. With every new development our aim is to be as environmentally responsible as possible. We take our responsibility for the environment when deciding on wood and other raw materials, within the production processes itself and towards the choice of suppliers we work with.',
	customClass: 'top_wrap'
};
const mainBlock1 = {
	src: '/img/sustainability/breeam.svg',
	text: 'BREEAM is the world\'s foremost environmental assessment method and rating system for buildings. It sets the standard for best practice in sustainable building design, construction and operation.  The goal is to encourage designers of buildings and interiors to think about low carbon and low impact design, minimizing the energy demands.  A BREEAM assessment evaluates a building’s specification, design, construction and use.',
	text1: 'BREEAM specifies the sustainability performance of buildings in a way that is quick, comprehensive and highly visible in the marketplace.'
};
const mainBlock2 = {
	src: '/img/sustainability/lead.svg',
	text: 'Leadership in Energy & Environmental Design (LEED), was developed by the U.S Green Building Council (USGBC) and founded in 2000. The USGBC aims at sustainable building designs, construction, operations and maintenance. LEED is open, consensus-based and provides a framework for identifying \'green\' solutions. LEED certificates a range of building designs, from individual buildings to homes, from schools, to healthcare and communities. With products of many of our suppliers you can add points to your total sustainability LEED score.',
	text1: 'Cradle to Cradle Certified is an internationally recognized mark that requires products and processes to be designed in an ecologically effective manner, without discarding valuable resources. In view of the growing demand for sustainable products, offering products that are C2C certified is a requirement in increasingly more building projects throughout the world. Our exclusive furniture brand Espero Mobile Walls operates with a bronze Cradle to Cradle Award.'
};
const mainBlock3 = {
	src: '/img/sustainability/cradle.svg',
	text: 'C2C encourages creating production techniques that are not just efficient but are essentially waste free. Technical nutrients can be recycled or reused with no loss of quality. Our exclusive furniture brand Espero Mobile Walls holds a bronze Cradle to Cradle Award. Espero, does it outmost to use as many environmentally friendly materials as possible, such as formaldehyde-free recyclable tabletop surfaces and pigment free paints. Sustainable materials and an optimum reuse of high quality materials are crucial requirements for obtain a C2C certificate.'
};
const mainBlock4 = {
	src: '/img/sustainability/bamboo.svg',
	text: 'In cooperation with our suppliers we are introducing Phyllostachys Pubescens bamboo as a replacement of tropical hardwood doors. Bamboo is a sustainable, aesthetic and qualitatively building material that fits customers with a focus on sustainability and an innovative character.'
};
const mainBlock5 = {
	src: '/img/sustainability/fsc.svg',
	text: 'The Forest Stewardship Council (FSC), is an international organization founded in 1993. The council stimulates sustainable forest management. FSC has been composing worldwide standards and norms, linked to certification',
	text1: 'FSC certified wood used by our suppliers ensures that forests from which the wood originates is socially and economically managed. Using FSC certified products assures that wood has been monitored by and independent control organization throughout the whole process.'
};
const mainBlock6 = {
	src: '/img/sustainability/pefc.svg',
	text: 'Program for endorsement of Forest Certification (PEFC) is a worldwide non-profit, non-governmental organization which promotes sustainable forestation. The main goal of PEFC is that all forests in the world will eventually be managed responsibly. By means of certification, forest owners can prove that their forest meets the requirements of PEFC management. PEFC certified wood is used in products of many of our suppliers.'
};
const breadCrumbs = [
	{
		text: 'Sustainability',
		pathname: '/sustainability',
	}
];

const Sustainability = () => {

	return (
		<Layout footerProps={{
			isBg: true,
			customClass: 'footer'
		}}>
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
					<BreadCrumbs items={breadCrumbs}/>
					<h2 className={classes.title_cap}>{title}</h2>
				</div>
				<SustainabilityTopBlock
					customClass={topInfo.customClass}
					text={topInfo.text} />
				<div className={classes.section_bg_color}>
					<div className={classesMain.content_wrapper}>
						<SustainabilityMainBlock src={mainBlock1.src}
												 text={mainBlock1.text}
												 text1={mainBlock1.text1}/>
					</div>
				</div>
				<SustainabilityMainBlock src={mainBlock2.src} text={mainBlock2.text}
										 text1={mainBlock2.text1}/>
				<div className={classes.section_bg_color}>
					<div className={classesMain.content_wrapper}>
						<SustainabilityMainBlock src={mainBlock3.src} text={mainBlock3.text} />
					</div>
				</div>
				<SustainabilityMainBlock src={mainBlock4.src}
										 text={mainBlock4.text}/>
				<div className={toVal(classes.section_bg_color, classes.paddingBtm)}>
					<div className={classesMain.content_wrapper}>
						<SustainabilityMainBlock src={mainBlock5.src}
												 text={mainBlock5.text}
												 text1={mainBlock5.text1} />
					</div>
				</div>
				<SustainabilityMainBlock src={mainBlock6.src}
										 text={mainBlock6.text} />
			</main>
		</Layout>
	)
};


export default Sustainability;
