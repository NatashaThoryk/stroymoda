import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "../../pages/index.module.scss";

export default ({list = [], isVideo = false}) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		arrows: false,
	};

	return (
		<Slider className={classes.carousel} {...settings}>
			{list.map(item => <div>
				{
					isVideo ? (
						<iframe width="560" height="315" src={item}
								title="YouTube video player" frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen></iframe>
					) : (
						<img src={`/img/slider/${item}`} alt="image"/>
					)
				}
			</div>)}
		</Slider>
	)
}
