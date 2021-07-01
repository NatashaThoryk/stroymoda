import Footer from 'containers/Footer';
import Header from 'containers/Header';
import clsx from 'helpers/clsx';
import Head from 'next/head';
import React from 'react';
import classes from './layout.main.module.scss';
import { IProps } from './types';

const Layout: React.FunctionComponent<IProps> = (props) => {
	const { children, title, rootClassName } = props;

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta property="og:type" content="website" />
				<meta property="og:title" content='Дублируем основной title' />
				<meta property="og:url" content="Указывать абсолютный путь страницы" />
				<meta property="og:image" content="Указываем абсолютный путь ЛОГО" />
				<meta property="og:description" content='Дублируем основной description' />
				<meta property="og:locale" content="ru_RU" />
				<meta property="og:country-name" content="Россия"/>
			</Head>
			<Header />
			<div className={clsx(classes.root, rootClassName)} id="page">
				<div className={classes.content}>
					{children}
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
