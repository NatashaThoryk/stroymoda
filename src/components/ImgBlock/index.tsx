import classes from './imgBlock.module.scss';
import Link from 'next/link';
import {IProps} from './types';
import React, {useState} from 'react';


const ImgBlock: React.FC<IProps> = ({links = [], title = '', logo = '', img = '', href = '#'}: any) => {
	const [isShowLogo, setIsShowLogo] = useState(false);
	const [hoveredItemIndex, setHoveredItemIndex] = useState<number | boolean>(false);
	const isLink = links && links.length > 0;

	return (
		<div className={classes.main_item}>
			<Link href={href}>
				<a className={classes.image_list}>
					<img
						src={typeof hoveredItemIndex === 'number' ? links[(hoveredItemIndex - 1) as number]?.logo : img}
						alt="image"/>
					{
						isShowLogo && isLink &&
						<span className={classes.main_item_logo}><img src={logo} alt="logo"/></span>
					}
				</a>
			</Link>
			<a href={href}>
				<h3 className={classes.title}
					onMouseEnter={() => setIsShowLogo(true)}
					onMouseLeave={() => setIsShowLogo(false)}
				>{title}</h3>
			</a>
			{
				isLink && (
					<ul className={classes.nav_main_list}>
						{links.map((item: any, index: any) => (
							<li className={classes.nav_main_item}>
								<Link
									href={{
										pathname: `${item.link}#${item.hash}`,
									}}
								>
									<a
										onMouseEnter={() => setHoveredItemIndex(index + 1)}
										onMouseLeave={() => setHoveredItemIndex(false)}
									>{item.title}</a>
								</Link>
							</li>
						))}
					</ul>
				)
			}
		</div>
	);
};

export default ImgBlock;
