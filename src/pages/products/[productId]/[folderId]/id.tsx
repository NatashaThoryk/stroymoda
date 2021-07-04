import BreadCrumbs from 'components/BreadCrumbs';
import classes from '../../../index.module.scss';
import Layout from 'layouts/main';
import ProductsImg from 'components/ProductsImg';
import React from 'react';

const title = 'Armchairs for halls and public venues';
const subtitle = 'Jezet seats are used as theater armchairs, conference armchairs and auditorium armchairs.\n' +
	'\t\t\t\t\t\tAll models are available as fixed armchair and as retractable armchair for installation on telescopic tribunes';
const list1 = {
	title: 'Galant',
	type: 'Basic armchair',
	weight: '15 kg',
	dimensions: '818mm x 620mm x 450mm',
	img: '/img/products/1.jpg',
	hrefMore: '/products/1/2/title'
};
const list2 = {
	title: 'Granada',
	type: 'Most used model',
	weight: '22 kg',
	dimensions: '818mm x 620mm x 450mm',
	img: '/img/products/2.jpg',
	hrefMore: '/products/1/2/title'
};
const list3 = {
	title: 'Torso',
	type: 'Robust armchair',
	weight: '27 kg',
	dimensions: '818mm x 620mm x 450mm',
	img: '/img/products/3.jpg',
	hrefMore: '/products/1/2/title'
};
const list4 = {
	title: 'Volta',
	type: 'Compact yet comfortable',
	weight: '22 kg',
	dimensions: '818mm x 620mm x 450mm',
	img: '/img/products/4.jpg',
	hrefMore: '/products/1/1/title'
};
const list5 = {
	title: 'Plaza',
	type: 'Royal comfort',
	weight: '26 kg',
	dimensions: '818mm x 620mm x 450mm',
	img: '/img/products/5.jpg',
	hrefMore: '/products/1/2/title'
};
const list6 = {
	title: 'Armada',
	type: 'Timeless design',
	weight: '27 kg',
	dimensions: '818mm x 620mm x 450mm',
	img: '/img/products/6.jpg',
	hrefMore: '/products/1/2/title'
};
const list7 = {
	title: 'Flex Nova',
	type: 'Strength and superior comfort',
	weight: '35 kg',
	dimensions: '818mm x 620mm x 450mm',
	img: '/img/products/7.jpg',
	hrefMore: '/products/1/2/title'
};
const list8 = {
	title: 'Livio',
	type: 'Most used model',
	weight: '27 kg',
	dimensions: '818mm x 620mm x 450mm',
	img: '/img/products/8.jpg',
	hrefMore: '/products/1/2/title'
};
const list9 = {
	title: 'Custom design',
	type: '',
	weight: '',
	dimensions: '',
	img: '/img/products/9.jpg',
	hrefMore: '/products/1/2/title'
};
const breadCrumbs = [
	{
		text: 'Products',
		pathname: '/products',
	},
	{
		text: 'Retractable Tribune Systems',
		pathname: '/products/detail',
	},
	{
		text: 'Armchairs',
		pathname: '/products/id/index/id',
	}
];

const productsMoreItem = () => {
	return (
		<Layout footerProps={{
			isBg: true,
			customClass: 'footer'
		}}>
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
					<BreadCrumbs items={breadCrumbs}/>
					<h2 className={classes.title_cap}>{title}</h2>
					<p className={classes.subtitle}>{subtitle}</p>
					<div className={classes.main_list_pd}>
						<div className={classes.in_list}>
							<ProductsImg hrefMore={list1.hrefMore} type={list1.type} weight={list1.weight} dimensions={list1.dimensions} title={list1.title} img={list1.img}/>
							<ProductsImg hrefMore={list2.hrefMore} type={list2.type} weight={list2.weight} dimensions={list2.dimensions} title={list2.title} img={list2.img}/>
							<ProductsImg hrefMore={list3.hrefMore} type={list3.type} weight={list3.weight} dimensions={list3.dimensions} title={list3.title} img={list3.img}/>
						</div>
						<div className={classes.in_list}>
							<ProductsImg hrefMore={list4.hrefMore} type={list4.type} weight={list4.weight} dimensions={list4.dimensions} title={list4.title} img={list4.img}/>
							<ProductsImg hrefMore={list5.hrefMore} type={list5.type} weight={list5.weight} dimensions={list5.dimensions} title={list5.title} img={list5.img}/>
							<ProductsImg hrefMore={list6.hrefMore} type={list6.type} weight={list6.weight} dimensions={list6.dimensions} title={list6.title} img={list6.img}/>
						</div>
						<div className={classes.in_list}>
							<ProductsImg hrefMore={list7.hrefMore} type={list7.type} weight={list7.weight} dimensions={list7.dimensions} title={list7.title} img={list7.img}/>
							<ProductsImg hrefMore={list8.hrefMore} type={list8.type} weight={list8.weight} dimensions={list8.dimensions} title={list8.title} img={list8.img}/>
							<ProductsImg isInfo={false} title={list9.title} img={list9.img}/>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default productsMoreItem;
