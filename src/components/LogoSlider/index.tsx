import classes from './logoSlider.module.scss';
import classesMain from 'pages/index.module.scss';
import {IProps} from './types';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props: any) {
	const {onClick} = props;
	return (
		<button className={classes.nextArrow} onClick={onClick}/>
	);
};
function SamplePrevArrow(props: any) {
	const {onClick} = props;
	return (
		<button className={classes.prevArrow} onClick={onClick}/>
	);
};

const LogoSlider: React.FC<IProps> = ({list = [], title = ''}) => {
	const settings_3 = {
		dots: false,
		infinite: true,
		speed: 800,
		arrow: true,
		slidesToShow: 9,
		slidesToScroll: 1,
		initialSlide: 0,
		nextArrow: <SampleNextArrow/>,
		prevArrow: <SamplePrevArrow/>,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 7,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					nextArrow: undefined,
					prevArrow: undefined,
					autoplay: true,
					infinite: true,
					speed: 800,
				}
			}
		]
	};
	return (
		<div className={classesMain.container}>
			<div className={classes.in_wrap}>
				<h3 className={classesMain.title}>{title}</h3>
				<Slider className={classes.carouselSlider} {...settings_3}>
					{list.map((item: any) => (
						<img src={item.img} alt="logo"/>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default LogoSlider;
