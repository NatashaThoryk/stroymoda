import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import classes from '../index.module.scss';
import NewsImageBlock from "components/NewsImageBlock";
import TextSection from "components/TextSection";
import Button from "components/Button";
import AdvantagesMainSection from "components/AdvantagesMainSection";
import PartnersSection from "components/PartnersSection";
import SliderLogo from "components/LogoSlider";
import CharitySection from "components/CharitySection";
import SectionBlockLeft from "components/SectionBlockLeft";
import BreadCrumbs from "components/BreadCrumbs";

const listAdvantagesTop = [
	{
		src: '/img/001.svg',
		text: 'An Individual approach and a dedicated project management team allows for a smooth integration of technical solutions while maintaining a high level of service.'
	},
	{
		src: '/img/003.svg',
		text: 'During project execution our aim is to act environmentally aware and responsible throughout the process.'
	}
]
const listAdvantagesBottom = [
	{
		src: '/img/002.svg',
		text: 'Upon the start of a project we offer full design and technical support throughout each stage of project implementation.'
	},
	{
		src: '/img/004.svg',
		text: 'We consciously decide on building materials used and find suppliers that comply with and share our working ethos.'
	}
]
const listPartners = [
	{
		src: '/img/products/galaSystems.svg'
	}, {
		src: '/img/products/jezet.svg'
	}, {
		src: '/img/products/skyfold.svg'
	}, {
		src: '/img/products/mobilewalls.svg'
	}, {
		src: '/img/products/poolfloor.svg'
	}
]
const titleSection1 = "Stroymoda has been a household name in the fit out of construction projects in Russia for over 25 year.\n" +
	"In our lengthy history we generated a solid track record and an extensive client portfolio."
const textSection1 = "Having our own manufacturing plants for doors and partitions (1997) gives us the flexibility to offer project specific solutions for fulfilling most client’s wishes. An Individual approach and a dedicated project management team allows for a smooth integration of technical solutions while maintaining a high level of service. Upon the start of a project we offer full design and technical support throughout each stage of project implementation. During project execution our aim is to act environmentally aware and responsible throughout the process. We consciously decide on building materials used and find suppliers that comply with and share our working ethos.\n"
const titleSection2 = "International partners"
const textSection2 = "In 2015 Stroymoda joined forces with several international partners active in the field of automated venue transformation.\n" +
	" Stroymoda has since then implemented complex technical stage and audience solutions into several highbrow public event spaces throughout Russia. As transformation specialist our goal is to convert large static spectator halls into efficient multipurpose spaces allowing a building to become more flexible, usable and profitable. "
const AdvantagesTitle = "Advantages Of working With Stroymoda"
const charityList = [
	{
		img: '/img/about/bobby.jpg',
		title: 'Bobby Moore Fund',
		desc: 'Helps raise awareness and funds for research into bowel cancer.'
	}, {
		img: '/img/about/brothers.jpg',
		title: 'Big Brothers Big Sisters',
		desc: 'One of the most effective mentoring programs by adults aimed at children in difficult life situations.'
	}, {
		img: '/img/about/downside.jpg',
		title: 'Downside Up',
		desc: 'Russian non-profit organization that provides support and advice for families raising children with down syndrome.'
	}, {
		img: '/img/about/kika.jpg',
		title: 'Kika',
		desc: 'Acquires funding for research devoted to childhood cancer.'
	}
]
const slider1 = {
	slides: ['about_slider2.jpg', 'about_slider3.jpg', 'about_slider4.jpg', 'about_slider5.jpg'],
	title: 'Olympic sponsorship',
	text1: 'Stroymoda has participated in facilitating the Russian sailing team (class 470) at the Olympic Games in Beijing 2008 & London 2012.'
}
const listLogo = [
	{
		img: '/img/logoSlider/1.svg'
	},{
		img: '/img/logoSlider/2.svg'
	},{
		img: '/img/logoSlider/3.svg'
	},{
		img: '/img/logoSlider/4.svg'
	},{
		img: '/img/logoSlider/5.svg'
	},{
		img: '/img/logoSlider/6.svg'
	},{
		img: '/img/logoSlider/7.svg'
	},{
		img: '/img/logoSlider/8.svg'
	}, {
		img: '/img/logoSlider/9.svg'
	},{
		img: '/img/logoSlider/2.svg'
	}
]
export default () => {

	return (
		<>
			<Header/>
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
					<BreadCrumbs />
					<h2 className={classes.title_cap}>About Stroymoda</h2>
					<NewsImageBlock src='/img/aboutMain.png'/>
					<TextSection customClass='about_wrap' title={titleSection1} text={textSection1}/>
					<Button link='/projects' customClass='center' btnName="View projects"/>
				</div>
				<div className={classes.section_bg}>
					<div className={classes.padding_wrap}>
						<div className={classes.content_wrapper}>
							<TextSection customClass='partners_wrap' title={titleSection2} text={textSection2}/>
							<Button link='/products' customClass='center' btnName="Learn more"/>
						</div>
					</div>
					<PartnersSection img={listPartners as any}/>
				</div>
				<AdvantagesMainSection customClass='about_wrap' title={AdvantagesTitle} list={listAdvantagesTop as any}
									   list1={listAdvantagesBottom as any}/>
				<div className={classes.section_bg}>
					<div className={classes.padding_wrap}>
						<CharitySection list={charityList as any}/>
					</div>
				</div>
				<SectionBlockLeft slides={slider1.slides as any} customClass="about_wrapper" title={slider1.title}
								  text1={slider1.text1}/>
				<SliderLogo list={listLogo as any} title='Trusted by'/>
			</main>
			<Footer isLogo={false} isBg={false} customClass="is_margin"/>
		</>
	)
}
