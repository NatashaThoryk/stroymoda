import React from 'react';
import classes from './styles.module.scss';
import classesMain from "pages/index.module.scss";


export default () => {
	return (
		<div className={classes.form_wrapper}>
			<div className={classesMain.content_wrapper}>
				<h2 className={classesMain.title_cap}>Contact Us</h2>
				<p className={classes.subtitle}>We’d love help you in making your venue truly multifunctional</p>
				<form className={classes.form} action="">
					<input type="name" placeholder='Name'/>
					<input type="text" placeholder='E-mail or phone number'/>
					<input type="text" placeholder='Company or organization'/>
					<textarea>Type your message here</textarea>
					<button type="submit" className={classes.btnName}>SEND</button>
				</form>
			</div>
		</div>
	)
}
