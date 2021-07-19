import classes from './searchSocial.module.scss';
import classesMain from 'pages/index.module.scss';
import NewsBlog from 'components/NewsBlog';
import NewsItemsFb from 'components/NewsItemsFb';
import NewsItemsBlog from 'components/NewsItemsBlog';
import NewsItemsInst from 'components/NewsItemsInst';
import NewsItemsYouTube from 'components/NewsItemsYouTube';
import NewsItemsYouTubeLarge from 'components/NewsItemsYouTubeLarge';
import React, {useState} from 'react';
import 'react-tabs/style/react-tabs.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from 'components/Modal';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import toVal from '../../helpers/clsx';
import {useAppContext} from '../../context/App';

const titleNew = 'Navigating the COVID-19 situation through flexibility (AIPC COMMUNIQUÉ ARTICLE)';
const itemFb1 = {
	title: 'В понедельник мы показали кабинет из новой концепции офиса, сегодня - коридор: пространство выглядит',
	link: '/news',
	src: '/img/newsMain.png',
};
const itemFb2 = {
	title: 'Еще одна иллюстрация из конкурсного проекта, который наше бюро делало',
	link: '/news',
	src: '/img/newsMain.png',
};
const itemFb3 = {
	title: 'Новая концепция офиса: шпонированные декоративные панели и мебель по нашим эскизам, дополненная креслами.',
	link: '/news',
	src: '/img/newsMain.png',

};
const itemIns1 = {
	link: '',
	src: '/img/news/inst/News_inst.jpg',
	textInside: 'stroymoda.ru',
	count: '512'
};
const itemIns2 = {
	link: '',
	src: '/img/news/inst/News_inst1.jpg',
	textInside: 'stroymoda.ru',
	count: '312'
};
const itemIns3 = {
	link: '',
	src: '/img/news/inst/News_inst2.jpg',
	textInside: 'stroymoda.ru',
	count: '532'
};
const itemIns4 = {
	link: '',
	src: '/img/news/inst/News_inst3.jpg',
	textInside: 'stroymoda.ru',
	count: '522'
};
const itemIns5 = {
	link: '',
	src: '/img/news/inst/News_inst4.jpg',
	textInside: 'stroymoda.ru',
	count: '512'
};
const itemIns6 = {
	link: '',
	src: '/img/news/inst/News_inst5.jpg',
	textInside: 'stroymoda.ru',
	count: '112'
};
const itemIns7 = {
	link: '',
	src: '/img/news/inst/News_inst6.jpg',
	textInside: 'stroymoda.ru',
	count: '12'
};
const itemIns8 = {
	link: '',
	src: '/img/news/inst/News_inst7.jpg',
	textInside: 'stroymoda.ru',
	count: '512'
};
const itemIns9 = {
	link: '',
	src: '/img/news/inst/News_inst8.jpg',
	textInside: 'stroymoda.ru',
	count: '512'
};
const itemIns10 = {
	link: '',
	src: '/img/news/inst/News_inst9.jpg',
	textInside: 'stroymoda.ru',
	count: '512'
};
const itemIns11 = {
	link: '',
	src: '/img/news/inst/News_inst10.jpg',
	textInside: 'stroymoda.ru',
	count: '512'
};
const itemBlog1 = {
	title: 'DESIGNING TRANSFORMABLE VENUES WITH CURVED-ROW',
	src: '/img/news/blog1.jpg',
	link: '/news/id',
};
const itemBlog2 = {
	title: 'A Gala Venue in a Modern Mixed-Used Office Tower in São Paulo is Ready to Open',
	src: '/img/news/blog2.jpg',
	link: '/news/id',
};
const itemBlog3 = {
	title: 'Flexible Convention Centres Now in Emerging Countries ',
	src: '/img/news/blog3.jpg',
	link: '/news/id',
};
// const list = [
// 	{
// 		img: '/img/news/blog.svg'
// 	},
// 	{
// 		img: '/img/news/instagram.svg'
// 	},
// 	{
// 		img: '/img/news/youtube.svg'
// 	},
// 	{
// 		img: '/img/news/fb.svg'
// 	}
// ];


