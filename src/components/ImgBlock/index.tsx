import React, {useState} from 'react';
import Link from 'next/link'
import classes from "./styles.module.scss";

export default ({links = [], title = '', logo = '', img = '', href = '#'}: any) => {
	const [isShowLogo, setIsShowLogo] = useState(false);
	const [hoveredItemIndex, setHoveredItemIndex] = useState<number | boolean>(false);
	const isLink = links && links.length > 0;

	return (
		<div className={classes.main_item}>
			<a className={classes.image_list} href={href}>
				<img src={typeof hoveredItemIndex === 'number' ? links[(hoveredItemIndex - 1) as number]?.logo : img} alt=""/>
				{
					isShowLogo && isLink && <span className={classes.main_item_logo}><img src={logo} alt=""/></span>
				}
			</a>
			<h3 className={classes.title}
				onMouseEnter={() => setIsShowLogo(true)}
				onMouseLeave={() => setIsShowLogo(false)}
			>{title}</h3>
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
	)
}
