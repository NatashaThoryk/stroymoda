import classes from './styles.module.scss';
import classesMain from 'pages/index.module.scss';
import React from 'react';


const ContactList = ({title = '', place = '', mail = '',hrefMail = '', phone = '', hrefPhone = ''}) => {
	return (
		<div className={classesMain.content_wrapper}>
			<h2 className={classes.title_cap}>{title}</h2>
			<div className={classes.list}>
				<div className={classes.item}>
					<img src="/img/loc.svg" alt="icon"/>
					<p className={classes.street}>{place}</p>
				</div>
				<div className={classes.item}>
					<img src="/img/message.svg" alt="icon"/>
					<p><a href={hrefMail}>{mail}</a></p>
				</div>
				<div className={classes.item}>
					<img src="/img/phonee.svg" alt="icon"/>
					<p><a href={hrefPhone}>{phone}</a></p>
				</div>
			</div>
		</div>
	)
};

export default ContactList;