const SearchSocial = () => {
	const [isModal, setIsModal] = useState(false);
	const {isMobile} = useAppContext();
	const settingsSlider = {
		slidesToShow: 2,
		slidesToScroll: 1,
		initialSlide: 2,
	};

	return (
		<div className={classesMain.content_wrapper}>
			<div className={classes.section_slide}>
				<form className={classes.form}>
					<input type="search" placeholder="Search news by keywords..."/>
					<button type="submit" className={classes.btnName}>Search</button>
				</form>
				<div className="tabsNews">
					<Tabs className={classes.tabs}>
						{isMobile
							? (
								<Slider className={classes.carousel} {...settingsSlider}>
									<TabList>
										<Tab>
										<img src="/img/news/fb.svg" alt="logo"/>
										</Tab>
										<Tab>
										<img src="/img/news/instagram.svg" alt="logo"/>
										</Tab>
										<Tab>
										<img src="/img/news/fb.svg" alt="logo"/>
										</Tab>
										<Tab>
										<img src="/img/news/instagram.svg" alt="logo"/>
										</Tab>
									</TabList>
								</Slider>
							)
							: (
								<TabList>
									<Tab>
								<span>
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none"
										 xmlns="http://www.w3.org/2000/svg">
									<path
										d="M21.94 9.02515H13.9928C13.2924 9.02515 12.7246 9.59283 12.7246 10.2933C12.7246 10.9938 13.2923 11.5615 13.9928 11.5615H21.94C22.6409 11.5615 23.2082 10.9938 23.2082 10.2933C23.2081 9.59283 22.6404 9.02515 21.94 9.02515Z"
										fill="#646677"/>
									<path
										d="M24.9835 15.1545H13.9928C13.2924 15.1545 12.7246 15.7222 12.7246 16.4227C12.7246 17.1232 13.2923 17.6909 13.9928 17.6909H24.9835C25.684 17.6909 26.2517 17.1232 26.2517 16.4227C26.2517 15.7222 25.684 15.1545 24.9835 15.1545Z"
										fill="#646677"/>
									<path
										d="M30.7318 1.07794H8.28531C7.58488 1.07794 7.01713 1.64563 7.01713 2.34613V14.3091H4.77675C2.14275 14.3091 0 16.4523 0 19.0859V26.1453C0 28.7793 2.14275 30.9221 4.77675 30.9221C4.99231 30.9221 5.20456 30.9077 5.41213 30.8798H26.3356C29.4586 30.8798 32 28.3388 32 25.2154V2.34613C32 1.64563 31.4323 1.07794 30.7318 1.07794ZM7.01719 26.1453C7.01719 27.2321 6.23894 28.141 5.2105 28.3434H4.77681V28.3857C3.54119 28.3857 2.53638 27.3804 2.53638 26.1453V19.0859C2.53638 17.8507 3.54163 16.8454 4.77681 16.8454H7.01725V26.1453H7.01719ZM29.4637 25.2153C29.4637 26.9109 28.0315 28.3434 26.3356 28.3434H9.01706C9.35987 27.6853 9.5535 26.9374 9.5535 26.1453V3.61425H29.4637V25.2153Z"
										fill="#646677"/>
									<path
										d="M21.94 20.904H13.9928C13.2924 20.904 12.7246 21.4717 12.7246 22.1722C12.7246 22.8726 13.2923 23.4404 13.9928 23.4404H21.94C22.6409 23.4404 23.2082 22.8727 23.2082 22.1722C23.2081 21.4717 22.6404 20.904 21.94 20.904Z"
										fill="#646677"/>
								</svg>
								Blog
								</span>
									</Tab>
									<Tab>
							<span>
								<svg width="30" height="29" viewBox="0 0 30 29" fill="none"
									 xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0)">
										<path
											d="M20.4562 0H9.54225C4.52 0 0.447266 4.05819 0.447266 9.0625V19.9375C0.447266 24.9418 4.52 29 9.54225 29H20.4562C25.4785 29 29.5512 24.9418 29.5512 19.9375V9.0625C29.5512 4.05819 25.4785 0 20.4562 0ZM26.8227 19.9375C26.8227 23.4356 23.9669 26.2812 20.4562 26.2812H9.54225C6.03158 26.2812 3.17576 23.4356 3.17576 19.9375V9.0625C3.17576 5.56437 6.03158 2.71875 9.54225 2.71875H20.4562C23.9669 2.71875 26.8227 5.56437 26.8227 9.0625V19.9375Z"
											fill="#646677"/>
										<path
											d="M14.9986 7.25C10.9805 7.25 7.72266 10.4962 7.72266 14.5C7.72266 18.5038 10.9805 21.75 14.9986 21.75C19.0168 21.75 22.2746 18.5038 22.2746 14.5C22.2746 10.4962 19.0168 7.25 14.9986 7.25ZM14.9986 19.0312C12.4921 19.0312 10.4512 16.9976 10.4512 14.5C10.4512 12.0006 12.4921 9.96875 14.9986 9.96875C17.5052 9.96875 19.5461 12.0006 19.5461 14.5C19.5461 16.9976 17.5052 19.0312 14.9986 19.0312Z"
											fill="#646677"/>
										<path
											d="M22.8191 7.67254C23.3546 7.67254 23.7887 7.24002 23.7887 6.70648C23.7887 6.17294 23.3546 5.74042 22.8191 5.74042C22.2837 5.74042 21.8496 6.17294 21.8496 6.70648C21.8496 7.24002 22.2837 7.67254 22.8191 7.67254Z"
											fill="#646677"/>
									</g>
									<defs>
										<clipPath id="clip0">
											<rect width="29.1039" height="29" fill="white"
												  transform="translate(0.447266)"/>
										</clipPath>
									</defs>
								</svg>
								Instagram
							</span>
									</Tab>
									<Tab>
							<span>
								<svg width="34" height="23" viewBox="0 0 34 23" fill="none"
									 xmlns="http://www.w3.org/2000/svg">
									<path
										d="M26.9386 0H7.06136C3.16148 0 0 3.02229 0 6.75047V16.2495C0 19.9777 3.16148 23 7.06136 23H26.9386C30.8385 23 34 19.9777 34 16.2495V6.75047C34 3.02229 30.8385 0 26.9386 0ZM22.1631 11.9622L12.8658 16.2012C12.6181 16.3141 12.3319 16.1414 12.3319 15.8791V7.13614C12.3319 6.87005 12.6256 6.69759 12.8739 6.81788L22.1711 11.3218C22.4475 11.4557 22.4428 11.8347 22.1631 11.9622Z"
										fill="#646677"/>
								</svg>
								YouTube
							</span>
									</Tab>
									<Tab>
							<span>
								<svg width="16" height="29" viewBox="0 0 16 29" fill="none"
									 xmlns="http://www.w3.org/2000/svg">
									<path
										d="M15.3975 0.00603394L11.5598 0C7.24832 0 4.46205 2.80125 4.46205 7.13694V10.4275H0.603437C0.270007 10.4275 0 10.6924 0 11.0192V15.7869C0 16.1136 0.270315 16.3782 0.603437 16.3782H4.46205V28.4087C4.46205 28.7354 4.73205 29 5.06548 29H10.0999C10.4333 29 10.7033 28.7351 10.7033 28.4087V16.3782H15.2149C15.5483 16.3782 15.8184 16.1136 15.8184 15.7869L15.8202 11.0192C15.8202 10.8623 15.7565 10.712 15.6435 10.601C15.5305 10.49 15.3766 10.4275 15.2165 10.4275H10.7033V7.63806C10.7033 6.29732 11.0293 5.61669 12.8116 5.61669L15.3969 5.61578C15.73 5.61578 16 5.35089 16 5.02446V0.59736C16 0.271225 15.7303 0.00663733 15.3975 0.00603394Z"
										fill="#646677"/>
								</svg>
								Facebook
							</span>
									</Tab>
								</TabList>

							)}
						<TabPanel>
							<div className={toVal(classesMain.tabs, classesMain.tab1)}>
								<NewsBlog title={titleNew} link="/news/id" src="/img/newsMain.png"/>
								<div className={classesMain.in_list}>
									<NewsItemsBlog link={itemBlog1.link} title={itemBlog1.title} src={itemBlog1.src}/>
									<NewsItemsBlog link={itemBlog2.link} title={itemBlog2.title} src={itemBlog2.src}/>
									<NewsItemsBlog link={itemBlog3.link} title={itemBlog3.title} src={itemBlog3.src}/>
									<NewsItemsBlog link={itemBlog2.link} title={itemBlog2.title} src={itemBlog2.src}/>
									<NewsItemsBlog link={itemBlog1.link} title={itemBlog1.title} src={itemBlog1.src}/>
									<NewsItemsBlog link={itemBlog3.link} title={itemBlog3.title} src={itemBlog3.src}/>
									<NewsItemsBlog link={itemBlog1.link} title={itemBlog1.title} src={itemBlog1.src}/>
									<NewsItemsBlog link={itemBlog3.link} title={itemBlog3.title} src={itemBlog3.src}/>
									<NewsItemsBlog link={itemBlog2.link} title={itemBlog2.title} src={itemBlog2.src}/>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<div className={classesMain.tabs}>
								{isMobile
									? (
										<>
											<div className={classes.in_list}>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns1.src}
															   textInside={itemIns1.textInside} count={itemIns1.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns2.src}
															   textInside={itemIns2.textInside}
															   count={itemIns2.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns3.src}
															   textInside={itemIns3.textInside}
															   count={itemIns3.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns4.src}
															   textInside={itemIns4.textInside}
															   count={itemIns4.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns5.src}
															   textInside={itemIns5.textInside}
															   count={itemIns5.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns6.src}
															   textInside={itemIns6.textInside}
															   count={itemIns6.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns7.src}
															   textInside={itemIns7.textInside}
															   count={itemIns7.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns8.src}
															   textInside={itemIns8.textInside}
															   count={itemIns8.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns9.src}
															   textInside={itemIns9.textInside}
															   count={itemIns9.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns10.src}
															   textInside={itemIns10.textInside}
															   count={itemIns10.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns11.src}
															   textInside={itemIns11.textInside}
															   count={itemIns11.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns1.src}
															   textInside={itemIns1.textInside}
															   count={itemIns1.count}/></div>
										</>
									)
									: (
										<>
											<div className={toVal(classes.in_list, classes.no_wrap)}>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns1.src}
															   textInside={itemIns1.textInside} count={itemIns1.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns2.src}
															   textInside={itemIns2.textInside}
															   count={itemIns2.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns3.src}
															   textInside={itemIns3.textInside}
															   count={itemIns3.count}/></div>
											<div className={toVal(classes.in_list, classes.no_wrap)}>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns4.src}
															   textInside={itemIns4.textInside}
															   count={itemIns4.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns5.src}
															   textInside={itemIns5.textInside}
															   count={itemIns5.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns6.src}
															   textInside={itemIns6.textInside}
															   count={itemIns6.count}/></div>
											<div className={toVal(classes.in_list, classes.no_wrap)}>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns7.src}
															   textInside={itemIns7.textInside}
															   count={itemIns7.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns8.src}
															   textInside={itemIns8.textInside}
															   count={itemIns8.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns9.src}
															   textInside={itemIns9.textInside}
															   count={itemIns9.count}/></div>
											<div className={toVal(classes.in_list, classes.no_wrap)}>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns10.src}
															   textInside={itemIns10.textInside}
															   count={itemIns10.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns11.src}
															   textInside={itemIns11.textInside}
															   count={itemIns11.count}/>
												<NewsItemsInst onHandler={() => setIsModal(true)} src={itemIns1.src}
															   textInside={itemIns1.textInside}
															   count={itemIns1.count}/></div>
										</>

									)}
							</div>
						</TabPanel>
						<TabPanel>
							<div className={classesMain.tabs}>
								<NewsItemsYouTubeLarge link="https://www.youtube.com/embed/XBPjVzSoepo"/>
								<div className={classesMain.in_list_tabs}>
									<NewsItemsYouTube link="https://www.youtube.com/embed/XBPjVzSoepo"/>
									<NewsItemsYouTube link="https://www.youtube.com/embed/XBPjVzSoepo"/>
									<NewsItemsYouTube link="https://www.youtube.com/embed/XBPjVzSoepo"/>
									<NewsItemsYouTube link="https://www.youtube.com/embed/XBPjVzSoepo"/>
									<NewsItemsYouTube link="https://www.youtube.com/embed/XBPjVzSoepo"/>
									<NewsItemsYouTube link="https://www.youtube.com/embed/XBPjVzSoepo"/>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<div className={toVal(classesMain.tabs, classesMain.tab3)}>
								<div className={classesMain.in_list}>
									<NewsItemsFb link={itemFb1.link} title={itemFb1.title} src={itemFb1.src}/>
									<NewsItemsFb link={itemFb2.link} title={itemFb2.title} src={itemFb2.src}/>
									<NewsItemsFb link={itemFb3.link} title={itemFb3.title} src={itemFb3.src}/>
									<NewsItemsFb link={itemFb1.link} title={itemFb1.title} src={itemFb1.src}/>
									<NewsItemsFb link={itemFb2.link} title={itemFb2.title} src={itemFb2.src}/>
									<NewsItemsFb link={itemFb3.link} title={itemFb3.title} src={itemFb3.src}/>
									<NewsItemsFb link={itemFb1.link} title={itemFb1.title} src={itemFb1.src}/>
									<NewsItemsFb link={itemFb2.link} title={itemFb2.title} src={itemFb2.src}/>
									<NewsItemsFb link={itemFb3.link} title={itemFb3.title} src={itemFb3.src}/>
									<NewsItemsFb link={itemFb1.link} title={itemFb1.title} src={itemFb1.src}/>
									<NewsItemsFb link={itemFb2.link} title={itemFb2.title} src={itemFb2.src}/>
									<NewsItemsFb link={itemFb3.link} title={itemFb3.title} src={itemFb3.src}/>
								</div>
							</div>
						</TabPanel>
					</Tabs>
				</div>
			</div>
					<Modal isModal={isModal} setIsModal={setIsModal}/>
		</div>
	);
};

export default SearchSocial;
