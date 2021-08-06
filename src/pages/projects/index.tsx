import BreadCrumbs from 'components/BreadCrumbs';
import classes from '../index.module.scss';
import Layout from 'layouts/main';
import ProjectsImg from 'components/ProjectsImg';
import React from 'react';
import toVal from '../../helpers/clsx';
import {useAppContext} from '../../context/App';

const title = 'Selected Projects';
const list1 = {
	title: 'GAZPROM NEFT',
	img: '/img/project/1.jpg',
	architect: 'Internal',
	loc: 'St. Petersburg',
	size: '42 000 square meters',
	link: '/projects/id'
};
const list2 = {
	title: 'Tetra Pak',
	img: '/img/project/2.jpg',
	architect: 'ABD Architects',
	loc: 'Moscow',
	size: '3000 square meters',
	link: '/projects/id'
};
const list3 = {
	title: 'GAZPROM NEFT',
	img: '/img/project/3.jpg',
	architect: 'Internal',
	loc: 'St. Petersburg',
	size: '42 000 square meters',
	link: '/projects/id'
};
const list4 = {
	title: 'GAZPROM NEFT',
	img: '/img/project/4.jpg',
	architect: 'Internal',
	loc: 'St. Petersburg',
	size: '42 000 square meters',
	link: '/projects/id'
};
const list5 = {
	title: 'GAZPROM NEFT',
	img: '/img/project/5.jpg',
	architect: 'Internal',
	loc: 'St. Petersburg',
	size: '42 000 square meters',
	link: '/projects/id'
};
const list6 = {
	title: 'Tetra Pak',
	img: '/img/project/6.jpg',
	architect: 'Internal',
	loc: 'St. Petersburg',
	size: '42 000 square meters',
	link: '/projects/id'
};
const list7 = {
	title: 'GAZPROM NEFT',
	img: '/img/project/7.jpg',
	architect: 'Internal',
	loc: 'St. Petersburg',
	size: '42 000 square meters',
	link: '/projects/id'
};
const list8 = {
	title: 'Tetra Pak',
	img: '/img/project/8.jpg',
	architect: 'Internal',
	loc: 'St. Petersburg',
	size: '42 000 square meters',
	link: '/projects/id'
};
const breadCrumbs = [
	{
		text: 'Projects',
		pathname: '/projects',
	}
];

const Projects = () => {
	const {isMobile} = useAppContext();
	return (
		<Layout footerProps={{
			isBg: true,
			customClass: 'footer'
		}}>
			<main className={classes.main}>
			<div className={classes.content_wrapper}>
				<BreadCrumbs items={breadCrumbs} />
				{isMobile
					? (
						<h2 className={toVal(classes.title_cap, classes.title_mob)}>{title}</h2>
					)
					: (
						<h2 className={classes.title_cap}>{title}</h2>

					)}
			</div>
			<div className={classes.container}>
				<div className={classes.main_list_pd}>
					<div className={classes.list_projects}>
						<ProjectsImg link={list1.link} isNew={true} size={list1.size} loc={list1.loc} architect={list1.architect} title={list1.title} img={list1.img} />
						<ProjectsImg link={list2.link} isNew={true} size={list2.size} loc={list2.loc} architect={list2.architect} title={list2.title} img={list2.img} />
						<ProjectsImg link={list3.link} isNew={false} size={list3.size} loc={list3.loc} architect={list3.architect} title={list3.title} img={list3.img} />
						<ProjectsImg link={list4.link} isNew={true} size={list4.size} loc={list4.loc} architect={list4.architect} title={list4.title} img={list4.img} />
						<ProjectsImg link={list5.link} isNew={false} size={list5.size} loc={list5.loc} architect={list5.architect} title={list5.title} img={list5.img} />
						<ProjectsImg link={list6.link} isNew={true} size={list6.size} loc={list6.loc} architect={list6.architect} title={list6.title} img={list6.img} />
						<ProjectsImg link={list7.link} isNew={false} size={list7.size} loc={list7.loc} architect={list7.architect} title={list7.title} img={list7.img} />
						<ProjectsImg link={list8.link} isNew={true} size={list8.size} loc={list8.loc} architect={list8.architect} title={list8.title} img={list8.img} />
						<ProjectsImg link={list3.link} isNew={false} size={list3.size} loc={list3.loc} architect={list3.architect} title={list3.title} img={list3.img} />
						<ProjectsImg link={list1.link} isNew={true} size={list1.size} loc={list1.loc} architect={list1.architect} title={list1.title} img={list1.img} />
						<ProjectsImg link={list2.link} isNew={false} size={list2.size} loc={list2.loc} architect={list2.architect} title={list2.title} img={list2.img} />
						<ProjectsImg link={list4.link} isNew={true} size={list4.size} loc={list4.loc} architect={list4.architect} title={list4.title} img={list4.img} />
						<ProjectsImg link={list5.link} isNew={false} size={list5.size} loc={list5.loc} architect={list5.architect} title={list5.title} img={list5.img} />
						<ProjectsImg link={list6.link} isNew={true} size={list6.size} loc={list6.loc} architect={list6.architect} title={list6.title} img={list6.img} />
						<ProjectsImg link={list7.link} isNew={false} size={list7.size} loc={list7.loc} architect={list7.architect} title={list7.title} img={list7.img} />
						<ProjectsImg link={list8.link} isNew={true} size={list8.size} loc={list8.loc} architect={list8.architect} title={list8.title} img={list8.img} />
					</div>
				</div>
			</div>
			</main>
		</Layout>
	);
};

export default Projects;
