import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ContactList from 'components/ContactList';
import Map from 'components/Map';
import ContactForm from 'components/ContactForm';
import BreadCrumbs from 'components/BreadCrumbs';
import classes from "../index.module.scss";
import classesMain from "pages/index.module.scss";


const title = 'We’d love to hear from you'
const contactsTitle1 = 'Stroymoda Mosow'
const contactPlace1 = '127473 Russia, Moscow, 16/1, Krasnoproletarskaya Street'
const contactsMail1 = 'moscow@stroymoda.ru'
const contactPhone1 = '+7 (495) 246-57-41'
const contactHrefPhone1 = 'tel:+7495465741'
const contactHrefMail1 = 'mailto:moscow@stroymoda.ru'
const mapImage = '/img/map.jpg'

const contactsTitle2 = 'Stroymoda Saint Petersburg'
const contactPlace2 = '199406 Russia, Saint-Petersburg Nalichnaya street, 22'
const contactsMail2 = 'office@stroymoda.ru'
const contactPhone2 = '+7 (812) 438-80-03'
const contactHrefPhone2 = 'tel:+78124388003'
const contactHrefMail2 = 'mailto:office@stroymoda.ru'


export default () => {

	return (
		<>
			<Header/>
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
					<BreadCrumbs/>
					<h2 className={classesMain.title_cap}>{title}</h2>
				</div>
				<ContactList title={contactsTitle1} place={contactPlace1} mail={contactsMail1} phone={contactPhone1}
							 hrefPhone={contactHrefPhone1} hrefMail={contactHrefMail1}/>
				<Map src={mapImage}/>
				<div className={classes.section_bg}>
					<div className={classes.paddingBtm}>
						<ContactList title={contactsTitle2} place={contactPlace2} mail={contactsMail2}
									 phone={contactPhone2} hrefPhone={contactHrefPhone2} hrefMail={contactHrefMail2}/>
						<Map src={mapImage}/>
					</div>
				</div>
				<ContactForm/>
			</main>
			<Footer isBg={false} customClass="is_margin"/>
		</>
	)
}
