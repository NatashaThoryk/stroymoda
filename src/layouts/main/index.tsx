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
