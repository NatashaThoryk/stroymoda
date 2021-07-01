import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import classes from "../index.module.scss";
import ProjectsImg from 'components/ProjectsImg';
import BreadCrumbs from 'components/BreadCrumbs';
import toVal from "helpers/clsx";

const title = 'Selected Projects'
const list1 = {
	title: 'GAZPROM NEFT',
	img: '/img/project/1.jpg',
	architect: 'Internal',
	loc: 'St. Petersburg',
	size: '42 000 square meters'
}
const list2 = {
	title: 'Tetra Pak',
	img: '/img/project/2.jpg',
	architect: 'ABD Architects',
	loc: 'Moscow',
	size: '3000 square meters'
}
const list3 = {
	title: 'GAZPROM NEFT',
	img: '/img/project/3.jpg',
	architect: 'Internal',
	loc: 'St. Petersburg',
	size: '42 000 square meters'
}
const list4 = {
	title: 'GAZPROM NEFT',
	img: '/img/project/4.jpg',
	architect: 'Internal',
	loc: 'St. Petersburg',
	size: '42 000 square meters'
}
const list5 = {
	title: 'GAZPROM NEFT',
	img: '/img/project/5.jpg',
	architect: 'Internal',
	loc: 'St. Petersburg',
	size: '42 000 square meters'
}
const list6 = {
	title: 'Tetra Pak',
	img: '/img/project/6.jpg',
	architect: 'Internal',
	loc: 'St. Petersburg',
	size: '42 000 square meters'
}
const list7 = {
	title: 'GAZPROM NEFT',
	img: '/img/project/7.jpg',
	architect: 'Internal',
	loc: 'St. Petersburg',
	size: '42 000 square meters'
}
const list8 = {
	title: 'Tetra Pak',
	img: '/img/project/8.jpg',
	architect: 'Internal',
	loc: 'St. Petersburg',
	size: '42 000 square meters'
};

const breadCrumbs = [
	{
		text: 'Projects',
		pathname: '/projects',
	}
];

const Projects = () => {

	return (
		<>
			<Header/>
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
					<BreadCrumbs items={breadCrumbs} />
					<h2 className={classes.title_cap}>{title}</h2>
				</div>
				<div className={classes.container}>
					<div className={classes.main_list_pd}>
						<div className={toVal(classes.in_list, classes.in_list_center)}>
							<ProjectsImg isNew={true} size={list1.size} loc={list1.loc} architect={list1.architect} title={list1.title} img={list1.img} />
							<ProjectsImg isNew={false} size={list2.size} loc={list2.loc} architect={list2.architect} title={list2.title} img={list2.img} />
							<ProjectsImg isNew={false} size={list3.size} loc={list3.loc} architect={list3.architect} title={list3.title} img={list3.img} />
							<ProjectsImg isNew={true} size={list4.size} loc={list4.loc} architect={list4.architect} title={list4.title} img={list4.img} />
						</div>
						<div className={toVal(classes.in_list, classes.in_list_center)}>
							<ProjectsImg isNew={false} size={list5.size} loc={list5.loc} architect={list5.architect} title={list5.title} img={list5.img} />
							<ProjectsImg isNew={true} size={list6.size} loc={list6.loc} architect={list6.architect} title={list6.title} img={list6.img} />
							<ProjectsImg isNew={false} size={list7.size} loc={list7.loc} architect={list7.architect} title={list7.title} img={list7.img} />
							<ProjectsImg isNew={true} size={list8.size} loc={list8.loc} architect={list8.architect} title={list8.title} img={list8.img} />
						</div>
						<div className={toVal(classes.in_list, classes.in_list_center)}>
							<ProjectsImg isNew={false} size={list3.size} loc={list3.loc} architect={list3.architect} title={list3.title} img={list3.img} />
							<ProjectsImg isNew={true} size={list1.size} loc={list1.loc} architect={list1.architect} title={list1.title} img={list1.img} />
							<ProjectsImg isNew={false} size={list2.size} loc={list2.loc} architect={list2.architect} title={list2.title} img={list2.img} />
							<ProjectsImg isNew={true} size={list4.size} loc={list4.loc} architect={list4.architect} title={list4.title} img={list4.img} />
						</div>
						<div className={toVal(classes.in_list, classes.in_list_center)}>
							<ProjectsImg isNew={false} size={list5.size} loc={list5.loc} architect={list5.architect} title={list5.title} img={list5.img} />
							<ProjectsImg isNew={true} size={list6.size} loc={list6.loc} architect={list6.architect} title={list6.title} img={list6.img} />
							<ProjectsImg isNew={false} size={list7.size} loc={list7.loc} architect={list7.architect} title={list7.title} img={list7.img} />
							<ProjectsImg isNew={true} size={list8.size} loc={list8.loc} architect={list8.architect} title={list8.title} img={list8.img} />
						</div>
					</div>
				</div>
			</main>
			<Footer isBg={true} customClass="is_margin"/>
			</>
	);
};

export default Projects;
