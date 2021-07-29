import classes from './modal.module.scss';
import { IProps } from './types';
import React, {useEffect, useRef} from 'react';
import toVal from '../../helpers/clsx';
import SliderMain from 'components/Slider';
import {useAppContext} from '../../context/App';

const slides = ['modal.jpg', 'modal.jpg', 'modal.jpg'];

const Modal: React.FC<IProps> = ({setIsModal, isModal}) => {
	const {isMobile} = useAppContext();
	const wrapperRef:any = useRef(null);

	useEffect(() => {
		function handleClickOutside(event:any) {
			if (wrapperRef && wrapperRef.current && !wrapperRef?.current?.contains(event.target)) {
				setIsModal(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [wrapperRef]);

	return (
		<div className={toVal(classes.fixed_overlay, isModal ? classes.fixed_overlay_block: '' )}>
			{isMobile
				? (
					<div className={toVal(classes.modal,classes.modal_mob)}>
						<div className={classes.modal_container}>
							<div className={classes.top_info}>
								<div className={classes.title_modal}>
									<div className={classes.top}>
										<div className={classes.wrapper}>
											<img src="/img/modal_logo.svg" alt="logo"/>
										</div>
										<p className={classes.title}>stroymoda.ru</p>
									</div>
									<span className={classes.close} onClick={() => setIsModal(false)}><svg
										width="23" height="22"
										viewBox="0 0 23 22" fill="none"
										xmlns="http://www.w3.org/2000/svg">
<rect x="1.73633" width="28.6581" height="2.45458" transform="rotate(45 1.73633 0)" fill="#BBBBC2"/>
<rect width="28.6581" height="2.45458" transform="matrix(-0.707107 0.707107 0.707107 0.707107 20.7754 0)"
	  fill="#BBBBC2"/>
</svg></span>
								</div>
								<div className={classes.image_wrap}>
									<SliderMain dotsClass="slideDotsWhite" dotsClassItem="slideLeftDotsItem"
												list={slides as any}/>
								</div>
							</div>
							<div className={classes.info_wrap}>
								<div className={classes.content}>
									<div className={classes.text}>
										<p>На ответственных проектах предъявляются повышенные требования к пожарной
											безопасности. #hpl #fundermax обеспечивает эти требования, а наше
											оборудование и золотые руки монтажников обеспечивают качество и
											точность.</p>
										<p>Система облицовки #walline с рустиком 2 мм и 4 мм</p>
									</div>
									<div className={classes.wrap}>
										<div>
											<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M6.5 12L5.5575 11.1368C2.21 8.08283 0 6.06866 0 3.59673C0 1.58256 1.573 0 3.575 0C4.706 0 5.7915 0.5297 6.5 1.36676C7.2085 0.5297 8.294 0 9.425 0C11.427 0 13 1.58256 13 3.59673C13 6.06866 10.79 8.08283 7.4425 11.1433L6.5 12Z" fill="#646677"/>
											</svg>
											<span>256</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
				: (
					<div className={classes.modal} ref={wrapperRef}>
						<div className={classes.modal_container}>
							<div className={classes.arrow}>
								<a href="#">
									<svg className={classes.prev_arrow} width="83" height="36" viewBox="0 0 83 36" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M23 1L2 18L23 35" stroke="white" stroke-width="2"/>
										<rect width="2" height="80" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 83 19)" fill="white"/>
									</svg>
								</a>
								<a href="#">
									<svg className={classes.next_arrow} width="83" height="36" viewBox="0 0 83 36" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M60 1L81 18L60 35" stroke="white" stroke-width="2"/>
										<rect y="19" width="2" height="80" transform="rotate(-90 0 19)" fill="white"/>
									</svg>
								</a>

							</div>
							<div className={classes.image_wrap}>
								<SliderMain dotsClass="slideDotsWhite" dotsClassItem="slideLeftDotsItem"
											list={slides as any}/>
							</div>
							<div className={classes.info_wrap}>
								<div className={classes.title_modal}>
									<div className={classes.top}>
										<div className={classes.wrapper}>
											<img src="/img/modal_logo.svg" alt="logo"/>
										</div>
										<p className={classes.title}>stroymoda.ru</p>
									</div>
									<span className={classes.close} onClick={() => setIsModal(false)}><svg
										width="23" height="22"
										viewBox="0 0 23 22" fill="none"
										xmlns="http://www.w3.org/2000/svg">
<rect x="1.73633" width="28.6581" height="2.45458" transform="rotate(45 1.73633 0)" fill="#BBBBC2"/>
<rect width="28.6581" height="2.45458" transform="matrix(-0.707107 0.707107 0.707107 0.707107 20.7754 0)"
	  fill="#BBBBC2"/>
</svg></span>
								</div>
								<div className={classes.content}>
									<div className={classes.text}>
										<p>На ответственных проектах предъявляются повышенные требования к пожарной
											безопасности. #hpl #fundermax обеспечивает эти требования, а наше
											оборудование и золотые руки монтажников обеспечивают качество и
											точность.</p>
										<p>Система облицовки #walline с рустиком 2 мм и 4 мм</p>
									</div>
									<div className={classes.wrap}>
										<div>
											<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M6.5 12L5.5575 11.1368C2.21 8.08283 0 6.06866 0 3.59673C0 1.58256 1.573 0 3.575 0C4.706 0 5.7915 0.5297 6.5 1.36676C7.2085 0.5297 8.294 0 9.425 0C11.427 0 13 1.58256 13 3.59673C13 6.06866 10.79 8.08283 7.4425 11.1433L6.5 12Z" fill="#646677"/>
											</svg>
											<span>256</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				)}
		</div>
	);
};

export default Modal;
