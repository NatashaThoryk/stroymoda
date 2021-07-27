import classesMain from 'pages/index.module.scss';
import { IProps } from './types';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderMain: React.FC<IProps> = ({list = [], isVideo = false, dotsClass = '', dotsClassItem = 'slideRightDotsItem'}) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		arrows: false,
		dotsClass: `slick-dots ${classesMain[dotsClass]}`,
		appendDots: (dots: any) => <ul>{dots}</ul>,
		customPaging: () => (
			<div className={classesMain[dotsClassItem]}/>
		)
	};

	return (
		<Slider className={classesMain.carousel} {...settings}>
			{list.map(item => <div>
				{
					isVideo ? (
						<iframe width="100" height="100" src={item}
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
};

export default SliderMain;
