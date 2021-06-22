import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import SustainabilityTopBlock from 'components/SustainabilityTopBlock';
import SustainabilityMainBlock from 'components/SustainabilityMainBlock';
import classes from "../index.module.scss";
import classesMain from 'styles/main.module.scss';

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
							<a className={classes.breadcrumb_active} itemProp="item"
							   href="https://www.stroymoda.ru/eng/products/" title="Sustainability">
								<span itemProp="name">Sustainability</span>
								<meta itemProp="name" content="Sustainability"/>
							</a>
							<meta itemProp="position" content="3"/>
						</li>
					</ul>
					<h2 className={classesMain.title_cap}>Sustainability</h2>
				</div>
				<SustainabilityTopBlock
					text='One of our corporate values is to be a sustainable company that positively contributes to economic, social, ecological areas and within the community field. With every new development our aim is to be as environmentally responsible as possible. We take our responsibility for the environment when deciding on wood and other raw materials, within the production processes itself and towards the choice of suppliers we work with.'/>
				<div className={classes.section_bg}>
					<div className={classesMain.content_wrapper}>
						<SustainabilityMainBlock src="/img/sustainability/breeam.svg"
												 text="BREEAM is the world's foremost environmental assessment method and rating system for buildings. It sets the standard for best practice in sustainable building design, construction and operation.  The goal is to encourage designers of buildings and interiors to think about low carbon and low impact design, minimizing the energy demands.  A BREEAM assessment evaluates a building’s specification, design, construction and use."
												 text1="BREEAM specifies the sustainability performance of buildings in a way that is quick, comprehensive and highly visible in the marketplace."/>
					</div>
				</div>
				<SustainabilityMainBlock src="/img/sustainability/lead.svg" text="Leadership in Energy & Environmental Design (LEED), was developed by the U.S Green Building Council (USGBC) and founded in 2000. The USGBC aims at sustainable building designs, construction, operations and maintenance. LEED is open, consensus-based and provides a framework for identifying 'green' solutions. LEED certificates a range of building designs, from individual buildings to homes, from schools, to healthcare and communities. With products of many of our suppliers you can add points to your total sustainability LEED score.
"
										 text1="Cradle to Cradle Certified is an internationally recognized mark that requires products and processes to be designed in an ecologically effective manner, without discarding valuable resources. In view of the growing demand for sustainable products, offering products that are C2C certified is a requirement in increasingly more building projects throughout the world. Our exclusive furniture brand Espero Mobile Walls operates with a bronze Cradle to Cradle Award."/>
				<div className={classes.section_bg}>
					<div className={classesMain.content_wrapper}>
						<SustainabilityMainBlock src="/img/sustainability/cradle.svg"
												 text="C2C encourages creating production techniques that are not just efficient but are essentially waste free. Technical nutrients can be recycled or reused with no loss of quality. Our exclusive furniture brand Espero Mobile Walls holds a bronze Cradle to Cradle Award. Espero, does it outmost to use as many environmentally friendly materials as possible, such as formaldehyde-free recyclable tabletop surfaces and pigment free paints. Sustainable materials and an optimum reuse of high quality materials are crucial requirements for obtain a C2C certificate." />
					</div>
				</div>
				<SustainabilityMainBlock src="/img/sustainability/bamboo.svg" text="In cooperation with our suppliers we are introducing Phyllostachys Pubescens bamboo as a replacement of tropical hardwood doors. Bamboo is a sustainable, aesthetic and qualitatively building material that fits customers with a focus on sustainability and an innovative character."/>
				<div className={classes.section_bg}>
					<div className={classesMain.content_wrapper}>
						<SustainabilityMainBlock src="/img/sustainability/fsc.svg"
												 text="The Forest Stewardship Council (FSC), is an international organization founded in 1993. The council stimulates sustainable forest management. FSC has been composing worldwide standards and norms, linked to certification"
						text1="FSC certified wood used by our suppliers ensures that forests from which the wood originates is socially and economically managed. Using FSC certified products assures that wood has been monitored by and independent control organization throughout the whole process."/>
					</div>
				</div>
				<SustainabilityMainBlock src="/img/sustainability/pefc.svg" text="Program for endorsement of Forest Certification (PEFC) is a worldwide non-profit, non-governmental organization which promotes sustainable forestation. The main goal of PEFC is that all forests in the world will eventually be managed responsibly. By means of certification, forest owners can prove that their forest meets the requirements of PEFC management. PEFC certified wood is used in products of many of our suppliers. "/>
			</main>
			<Footer/>
		</>
	)
}
