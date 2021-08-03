import classes from './stepList.module.scss';
import {IProps} from './types';
import React from 'react';
// import { Lightbox } from 'react-lightbox-pack'; // <--- Importing LightBox Pack
// import "react-lightbox-pack/dist/index.css";
// import Carousel, { Modal, ModalGateway } from 'react-images';
// const images = [{source: '/img/products/detail/st1.png'}, {source: '/img/products/detail/st2.png'}, {source: '/img/products/detail/st3.png'} ];


// const data = [
// 	{
// 		"id":  1,
// 		"image":  "/img/products/detail/st1.png",
// 		"title":  "Lorem Ipsum",
// 		"description":
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
// 	},
// 	{
// 		"id":  2,
// 		"image":  "/img/products/detail/st2.png",
// 		"title":  "Lorem Ipsum",
// 		"description":
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
// 	},
// 	{
// 		"id":  3,
// 		"image":  "/img/products/detail/st3.png",
// 		"title":  "Lorem Ipsum",
// 		"description":
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
// 	}
// ];

const StepList: React.FC<IProps> = ({stepList = []}) => {
	// const [toggle, setToggle] =  React.useState(false);
	// const [sIndex, setSIndex] =  React.useState(0);
	//
	// // Handler
	// const  lightBoxHandler  = (state:any, sIndex:any) => {
	// 	setToggle(state);
	// 	setSIndex(sIndex);
	// };

	return (
		<div>
			<ul className={classes.step_list}>
				{stepList.map((item: any) => (
					<li className={classes.list}>
						<div className={classes.top}>
							<div className={classes.circle}>
								{item.number}
							</div>
							<div>
								<p>{item.title}</p>
								<p>{item.title1}</p>
							</div>
						</div>
						<img src={item.link} alt="image"/>
						{/*// data should be an array of object*/}
						{/*{data.map((item, index) => (*/}
							{/*<>*/}
								{/*<img*/}
									{/*key={item.id}*/}
									{/*src={item.image}*/}
									{/*alt={item.title}*/}
									{/*style={{ maxHeight:  "80vh", maxWidth:  "50vw" }}*/}
									{/*onClick={() => {*/}
										{/*lightBoxHandler(true, index);*/}
									{/*}}*/}
								{/*/>*/}
							{/*</>*/}
						{/*))}*/}
						{/*//Component*/}
						{/*<Lightbox*/}
							{/*state={toggle}*/}
							{/*event={lightBoxHandler}*/}
							{/*data={data}*/}
							{/*imageWidth="60vw"*/}
							{/*imageHeight="70vh"*/}
							{/*thumbnailHeight={50}*/}
							{/*thumbnailWidth={50}*/}
							{/*setImageIndex={setSIndex}*/}
							{/*imageIndex={sIndex}*/}
						{/*/>*/}
						{/*<ModalImage*/}
							{/*small={item.urlToTinyImageFile}*/}
							{/*large={item.urlToHugeImageFile}*/}
							{/*alt="Hello World!"*/}
						{/*/>;*/}
						{/*<ModalGateway>*/}
							{/*{isModal ? (*/}
								{/*<Modal>*/}
									{/*<Carousel views={item.link} />*/}
								{/*</Modal>*/}
							{/*) : null}*/}
						{/*</ModalGateway>*/}
					</li>
				))}
			</ul>
		</div>

	);
};

export default StepList;
