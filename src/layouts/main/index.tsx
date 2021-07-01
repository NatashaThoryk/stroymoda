import Footer from 'components/Footer';
import Header from 'components/Header';
import clsx from 'helpers/clsx';
import Head from 'next/head';
import React from 'react';
import classes from './layout.main.module.scss';
import { IProps } from './types';

const Layout: React.FunctionComponent<IProps> = (props) => {
	const { children, title, mainClassName, footerProps = {} } = props;

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Дублируем основной title" />
				<meta property="og:url" content="Указывать абсолютный путь страницы" />
				<meta property="og:image" content="Указываем абсолютный путь ЛОГО" />
				<meta property="og:description" content="Дублируем основной description" />
				<meta property="og:locale" content="ru_RU" />
				<meta property="og:country-name" content="Россия"/>
			</Head>
			<Header />
			<main className={clsx(classes.main, mainClassName)}>
				{children}
			</main>
			<Footer {...footerProps} />
		</>
	);
};

export default Layout;
