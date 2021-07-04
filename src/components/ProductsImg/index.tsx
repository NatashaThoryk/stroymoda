import classes from './productsImg.module.scss';
import { IProps } from './types';
import Link from 'next/link'
import React from 'react';

const ProductsImg: React.FC<IProps> = ({title = '', hrefMore = '', img = '', type = '', weight = '', dimensions = '', isInfo = true}) => {

	return (
		<div className={classes.main_item}>
			<Link href={hrefMore}>
				<a className={classes.image_list}>
					<img src={img} alt="image"/>
				</a>
			</Link>
			<Link href={hrefMore}><a className={classes.title}>{title}</a></Link>
			{
				isInfo && (
					<ul className={classes.info}>
						<li>Type: {type}</li>
						<li>Weight: {weight}</li>
						<li>Dimensions: {dimensions}</li>
					</ul>
				)
			}
			<Link href={hrefMore}><a className={classes.moreBtn}>More details</a></Link>
		</div>
	);
};

export default ProductsImg;
