import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "../../pages/index.module.scss";
import classesMain from "styles/main.module.scss";

export default ({listLogo = []}) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 800,
		slidesToShow: 9,
		slidesToScroll: 1,
		// autoplay: true,
		arrows: true,
	};

	return (
		<div className={classesMain.container}>
			<Slider className={classes.carouselSlider} {...settings}>
				{listLogo.map((item: any) => (
						<img src={item.img} alt=""/>
				))}
			</Slider>
		</div>
	)
}
