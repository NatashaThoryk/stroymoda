import { isBrowser, isNode } from 'browser-or-node';
import AppContextProvider from 'context/App';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore, { IInitialProps, Store } from 'store/with-redux-store';

interface IProps extends AppProps {
	reduxStore: Store;
	userAgent: string;
}

function App(props: IProps) {
	const { Component, pageProps, reduxStore, userAgent } = props;

	return (
		<>
			<Head>
				<link rel="stylesheet" href="/css/styles.css" />
			</Head>
			<Provider store={reduxStore}>
				<AppContextProvider userAgent={userAgent || ''}>
					<Component {...pageProps} />
				</AppContextProvider>
			</Provider>
		</>
	);
}

App.getInitialProps = async ({ ctx, Component }: IInitialProps) => {
	let userAgent = '';
	if (isBrowser) {
		userAgent = navigator.userAgent;
	} else if (isNode && ctx.req) {
		userAgent = ctx.req.headers['user-agent'] || '';
	}

	return {
		pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
		userAgent,
	};
};

export default withReduxStore(App);
