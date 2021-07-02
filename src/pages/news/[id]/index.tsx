import React from 'react';
import classes from '../../index.module.scss';
import classesMain from "pages/index.module.scss";
import NewsImageBlock from "components/NewsImageBlock";
import TextSection from "components/TextSection";
import NewsText from "components/NewsText";
import QuoteBlock from "components/QuoteBlock";
import SocialBlock from "components/SocialBlock";
import BreadCrumbs from "components/BreadCrumbs";
import Layout from 'layouts/main';


const title = 'News';
const textSectionTitle = 'Navigating the COVID-19 situation through flexibility (AIPC COMMUNIQUÉ ARTICLE)';
const textSectionText = 'Since the onset of the COVID-19 pandemic, the global meeting industry has been harshly affected by the cancellation of hundreds of exhibitions, conventions and conferences. Most urgently, convention centers are seeking ways to reactivate business to meet their financial obligations. This is a difficult challenge: new health and safety regulations and the fear of crowds in the minds of millions have forced venues to reconsider the traditional (face to face in tightly packed, fixed, closed auditoriums) event format.';
const newsTitle1 = 'Hybrid events';
const newsText1 = 'At this critical junction, the main alternatives (1) are hybrid events, in\n' +
	'\t\t\t\twhich only part of the audience is physically present at an event while the rest attend remotely, and\n' +
	'\t\t\t\tvaried conference style layouts that respect a set distance between seats (1.5 to 2 meters). In\n' +
	'\t\t\t\tpreparation for its re-opening in August 2020, Lausanne’s Swiss Tech Convention Center (STCC) conducted\n' +
	'\t\t\t\textensive planning based on these options, showing how a flexible venue may ensure the safety of events\n' +
	'\t\t\t\tand provide peace of mind to both attendees and organizers.s';
const newsTitle2 = 'Flexibility and speed';
const newsText2 = 'Made scalable and modular through an automatic Gala Venue Transformation System, the STCC can convert its vast conference hall into a large flat room or subdivide it into several smaller rooms. Not only does the system easily handle the unique factors of various events, but it can also accommodate safety protocols in the face of COVID-19 challenges. As Christophe Leyvraz, head of client experience at the center, pointed out: “The flexibility and speed of seat conversion of the Gala Venue Seating System has helped us plan for future demands of COVID regulations and the variation of client requirements for auditorium capacity and seating plans.” Hence, the STCC was able to rapidly create a series of new conference space layouts in line with local safety measures, all of which have already obtained the necessary approvals.';
const quoteText = 'Mr. Leyvraz further explained that “a safe distance of 2 meters between rows [by removing every other\n' +
	'\t\t\t\t\t\trow of seats] can be achieved in a matter of 4 minutes with the Gala Venue Transformation System”. With\n' +
	'\t\t\t\t\t\tthe use of dynamic seating arrangements – allowing for pre-registered persons who are together to sit\n' +
	'\t\t\t\t\t\tside by side – the STCC expects its occupancy to range from 10% to 75% upon.';
const newsText3 = 'Events such as seminars, business meetings and concerts will be held in a variety of formats, from small to mid-size to hybrid to on-site events, all in safely configured layouts. This has given the STCC the ability to market to associations and companies with real dynamic solutions to the pandemic speeding up the recovery.'
const newsText4 = 'The COVID-19 pandemic obliged convention centers around the world to explore new event formats and space layouts to ensure a safe client experience. The STCC was no exception. However, equipped with a Gala System, it was accustomed to space reconfiguration: breaking down the scale of its conference hall to suit smaller numbers of people or serve several simultaneous events was already part of its daily routine, just like last-minute changes in layout to accommodate clients’ needs. In response to COVID-19, the Gala System further proved its worth as an effective tool to balance the need to assemble and interact with the need to maintain safe distancing. The trend in the meeting industry for increased space versatility is likely to intensify in the years to come, while the current exercise highlights the need to support unpredictable demands.';
const breadCrumbs = [
	{
		text: 'Navigating the COVID-19 situation...',
		pathname: '/news/id',
	}
];
export default () => {

	return (
		<Layout footerProps={{
			isBg: true,
			customClass: 'footer'
		}}>
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
				<BreadCrumbs items={breadCrumbs}/>
					<h2 className={classesMain.title_cap}>{title}</h2>
				</div>
				<NewsImageBlock src='/img/newsMain.png'/>
				<TextSection title={textSectionTitle}
							 customClass='wrapper'
							 text={textSectionText}/>
				<NewsText title={newsTitle1} text={newsText1}/>
				<NewsText title={newsTitle2}
						  text={newsText2}/>
				<QuoteBlock text={quoteText}/>
				<NewsText
					text={newsText3}
					text1={newsText4}
				/>
				<SocialBlock customClass='newsPage'/>
			</main>
		</Layout>
	)
}
