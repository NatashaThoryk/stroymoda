import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import classes from "../../index.module.scss";
import toVal from "../../../helpers/clsx";
import Slider from "components/Slider";




export default () => {
	return (
		<>
			<Header/>
			<main className={classes.main}>
				<div className={classes.content_wrapper}>
					<ul className={classes.breadcrumb_nav} itemScope itemType="http://schema.org/BreadcrumbList">
						<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
							<a itemProp="item" href="https://www.stroymoda.ru/eng/" title="home">
								<span itemProp="name">Home</span>
								<meta itemProp="name" content="home"/>
							</a>
							<meta itemProp="position" content="1"/>
						</li>
						<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
							<a itemProp="item" href="https://www.stroymoda.ru/eng/products/" title="Products">
								<span itemProp="name">Products</span>
								<meta itemProp="name" content="Products"/>
							</a>
							<meta itemProp="position" content="2"/>
						</li>
						<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
							<a className={classes.breadcrumb_active} itemProp="item"
							   href="https://www.stroymoda.ru/eng/products/" title="Venue Transformation Systems">
								<span itemProp="name">Venue Transformation Systems</span>
								<meta itemProp="name" content="Venue Transformation Systems"/>
							</a>
							<meta itemProp="position" content="3"/>
						</li>
					</ul>
					<div className={classes.top_center}>
						<img src="/img/products/galaSystems.svg" alt="logo"/>
						<h2 className={classes.title_cap}>Venue Transformation Systems</h2>
					</div>
				</div>
				<div className={classes.full_bg}>
					<img src="/img/products/background_detail.png" alt=""/>
				</div>
				<div className={toVal(classes.info, classes.detail_info)}>
					<div className={classes.content_wrapper}>
						<div className={classes.info_content}>
							<div className={toVal(classes.in_content, classes.in_content_image)}>
								<svg width="254" height="77" viewBox="0 0 223 67" fill="none"
									 xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0)">
										<path
											d="M45.5178 27.4295C42.6838 27.4295 39.8419 27.4295 37.008 27.4295C36.4222 27.4295 36.3113 27.327 36.3351 26.7353C36.3509 26.3566 36.4143 25.9859 36.4697 25.6072C36.5172 25.3311 36.6913 25.2364 36.9763 25.2285C37.6571 25.2207 38.3458 25.2285 39.0266 25.1575C40.4594 24.9998 41.061 24.3608 41.1323 22.8934C41.1956 21.5445 41.1956 20.1876 41.2114 18.8386C41.2273 17.5132 41.2194 16.18 41.2114 14.8547C41.2114 14.5865 41.2906 14.4287 41.5281 14.2946C43.3092 13.2454 45.217 12.5038 47.196 11.9595C50.2042 11.1312 53.2598 10.5947 56.3867 10.6421C61.0968 10.7131 65.6248 11.6361 69.7491 13.9948C75.6308 17.3476 79.3118 22.3412 80.6971 28.9679C81.1404 31.0821 81.1009 33.2199 80.895 35.3578C80.6576 37.7718 80.1193 40.1148 79.1693 42.3552C77.6573 45.9131 75.2904 48.8004 72.1556 51.0566C69.0129 53.3207 65.4981 54.7407 61.7459 55.6006C59.2444 56.1765 56.7192 56.4763 54.1464 56.3816C50.0458 56.2396 46.1749 55.2298 42.5018 53.4233C41.821 53.092 41.536 52.7212 41.5202 51.9639C41.4648 49.684 41.3381 47.3962 41.2114 45.1163C41.1877 44.6824 41.3777 44.4852 41.7576 44.3906C41.8685 44.359 41.9872 44.3274 42.098 44.3038C42.9688 44.1144 43.1034 44.2091 43.3092 45.0611C44.4571 49.8023 47.4889 52.6581 52.2228 53.6126C57.7482 54.7249 62.7196 53.2971 67.1051 49.8575C70.9524 46.844 73.0739 42.7891 73.8338 38.0243C74.0792 36.4623 74.2455 34.8608 74.2059 33.2831C74.0555 26.9878 71.8073 21.5602 67.121 17.2529C64.8649 15.1781 62.2367 13.7503 59.189 13.2848C55.6821 12.7484 52.2465 13.0403 49.088 14.8389C47.4652 15.7619 46.3173 17.1109 45.9532 18.9806C45.7236 20.1718 45.7316 21.3867 46.0244 22.5779C46.3569 23.919 47.3464 24.771 48.7397 24.9051C49.6184 24.984 50.505 24.984 51.3837 24.9998C52.3494 25.0155 53.3073 25.0155 54.2731 24.9998C54.6372 24.9919 54.843 25.1339 54.8509 25.481C54.8668 25.9622 54.8747 26.4513 54.8193 26.9246C54.7797 27.3112 54.4947 27.4453 54.1068 27.4453C52.1278 27.4374 50.1488 27.4374 48.1697 27.4374C47.2831 27.4295 46.4044 27.4295 45.5178 27.4295Z"
											fill="#292A35"/>
										<path
											d="M35.5515 40.241C38.3775 40.241 41.1957 40.241 44.0217 40.241C44.6709 40.241 44.7421 40.3041 44.7184 40.9352C44.7025 41.2981 44.6788 41.6689 44.6154 42.0317C44.5679 42.3 44.4017 42.4262 44.0851 42.4341C43.2459 42.4499 42.3989 42.4814 41.5677 42.584C40.7365 42.6944 40.2061 43.223 40.0637 44.0355C39.9449 44.714 39.8895 45.4161 39.8816 46.1103C39.8578 48.1219 39.8658 50.1336 39.8816 52.1452C39.8816 52.4371 39.7866 52.5949 39.5412 52.7369C37.2534 54.0859 34.7678 54.9221 32.1871 55.498C29.4164 56.1212 26.6141 56.4999 23.7643 56.3658C18.6584 56.1212 13.8533 54.9063 9.59443 51.9717C4.67058 48.5716 1.57537 43.9408 0.37212 38.0794C0.0317258 36.4307 -0.0632678 34.7661 0.039642 33.1016C0.308791 28.6207 1.4408 24.4159 4.12437 20.7161C6.29339 17.7262 9.11154 15.5015 12.4047 13.8607C15.4445 12.346 18.6584 11.4072 22.0149 10.926C28.0549 10.0582 33.7466 11.0996 39.1454 13.8922C39.3512 13.9948 39.4779 14.1052 39.4937 14.3577C39.6124 16.8584 39.7391 19.3671 39.8816 21.8678C39.9053 22.3175 39.7074 22.5226 39.3195 22.6252C39.1691 22.6646 39.0187 22.7119 38.8604 22.7435C38.1005 22.8776 37.9342 22.7672 37.7759 22.0256C36.7864 17.458 33.4695 14.2314 28.8148 13.3716C23.3289 12.3539 18.4209 13.7108 14.0591 17.0793C10.3781 19.9193 8.28826 23.7533 7.35416 28.2499C6.91085 30.372 6.7367 32.5178 6.90294 34.6714C7.44123 41.7083 10.3148 47.4987 16.2994 51.5141C19.2521 53.4942 22.569 54.2042 26.1233 53.8729C27.9757 53.6994 29.7648 53.3444 31.4351 52.4924C33.0737 51.6561 34.364 50.4728 34.9657 48.6899C35.3852 47.4514 35.3773 46.1813 35.029 44.927C34.6648 43.6016 33.612 42.7812 32.1317 42.7181C30.406 42.6392 28.6802 42.655 26.9545 42.6392C26.345 42.6313 26.2183 42.5209 26.2025 41.9055C26.1946 41.6057 26.1946 41.2981 26.2104 40.9983C26.25 40.3988 26.4558 40.2173 27.0574 40.2173C29.0919 40.2173 31.1184 40.2173 33.1529 40.2173C33.9445 40.241 34.744 40.241 35.5515 40.241Z"
											fill="#292A35"/>
										<path
											d="M62.5534 58.0619C50.4417 69.8952 30.6988 69.974 18.508 58.3775C19.2917 58.4879 20.0516 58.6141 20.8116 58.6851C21.8565 58.7877 22.9094 58.835 23.9622 58.9218C24.1601 58.9376 24.3739 59.0007 24.5401 59.1111C27.9836 61.32 31.7121 62.7794 35.7573 63.4184C37.5859 63.7103 39.4224 63.8523 41.2669 63.7813C46.5865 63.5841 51.5104 62.0773 55.9988 59.1979C56.3471 58.977 56.7033 58.8745 57.0992 58.8508C58.904 58.7482 60.6772 58.4485 62.4346 58.0461C62.4584 58.0461 62.4821 58.054 62.5534 58.0619Z"
											fill="#292A35"/>
										<path
											d="M62.5456 8.61461C61.4136 8.4805 60.2895 8.33061 59.1654 8.22017C58.4688 8.14917 57.7722 8.14128 57.0755 8.08606C56.9014 8.07028 56.7114 8.02294 56.5689 7.92828C53.4579 5.90873 50.0856 4.51241 46.4521 3.78663C43.7289 3.2423 40.9741 3.08452 38.2035 3.32908C33.4142 3.75508 29.0207 5.28551 24.9756 7.85728C24.7143 8.02294 24.374 8.11761 24.0652 8.14128C22.2524 8.2675 20.4634 8.5515 18.6902 8.95383C18.6506 8.96172 18.611 8.95383 18.4685 8.95383C23.7486 4.04696 29.8678 1.06498 36.9844 0.228761C48.2015 -1.10445 57.3605 3.65252 62.5456 8.61461Z"
											fill="#292A35"/>
										<path
											d="M213.431 40.1247C213.241 40.172 213.162 40.2114 213.083 40.2193C211.191 40.3298 211.198 40.3298 211.056 38.4443C210.913 36.5826 210.747 34.7287 210.415 32.8275C209.987 33.9004 209.544 34.9732 209.132 36.054C208.681 37.2137 208.214 38.3733 207.826 39.5567C207.605 40.2272 207.225 40.3613 206.568 40.3692C205.918 40.3771 205.697 40.0931 205.499 39.5567C204.771 37.5844 204.003 35.6201 203.243 33.6558C203.14 33.3955 203.029 33.143 202.926 32.8906C202.855 32.9064 202.784 32.9221 202.712 32.9379C202.53 35.344 202.348 37.7501 202.166 40.1878C201.406 40.1878 200.733 40.1878 199.926 40.1878C200.243 36.1013 200.559 32.0544 200.884 27.8733C201.644 27.8733 202.404 27.8338 203.164 27.9048C203.354 27.9206 203.583 28.2677 203.67 28.5044C204.596 30.942 205.491 33.3955 206.401 35.841C206.473 36.0303 206.56 36.2197 206.71 36.5826C207.391 34.7602 208.024 33.0799 208.649 31.3996C208.99 30.4845 209.346 29.5694 209.647 28.6385C209.821 28.0863 210.066 27.7865 210.716 27.8654C211.27 27.9364 211.84 27.8812 212.505 27.8812C212.813 31.9912 213.122 36.0619 213.431 40.1247Z"
											fill="#292A35"/>
										<path
											d="M111.344 33.1036C111.344 35.0758 111.36 36.9139 111.321 38.7599C111.313 38.9966 111.091 39.3279 110.877 39.4462C108.684 40.6375 106.413 40.9767 104.149 39.7381C102.043 38.5864 101.378 36.5984 101.299 34.3343C101.227 32.22 101.726 30.2952 103.373 28.8594C105.154 27.3053 108.32 27.1633 110.323 28.5044C110.569 28.6701 110.759 29.1118 110.751 29.4274C110.743 30.0112 110.576 30.5949 110.474 31.2024C109.848 30.8395 109.302 30.4372 108.692 30.1847C106.001 29.0803 103.84 30.4766 103.666 33.4191C103.626 34.0897 103.689 34.7839 103.808 35.4545C104.275 38.1919 106.729 38.6021 108.574 38.0026C108.772 37.9395 108.977 37.5924 109.001 37.3636C109.064 36.7482 109.025 36.125 109.025 35.3993C108.186 35.3993 107.402 35.3993 106.531 35.3993C106.413 34.6261 106.302 33.9319 106.191 33.2062C106.397 33.1667 106.531 33.1115 106.674 33.1115C108.186 33.1036 109.706 33.1036 111.344 33.1036Z"
											fill="#292A35"/>
										<path
											d="M123.765 39.8722C122.981 40.0537 122.3 40.2193 121.548 40.3929C121.176 39.3516 120.796 38.3576 120.464 37.3557C120.321 36.9376 120.115 36.7325 119.64 36.7482C118.691 36.7798 117.725 36.7167 116.775 36.7877C116.49 36.8114 116.157 37.1111 115.967 37.3794C115.769 37.6555 115.706 38.0341 115.587 38.3734C114.875 40.3298 114.875 40.3298 112.595 40.1641C113.086 38.8467 113.561 37.5608 114.036 36.267C114.994 33.6795 115.991 31.1156 116.901 28.5123C117.163 27.7471 117.638 27.7471 118.263 27.7392C118.865 27.7313 119.276 27.7707 119.538 28.4886C120.883 32.2516 122.316 35.9909 123.765 39.8722ZM118.192 31.2813C117.756 32.4804 117.408 33.4507 117.036 34.4684C117.867 34.4684 118.54 34.4684 119.348 34.4684C118.968 33.4349 118.627 32.4804 118.192 31.2813Z"
											fill="#292A35"/>
										<path
											d="M144.244 39.888C143.476 40.0694 142.819 40.2272 142.098 40.3929C141.718 39.3752 141.323 38.3891 140.99 37.3793C140.832 36.8902 140.579 36.6851 140.088 36.7561C140.032 36.764 139.969 36.7561 139.906 36.7561C138.861 36.7719 137.594 36.4406 136.85 36.9218C136.169 37.3636 136.019 38.6652 135.686 39.6119C135.52 40.0852 135.275 40.2667 134.776 40.2272C134.277 40.1878 133.763 40.2193 133.193 40.2193C133.24 39.9748 133.24 39.7697 133.312 39.5961C134.689 35.8962 136.106 32.22 137.436 28.5044C137.713 27.7234 138.188 27.7707 138.797 27.7471C139.415 27.7313 139.819 27.8181 140.072 28.5202C141.37 32.1175 142.724 35.699 144.062 39.2884C144.117 39.4383 144.157 39.6119 144.244 39.888ZM139.898 34.4999C139.494 33.427 139.138 32.4646 138.702 31.297C138.275 32.4961 137.935 33.4665 137.57 34.4999C138.394 34.4999 139.075 34.4999 139.898 34.4999Z"
											fill="#292A35"/>
										<path
											d="M197.923 38.0341C197.923 38.8309 197.923 39.4778 197.923 40.172C195.675 40.172 193.474 40.172 191.171 40.172C191.171 36.1014 191.171 32.0228 191.171 27.9048C193.356 27.9048 195.501 27.9048 197.717 27.9048C197.717 28.5675 197.717 29.2302 197.717 30.0191C196.34 30.0191 194.931 30.0191 193.458 30.0191C193.458 30.9578 193.458 31.7704 193.458 32.6934C194.305 32.6934 195.105 32.7407 195.897 32.6776C196.601 32.6224 196.87 32.8906 196.894 33.5611C196.902 33.9635 196.989 34.3658 197.052 34.8707C195.81 34.8707 194.622 34.8707 193.435 34.8707C193.435 35.9594 193.435 36.9533 193.435 38.0341C194.963 38.0341 196.411 38.0341 197.923 38.0341Z"
											fill="#292A35"/>
										<path
											d="M177.056 30.8316C176.336 30.5081 175.687 30.1216 174.99 29.9244C174.278 29.7193 173.486 29.7903 173.153 30.587C172.813 31.3917 173.296 31.9518 173.977 32.3305C174.499 32.6145 175.045 32.859 175.568 33.1351C177.697 34.2396 178.513 36.0225 177.808 38.0578C177.199 39.8091 175.299 40.7321 173.09 40.3377C173.035 40.3298 172.971 40.3061 172.916 40.2982C170.612 39.817 170.414 39.4778 171.04 37.1663C171.879 37.5056 172.694 37.9079 173.565 38.1603C174.578 38.4522 175.457 38.0657 175.695 37.3557C175.964 36.5273 175.592 35.7858 174.618 35.2651C173.882 34.8707 173.114 34.5315 172.417 34.0897C171.008 33.1904 170.502 31.7467 170.937 30.1374C171.309 28.7805 172.663 27.7786 174.238 27.7076C174.325 27.6997 174.42 27.7076 174.507 27.7076C177.175 27.6761 177.658 28.2756 177.056 30.8316Z"
											fill="#292A35"/>
										<path
											d="M216.043 37.1664C216.89 37.5056 217.666 37.8921 218.489 38.1288C219.621 38.4522 220.421 38.1209 220.69 37.3557C220.991 36.5037 220.611 35.7937 219.55 35.2257C218.814 34.8313 218.046 34.492 217.357 34.0345C216.012 33.1509 215.529 31.7073 215.948 30.1295C216.297 28.8199 217.666 27.7944 219.17 27.7155C219.233 27.7155 219.289 27.6997 219.352 27.7155C220.247 27.9048 221.26 27.897 221.996 28.3466C223.001 28.9698 222.004 29.9954 222.241 31.0998C221.806 30.8001 221.6 30.5871 221.355 30.4924C220.722 30.2557 220.08 29.9323 219.431 29.9165C219.004 29.9086 218.299 30.3109 218.204 30.6659C218.093 31.0841 218.363 31.7862 218.711 32.1017C219.218 32.5672 219.946 32.7959 220.571 33.1352C221.648 33.711 222.606 34.3895 222.914 35.6754C223.635 38.7047 221.363 40.9293 218.133 40.3535C218.101 40.3456 218.078 40.3377 218.046 40.3377C215.616 39.8407 215.45 39.5725 216.043 37.1664Z"
											fill="#292A35"/>
										<path
											d="M150.862 39.4384C150.98 38.6337 151.083 37.8527 151.186 37.1427C152.041 37.4977 152.833 37.9 153.68 38.1446C154.733 38.4601 155.548 38.1446 155.841 37.4425C156.197 36.5905 155.841 35.841 154.82 35.2809C154.036 34.8549 153.213 34.4842 152.477 33.9951C151.155 33.1115 150.703 31.6994 151.147 30.1611C151.535 28.8042 152.754 27.8418 154.242 27.7234C154.511 27.6998 154.78 27.7076 155.049 27.7155C157.408 27.7786 158.018 28.6701 157.234 30.8395C156.601 30.5476 155.983 30.1847 155.326 29.9717C154.424 29.6799 153.593 29.9717 153.363 30.5476C153.078 31.2497 153.411 31.9045 154.321 32.4094C155.049 32.8117 155.809 33.1588 156.514 33.6006C157.939 34.4999 158.509 35.8884 158.137 37.616C157.804 39.1386 156.783 40.0458 155.271 40.314C153.704 40.5901 152.247 40.2588 150.862 39.4384Z"
											fill="#292A35"/>
										<path
											d="M159.158 28.2441C159.886 28.0626 160.48 27.8733 161.089 27.8023C161.279 27.7786 161.588 28.0469 161.707 28.252C162.577 29.7745 163.409 31.3128 164.351 33.0089C165.031 31.7862 165.633 30.6817 166.243 29.5852C167.295 27.6919 167.295 27.6919 169.67 27.9601C168.879 29.3564 168.198 30.7843 167.311 32.0623C165.871 34.1607 165.158 36.3854 165.499 38.9256C165.538 39.249 165.499 39.5803 165.499 39.9038C165.499 39.959 165.475 40.0221 165.451 40.1483C164.746 40.1483 164.018 40.1483 163.187 40.1483C163.187 38.8782 163.25 37.6081 163.163 36.338C163.116 35.6596 162.942 34.9338 162.617 34.3422C161.54 32.3305 160.369 30.3662 159.158 28.2441Z"
											fill="#292A35"/>
										<path
											d="M182.978 30.0269C181.703 30.0269 180.611 30.0269 179.455 30.0269C179.455 29.2933 179.455 28.6306 179.455 27.9127C182.503 27.9127 185.511 27.9127 188.63 27.9127C188.748 28.5596 188.875 29.2459 189.018 30.0112C187.775 30.0112 186.587 30.0112 185.305 30.0112C185.305 33.427 185.305 36.764 185.305 40.1641C184.497 40.1641 183.793 40.1641 182.985 40.1641C182.978 36.835 182.978 33.4901 182.978 30.0269Z"
											fill="#292A35"/>
										<path
											d="M125.585 27.9048C126.322 27.9048 127.002 27.9048 127.77 27.9048C127.77 31.2576 127.77 34.5867 127.77 38.0184C129.092 38.0184 130.327 38.0184 131.625 38.0184C131.736 38.7836 131.823 39.4541 131.926 40.1799C129.805 40.1799 127.723 40.1799 125.577 40.1799C125.585 36.1171 125.585 32.0544 125.585 27.9048Z"
											fill="#292A35"/>
									</g>
									<defs>
										<clipPath id="clip0">
											<rect width="223" height="67" fill="white"/>
										</clipPath>
									</defs>
								</svg>
							</div>
							<div className={classes.in_content}>
								<p className={classes.prev_text}>The Spiralift is the world its most compact lifting
									system. It allows hall
									reconfiguration by using moving floor platforms. Gala Systems solutions enables
									automated under the floor storage of spectators seats that are used in multi purpose
									halls.</p>
								<p className={classes.prev_text}>The Spiralift is used as main component in critically
									acclaimed platform lift systems
									such as theater lifts , orchestra lifts and piano lifts . The spiralift uses two
									bands of intertwining stainless steel to form a strong and stable column. The
									Spiralift requires relative low-power electric motor drives thanks to its very high
									mechanical efficiency. Spiralifts are used easily in modular designs that suits any
									platform geometry in order to create truly flexible hall transformations.</p>
							</div>
						</div>
						<div className={classes.video_container}>
							<video className={classes.full_video} muted loop height="660" width="100%"
								   poster="/img/poster1.png">
								<source
									src=""
									type="video/mp4"/>
							</video>
						</div>
					</div>
				</div>
				<div className={classes.section_bg}>
					<div className={classes.content_wrapper}>
						<div className={classes.advantages_detail}>
							<h2 className={classes.title_cap}>Advantages</h2>
							<div className={classes.list}>
								<div>
									<div className={classes.item_advantages}>
										<svg width="36" height="36" viewBox="0 0 36 36" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M18.1588 21.8213L33.2323 5.2763C33.6042 4.86804 34.2367 4.83861 34.6449 5.21057L35.2454 5.75765C35.6537 6.1296 35.6831 6.76207 35.3112 7.17033L18.3029 25.8387L9.38862 17.3646C8.98833 16.9841 8.97231 16.3511 9.35285 15.9508L9.9128 15.3618C10.2933 14.9616 10.9263 14.9456 11.3266 15.3261L18.1588 21.8213ZM35.3907 13.3306C35.197 12.6054 34.2891 12.4245 33.7844 12.9802L33.0633 13.7742C32.8363 14.0242 32.7531 14.3713 32.8264 14.7009C33.0627 15.7633 33.1875 16.8673 33.1875 18C33.1875 26.3743 26.3743 33.1875 18 33.1875C9.62567 33.1875 2.8125 26.3743 2.8125 18C2.8125 9.62567 9.62567 2.8125 18 2.8125C21.5238 2.8125 24.7704 4.01933 27.3501 6.04072C27.7824 6.37945 28.4085 6.34961 28.7777 5.94305L29.3304 5.33444C29.7033 4.9239 29.6724 4.2859 29.2399 3.93879C26.0597 1.38659 22.1365 0 18 0C13.1921 0 8.67178 1.87234 5.27206 5.27206C1.87234 8.67178 0 13.1921 0 18C0 22.8079 1.87234 27.3282 5.27206 30.7279C8.67178 34.1277 13.1921 36 18 36C22.8079 36 27.3282 34.1277 30.7279 30.7279C34.1277 27.3282 36 22.8079 36 18C36 16.4014 35.7924 14.8348 35.3907 13.3306Z"
												fill="#DC3143"/>
										</svg>
										<p className={classes.advanteges_text}>Gala Systems’ products can easily be
											integrated, within new or existing venues.</p>
									</div>
									<div className={classes.item_advantages}>
										<svg width="36" height="36" viewBox="0 0 36 36" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M18.1588 21.8213L33.2323 5.2763C33.6042 4.86804 34.2367 4.83861 34.6449 5.21057L35.2454 5.75765C35.6537 6.1296 35.6831 6.76207 35.3112 7.17033L18.3029 25.8387L9.38862 17.3646C8.98833 16.9841 8.97231 16.3511 9.35285 15.9508L9.9128 15.3618C10.2933 14.9616 10.9263 14.9456 11.3266 15.3261L18.1588 21.8213ZM35.3907 13.3306C35.197 12.6054 34.2891 12.4245 33.7844 12.9802L33.0633 13.7742C32.8363 14.0242 32.7531 14.3713 32.8264 14.7009C33.0627 15.7633 33.1875 16.8673 33.1875 18C33.1875 26.3743 26.3743 33.1875 18 33.1875C9.62567 33.1875 2.8125 26.3743 2.8125 18C2.8125 9.62567 9.62567 2.8125 18 2.8125C21.5238 2.8125 24.7704 4.01933 27.3501 6.04072C27.7824 6.37945 28.4085 6.34961 28.7777 5.94305L29.3304 5.33444C29.7033 4.9239 29.6724 4.2859 29.2399 3.93879C26.0597 1.38659 22.1365 0 18 0C13.1921 0 8.67178 1.87234 5.27206 5.27206C1.87234 8.67178 0 13.1921 0 18C0 22.8079 1.87234 27.3282 5.27206 30.7279C8.67178 34.1277 13.1921 36 18 36C22.8079 36 27.3282 34.1277 30.7279 30.7279C34.1277 27.3282 36 22.8079 36 18C36 16.4014 35.7924 14.8348 35.3907 13.3306Z"
												fill="#DC3143"/>
										</svg>
										<p className={classes.advanteges_text}>Gala Systems’ products can easily be
											integrated, within new or existing venues.</p>
									</div>
									<div className={classes.item_advantages}>
										<svg width="36" height="36" viewBox="0 0 36 36" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M18.1588 21.8213L33.2323 5.2763C33.6042 4.86804 34.2367 4.83861 34.6449 5.21057L35.2454 5.75765C35.6537 6.1296 35.6831 6.76207 35.3112 7.17033L18.3029 25.8387L9.38862 17.3646C8.98833 16.9841 8.97231 16.3511 9.35285 15.9508L9.9128 15.3618C10.2933 14.9616 10.9263 14.9456 11.3266 15.3261L18.1588 21.8213ZM35.3907 13.3306C35.197 12.6054 34.2891 12.4245 33.7844 12.9802L33.0633 13.7742C32.8363 14.0242 32.7531 14.3713 32.8264 14.7009C33.0627 15.7633 33.1875 16.8673 33.1875 18C33.1875 26.3743 26.3743 33.1875 18 33.1875C9.62567 33.1875 2.8125 26.3743 2.8125 18C2.8125 9.62567 9.62567 2.8125 18 2.8125C21.5238 2.8125 24.7704 4.01933 27.3501 6.04072C27.7824 6.37945 28.4085 6.34961 28.7777 5.94305L29.3304 5.33444C29.7033 4.9239 29.6724 4.2859 29.2399 3.93879C26.0597 1.38659 22.1365 0 18 0C13.1921 0 8.67178 1.87234 5.27206 5.27206C1.87234 8.67178 0 13.1921 0 18C0 22.8079 1.87234 27.3282 5.27206 30.7279C8.67178 34.1277 13.1921 36 18 36C22.8079 36 27.3282 34.1277 30.7279 30.7279C34.1277 27.3282 36 22.8079 36 18C36 16.4014 35.7924 14.8348 35.3907 13.3306Z"
												fill="#DC3143"/>
										</svg>
										<p className={classes.advanteges_text}>Gala Systems’ products can easily be
											integrated, within new or existing venues.</p>
									</div>
								</div>
								<div>
									<div className={classes.item_advantages}>
										<svg width="36" height="36" viewBox="0 0 36 36" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M18.1588 21.8213L33.2323 5.2763C33.6042 4.86804 34.2367 4.83861 34.6449 5.21057L35.2454 5.75765C35.6537 6.1296 35.6831 6.76207 35.3112 7.17033L18.3029 25.8387L9.38862 17.3646C8.98833 16.9841 8.97231 16.3511 9.35285 15.9508L9.9128 15.3618C10.2933 14.9616 10.9263 14.9456 11.3266 15.3261L18.1588 21.8213ZM35.3907 13.3306C35.197 12.6054 34.2891 12.4245 33.7844 12.9802L33.0633 13.7742C32.8363 14.0242 32.7531 14.3713 32.8264 14.7009C33.0627 15.7633 33.1875 16.8673 33.1875 18C33.1875 26.3743 26.3743 33.1875 18 33.1875C9.62567 33.1875 2.8125 26.3743 2.8125 18C2.8125 9.62567 9.62567 2.8125 18 2.8125C21.5238 2.8125 24.7704 4.01933 27.3501 6.04072C27.7824 6.37945 28.4085 6.34961 28.7777 5.94305L29.3304 5.33444C29.7033 4.9239 29.6724 4.2859 29.2399 3.93879C26.0597 1.38659 22.1365 0 18 0C13.1921 0 8.67178 1.87234 5.27206 5.27206C1.87234 8.67178 0 13.1921 0 18C0 22.8079 1.87234 27.3282 5.27206 30.7279C8.67178 34.1277 13.1921 36 18 36C22.8079 36 27.3282 34.1277 30.7279 30.7279C34.1277 27.3282 36 22.8079 36 18C36 16.4014 35.7924 14.8348 35.3907 13.3306Z"
												fill="#DC3143"/>
										</svg>
										<p className={classes.advanteges_text}>Gala Systems’ products can easily be
											integrated, within new or existing venues.</p>
									</div>
									<div className={classes.item_advantages}>
										<svg width="36" height="36" viewBox="0 0 36 36" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M18.1588 21.8213L33.2323 5.2763C33.6042 4.86804 34.2367 4.83861 34.6449 5.21057L35.2454 5.75765C35.6537 6.1296 35.6831 6.76207 35.3112 7.17033L18.3029 25.8387L9.38862 17.3646C8.98833 16.9841 8.97231 16.3511 9.35285 15.9508L9.9128 15.3618C10.2933 14.9616 10.9263 14.9456 11.3266 15.3261L18.1588 21.8213ZM35.3907 13.3306C35.197 12.6054 34.2891 12.4245 33.7844 12.9802L33.0633 13.7742C32.8363 14.0242 32.7531 14.3713 32.8264 14.7009C33.0627 15.7633 33.1875 16.8673 33.1875 18C33.1875 26.3743 26.3743 33.1875 18 33.1875C9.62567 33.1875 2.8125 26.3743 2.8125 18C2.8125 9.62567 9.62567 2.8125 18 2.8125C21.5238 2.8125 24.7704 4.01933 27.3501 6.04072C27.7824 6.37945 28.4085 6.34961 28.7777 5.94305L29.3304 5.33444C29.7033 4.9239 29.6724 4.2859 29.2399 3.93879C26.0597 1.38659 22.1365 0 18 0C13.1921 0 8.67178 1.87234 5.27206 5.27206C1.87234 8.67178 0 13.1921 0 18C0 22.8079 1.87234 27.3282 5.27206 30.7279C8.67178 34.1277 13.1921 36 18 36C22.8079 36 27.3282 34.1277 30.7279 30.7279C34.1277 27.3282 36 22.8079 36 18C36 16.4014 35.7924 14.8348 35.3907 13.3306Z"
												fill="#DC3143"/>
										</svg>
										<p className={classes.advanteges_text}>Gala Systems’ products can easily be
											integrated, within new or existing venues.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={classes.section_slider}>
					<div className={classes.content_wrapper}>
						<h2 className={classes.title_cap}>Multipurpose hall systems</h2>
					</div>
					<div className={classes.slider_wrap}>
						<div className={classes.container}>
							<div className={classes.section_slide}>
								<Slider list={sliderList1 as any} isVideo/>
							</div>
							<div className={classes.section_text}>
								<h3 className={classes.title}>Rotation system</h3>
								<div className={classes.list_check}>
									<div className={classes.item}>
										<svg width="22" height="17" viewBox="0 0 22 17" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M7.3057 13.0338L18.7591 0.893977C19.1289 0.502102 19.7426 0.473563 20.147 0.829433L20.2441 0.914838C20.669 1.28865 20.6993 1.94025 20.3109 2.35187L7.41665 16.0188L0.762863 9.91081C0.345925 9.52807 0.329436 8.87589 0.7265 8.47257L0.813652 8.38405C1.19159 8.00016 1.8057 7.98464 2.20253 8.34895L7.3057 13.0338Z"
												fill="#646677"/>
										</svg>
										<p>Seats rotate automatically from storage position to seating position
										</p>
									</div>
									<div className={classes.item}>
										<svg width="22" height="17" viewBox="0 0 22 17" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M7.3057 13.0338L18.7591 0.893977C19.1289 0.502102 19.7426 0.473563 20.147 0.829433L20.2441 0.914838C20.669 1.28865 20.6993 1.94025 20.3109 2.35187L7.41665 16.0188L0.762863 9.91081C0.345925 9.52807 0.329436 8.87589 0.7265 8.47257L0.813652 8.38405C1.19159 8.00016 1.8057 7.98464 2.20253 8.34895L7.3057 13.0338Z"
												fill="#646677"/>
										</svg>
										<p>Independent moving platforms for each audience row</p>
									</div>
									<div className={classes.item}>
										<svg width="22" height="17" viewBox="0 0 22 17" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M7.3057 13.0338L18.7591 0.893977C19.1289 0.502102 19.7426 0.473563 20.147 0.829433L20.2441 0.914838C20.669 1.28865 20.6993 1.94025 20.3109 2.35187L7.41665 16.0188L0.762863 9.91081C0.345925 9.52807 0.329436 8.87589 0.7265 8.47257L0.813652 8.38405C1.19159 8.00016 1.8057 7.98464 2.20253 8.34895L7.3057 13.0338Z"
												fill="#646677"/>
										</svg>
										<p>Straight or angled seating rows</p>
									</div>
									<div className={classes.item}>
										<svg width="22" height="17" viewBox="0 0 22 17" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M7.3057 13.0338L18.7591 0.893977C19.1289 0.502102 19.7426 0.473563 20.147 0.829433L20.2441 0.914838C20.669 1.28865 20.6993 1.94025 20.3109 2.35187L7.41665 16.0188L0.762863 9.91081C0.345925 9.52807 0.329436 8.87589 0.7265 8.47257L0.813652 8.38405C1.19159 8.00016 1.8057 7.98464 2.20253 8.34895L7.3057 13.0338Z"
												fill="#646677"/>
										</svg>
										<p>Compatible with conference seating from most chair producers</p>
									</div>
									<div className={classes.item}>
										<svg width="22" height="17" viewBox="0 0 22 17" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M7.3057 13.0338L18.7591 0.893977C19.1289 0.502102 19.7426 0.473563 20.147 0.829433L20.2441 0.914838C20.669 1.28865 20.6993 1.94025 20.3109 2.35187L7.41665 16.0188L0.762863 9.91081C0.345925 9.52807 0.329436 8.87589 0.7265 8.47257L0.813652 8.38405C1.19159 8.00016 1.8057 7.98464 2.20253 8.34895L7.3057 13.0338Z"
												fill="#646677"/>
										</svg>
										<p>Conversion time within 10 minutes</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={classes.content_wrapper}>
						<div className={classes.step_list}>
							<div className={classes.list}>
								<div className={classes.top}>
									<div className={classes.circle}>
										1.
									</div>
									<p>Move up front elevator</p>
								</div>
								<img src="/img/products/detail/st1.png" alt="image"/>
							</div>
							<div className={classes.list}>
								<div className={classes.top}>
									<div className={classes.circle}>
										2.
									</div>
									<p>Rotate FRONT ELEVATOR'S
										SEAT UNDER FLOOR</p>
								</div>
								<img src="/img/products/detail/st2.png" alt="image"/>
							</div>
							<div className={classes.list}>
								<div className={classes.top}>
									<div className={classes.circle}>
										3.
									</div>
									<p>MOVE DOWN FRONT ELEVATOR</p>
								</div>
								<img src="/img/products/detail/st3.png" alt="image"/>
							</div>
						</div>
					</div>
				</div>
				<div className={classes.section_bg}>
					<div className={classes.container}>
						<div className={classes.section_text}>
							<h3 className={classes.title}>Translation system</h3>
							<div className={classes.list_check}>
								<div className={classes.item}>
									<svg width="22" height="17" viewBox="0 0 22 17" fill="none"
										 xmlns="http://www.w3.org/2000/svg">
										<path
											d="M7.3057 13.0338L18.7591 0.893977C19.1289 0.502102 19.7426 0.473563 20.147 0.829433L20.2441 0.914838C20.669 1.28865 20.6993 1.94025 20.3109 2.35187L7.41665 16.0188L0.762863 9.91081C0.345925 9.52807 0.329436 8.87589 0.7265 8.47257L0.813652 8.38405C1.19159 8.00016 1.8057 7.98464 2.20253 8.34895L7.3057 13.0338Z"
											fill="#646677"/>
									</svg>
									<p>Seats move automatically, horizontally from one row to a storage position under the adjacent row</p>
								</div>
								<div className={classes.item}>
									<svg width="22" height="17" viewBox="0 0 22 17" fill="none"
										 xmlns="http://www.w3.org/2000/svg">
										<path
											d="M7.3057 13.0338L18.7591 0.893977C19.1289 0.502102 19.7426 0.473563 20.147 0.829433L20.2441 0.914838C20.669 1.28865 20.6993 1.94025 20.3109 2.35187L7.41665 16.0188L0.762863 9.91081C0.345925 9.52807 0.329436 8.87589 0.7265 8.47257L0.813652 8.38405C1.19159 8.00016 1.8057 7.98464 2.20253 8.34895L7.3057 13.0338Z"
											fill="#646677"/>
									</svg>
									<p>Independent moving platforms for each spectator row</p>
								</div>
								<div className={classes.item}>
									<svg width="22" height="17" viewBox="0 0 22 17" fill="none"
										 xmlns="http://www.w3.org/2000/svg">
										<path
											d="M7.3057 13.0338L18.7591 0.893977C19.1289 0.502102 19.7426 0.473563 20.147 0.829433L20.2441 0.914838C20.669 1.28865 20.6993 1.94025 20.3109 2.35187L7.41665 16.0188L0.762863 9.91081C0.345925 9.52807 0.329436 8.87589 0.7265 8.47257L0.813652 8.38405C1.19159 8.00016 1.8057 7.98464 2.20253 8.34895L7.3057 13.0338Z"
											fill="#646677"/>
									</svg>
									<p>Used in venues with curved seating rows</p>
								</div>
								<div className={classes.item}>
									<svg width="22" height="17" viewBox="0 0 22 17" fill="none"
										 xmlns="http://www.w3.org/2000/svg">
										<path
											d="M7.3057 13.0338L18.7591 0.893977C19.1289 0.502102 19.7426 0.473563 20.147 0.829433L20.2441 0.914838C20.669 1.28865 20.6993 1.94025 20.3109 2.35187L7.41665 16.0188L0.762863 9.91081C0.345925 9.52807 0.329436 8.87589 0.7265 8.47257L0.813652 8.38405C1.19159 8.00016 1.8057 7.98464 2.20253 8.34895L7.3057 13.0338Z"
											fill="#646677"/>
									</svg>
									<p>Compatible with auditorium chairs of most seat manufacturers</p>
								</div>
								<div className={classes.item}>
									<svg width="22" height="17" viewBox="0 0 22 17" fill="none"
										 xmlns="http://www.w3.org/2000/svg">
										<path
											d="M7.3057 13.0338L18.7591 0.893977C19.1289 0.502102 19.7426 0.473563 20.147 0.829433L20.2441 0.914838C20.669 1.28865 20.6993 1.94025 20.3109 2.35187L7.41665 16.0188L0.762863 9.91081C0.345925 9.52807 0.329436 8.87589 0.7265 8.47257L0.813652 8.38405C1.19159 8.00016 1.8057 7.98464 2.20253 8.34895L7.3057 13.0338Z"
											fill="#646677"/>
									</svg>
									<p>Conversion time within 10 minutes</p>
								</div>
							</div>
						</div>
						<div className={classes.section_slide}>
							<img src="/img/slider/1.jpg" alt=""/>
						</div>
					</div>
					<div className={classes.content_wrapper}>
						<div className={classes.step_list}>
							<div className={classes.list}>
								<div className={classes.top}>
									<div className={classes.circle}>
										1.
									</div>
									<p>Move up rear elevator</p>
								</div>
								<img src="/img/products/detail/st1.1.png" alt="image"/>
							</div>
							<div className={classes.list}>
								<div className={classes.top}>
									<div className={classes.circle}>
										2.
									</div>
									<p>EXTEND SEAT'S MECHANISM
										OVER FRONT ELEVATOR</p>
								</div>
								<img src="/img/products/detail/st1.2.png" alt="image"/>
							</div>
							<div className={classes.list}>
								<div className={classes.top}>
									<div className={classes.circle}>
										3.
									</div>
									<p>MOVE UP FRONT ELEVATOR TO PIN
										SEATS ON IT (RETRACT SEAT'S)</p>
								</div>
								<img src="/img/products/detail/st1.3.png" alt="image"/>
							</div>
						</div>
					</div>
				</div>
				<div className={classes.section_slider}>
					<div className={classes.slider_wrap}>
						<div className={classes.container}>
							<div className={classes.section_slide}>
								<img src="/img/slider/1.jpg" alt=""/>
							</div>
							<div className={classes.section_text}>
								<h3 className={classes.title}>Rotation system</h3>
								<div className={classes.list_check}>
									<div className={classes.item}>
										<svg width="22" height="17" viewBox="0 0 22 17" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M7.3057 13.0338L18.7591 0.893977C19.1289 0.502102 19.7426 0.473563 20.147 0.829433L20.2441 0.914838C20.669 1.28865 20.6993 1.94025 20.3109 2.35187L7.41665 16.0188L0.762863 9.91081C0.345925 9.52807 0.329436 8.87589 0.7265 8.47257L0.813652 8.38405C1.19159 8.00016 1.8057 7.98464 2.20253 8.34895L7.3057 13.0338Z"
												fill="#646677"/>
										</svg>
										<p>Seats rotate automatically from storage position to seating position
										</p>
									</div>
									<div className={classes.item}>
										<svg width="22" height="17" viewBox="0 0 22 17" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M7.3057 13.0338L18.7591 0.893977C19.1289 0.502102 19.7426 0.473563 20.147 0.829433L20.2441 0.914838C20.669 1.28865 20.6993 1.94025 20.3109 2.35187L7.41665 16.0188L0.762863 9.91081C0.345925 9.52807 0.329436 8.87589 0.7265 8.47257L0.813652 8.38405C1.19159 8.00016 1.8057 7.98464 2.20253 8.34895L7.3057 13.0338Z"
												fill="#646677"/>
										</svg>
										<p>Independent moving platforms for each audience row</p>
									</div>
									<div className={classes.item}>
										<svg width="22" height="17" viewBox="0 0 22 17" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M7.3057 13.0338L18.7591 0.893977C19.1289 0.502102 19.7426 0.473563 20.147 0.829433L20.2441 0.914838C20.669 1.28865 20.6993 1.94025 20.3109 2.35187L7.41665 16.0188L0.762863 9.91081C0.345925 9.52807 0.329436 8.87589 0.7265 8.47257L0.813652 8.38405C1.19159 8.00016 1.8057 7.98464 2.20253 8.34895L7.3057 13.0338Z"
												fill="#646677"/>
										</svg>
										<p>Straight or angled seating rows</p>
									</div>
									<div className={classes.item}>
										<svg width="22" height="17" viewBox="0 0 22 17" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M7.3057 13.0338L18.7591 0.893977C19.1289 0.502102 19.7426 0.473563 20.147 0.829433L20.2441 0.914838C20.669 1.28865 20.6993 1.94025 20.3109 2.35187L7.41665 16.0188L0.762863 9.91081C0.345925 9.52807 0.329436 8.87589 0.7265 8.47257L0.813652 8.38405C1.19159 8.00016 1.8057 7.98464 2.20253 8.34895L7.3057 13.0338Z"
												fill="#646677"/>
										</svg>
										<p>Compatible with conference seating from most chair producers</p>
									</div>
									<div className={classes.item}>
										<svg width="22" height="17" viewBox="0 0 22 17" fill="none"
											 xmlns="http://www.w3.org/2000/svg">
											<path
												d="M7.3057 13.0338L18.7591 0.893977C19.1289 0.502102 19.7426 0.473563 20.147 0.829433L20.2441 0.914838C20.669 1.28865 20.6993 1.94025 20.3109 2.35187L7.41665 16.0188L0.762863 9.91081C0.345925 9.52807 0.329436 8.87589 0.7265 8.47257L0.813652 8.38405C1.19159 8.00016 1.8057 7.98464 2.20253 8.34895L7.3057 13.0338Z"
												fill="#646677"/>
										</svg>
										<p>Conversion time within 10 minutes</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={classes.content_wrapper}>
						<div className={classes.step_list}>
							<div className={classes.list}>
								<div className={classes.top}>
									<div className={classes.circle}>
										1.
									</div>
									<p>Move up front elevator</p>
								</div>
								<img src="/img/products/detail/st1.png" alt="image"/>
							</div>
							<div className={classes.list}>
								<div className={classes.top}>
									<div className={classes.circle}>
										2.
									</div>
									<p>Rotate FRONT ELEVATOR'S
										SEAT UNDER FLOOR</p>
								</div>
								<img src="/img/products/detail/st2.png" alt="image"/>
							</div>
							<div className={classes.list}>
								<div className={classes.top}>
									<div className={classes.circle}>
										3.
									</div>
									<p>MOVE DOWN FRONT ELEVATOR</p>
								</div>
								<img src="/img/products/detail/st3.png" alt="image"/>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer/>
		</>
	)
}
