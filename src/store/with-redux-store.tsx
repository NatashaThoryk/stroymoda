import { isNode } from 'browser-or-node';
import { NextPageContext } from 'next';
import { AppContext } from 'next/app';
import React from 'react';
import { Dispatch } from 'redux';
import { initializeStore } from './init';

declare global {
	/* tslint:disable:interface-name */
	interface Window {
		__NEXT_REDUX_STORE__: any;
	}
	/* tslint:enable:interface-name */
}

const getOrCreateStore = (initialState = {}) => {
	if (isNode) {
		return initializeStore(initialState);
	}

	if (!window.__NEXT_REDUX_STORE__) {
		window.__NEXT_REDUX_STORE__ = initializeStore(initialState);
	}
	return window.__NEXT_REDUX_STORE__;
};

export type Store = ReturnType<typeof getOrCreateStore>;

interface IProps {
	reduxStore: Store;
	initialReduxState: Store;
}

export interface IExtendedAppContext extends NextPageContext {
	reduxStore: Store;
}

export interface IInitialProps extends AppContext {
	ctx: IExtendedAppContext;
}

const withReduxStore = (Component: any) => {
	return class Redux extends React.Component<IProps> {
		public static async getInitialProps(appContext: IInitialProps) {
			const reduxStore = getOrCreateStore();
			appContext.ctx.reduxStore = reduxStore;

			let appProps = {};
			if (Component.getInitialProps) {
				appProps = await Component.getInitialProps(appContext);
			}

			return {
				...appProps,
				initialReduxState: reduxStore.getState(),
			};
		}

		private reduxStore: Store;

		constructor(props: IProps) {
			super(props);
			this.reduxStore = getOrCreateStore(props.initialReduxState);
		}

		public render() {
			return <Component {...this.props} reduxStore={this.reduxStore} />;
		}
	};
};

export default withReduxStore;

export const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export type Dispatchable<P> = P & ReturnType<typeof mapDispatchToProps>;
