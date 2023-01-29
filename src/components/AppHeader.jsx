import React, {useEffect} from 'react';
import logo from "../assets/logo.svg"
import tg from "../assets/tg.svg"
import hero_bg from "../assets/hero-bg.png"
import danger from "../assets/danger.svg"
import suitcase from "../assets/suitcase.svg"
import link from "../assets/link.svg"
const AppHeader = () => {
	return (
		<header>
			<nav className="max-w-container mx-auto my-4 sm:my-6 py-2 px-4 flex justify-between items-center">
				<img className="w-[100%] lg:w-[50%]" src={logo} alt="logo"/>
				{window.innerWidth > 1024
					?
					<div className="flex items-center gap-8">
						<div className="flex items-center gap-3">
							<img className="w-12 lg:w-16" src={tg} alt="telegram_link"/>
							<p className="font-proxima-black font-black text-[#414141] text-md lg:text-lg leading-6 tracking-tighter">технический <br/>чат
								в Telegram</p>
						</div>
						<div className="flex-col">
							<a className="block ml-3 lg:ml-2 mb-2 font-proxima-black mb-4 lg:mb-6 text-[#414141] text-xl lg:text-2xl leading-6 tracking-tighter"
							   href="tel:+74993500797">+7 499 350 07 97</a>
							<a href="https://tutjdut.ru/" target="_blank"
							   className="font-proxima-extrabold shadow-2xl rounded-2xl bg-[#0CD4F7] py-2 px-6  text-white text-xl lg:text-2xl leading-6 tracking-tighter">вход
								в систему
							</a>
						</div>
					</div>

					: <></>
				}
			</nav>
			<div className="flex max-w-container mx-auto py-2 px-4 xs+:px-8">
				<h2 className="font-proxima-extrabold tracking-10 md+:tracking-[-5px] text-4xl xs+:text-5xl sm:text-6xl md+:text-7xl lg:text-7xl
				mt-4 sm:mt-12 lg:mt-20 text-[#414141] leading-[46px] sm:leading-[60px] md+:leading-[70px]">облачное
					решение для
					рекрутинга и трудоустройства граждан СНГ</h2>
				{window.innerWidth > 921
					?
					<img src={hero_bg} className="w-[45%]" alt=""/>
					:
					<></>
				}
			</div>
			{window.innerWidth > 1024
				? <></>

				:
				<div className="flex flex-col my-8">
					<a href="https://tutjdut.ru/" target="_blank"
					   className="font-proxima-extrabold mb-6 mx-auto shadow-2xl rounded-2xl bg-[#0CD4F7] py-4 px-8 md:px-10  text-white text-2xl md:text-3xl   leading-6 tracking-tighter">вход
						в систему
					</a>
					<div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-2 justify-between px-4">
						<div className="flex items-center gap-4 ">
							<img className="w-18 sm:w-16 md:w-20" src={tg} alt="telegram_link"/>
							<p className="font-proxima-extrabold md:font-proxima-black text-[#414141] text-2xl sm:text-2xl leading-6 tracking-tighter">технический <br/>чат
								в Telegram</p>
						</div>
						<div className="flex-col">
							<a className="block ml-3 lg:ml-2 mb-2 font-proxima-black mb-4 lg:mb-6 text-[#414141] text-3xl sm:text-3xl leading-6 tracking-tighter"
							   href="tel:+74993500797">+7 499 350 07 97</a>
						</div>
					</div>
				</div>

			}
			{window.innerWidth > 920
				?
				<ul className="flex-col md+:flex md+:flex-row justify-between items-center max-w-container mx-auto px-4 my-12">
					<li className="flex gap-1 items-center danger__logo">
						<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
						     xmlnssvgjs="http://svgjs.com/svgjs" version="1.1" className="w-16 lg:w-20" x="0"
						     y="0" viewBox="0 0 474.94466 474"
						     xmlSpace="preserve">
							<g>
								<linearGradient id="a">
									<stop className="danger__logo__color__first" stopOpacity="1" stopColor="#414141"
									      offset="0"></stop>
									<stop className="danger__logo__color__second" stopOpacity="1" stopColor="#414141"
									      offset="1"></stop>
								</linearGradient>
								<linearGradient id="b" gradientUnits="userSpaceOnUse" x1="237.472329" x2="237.472329"
								                xlinkHref="#a"
								                y1="433.480908" y2="-61.463092"></linearGradient>
								<linearGradient id="c" gradientUnits="userSpaceOnUse" x1="240.400329" x2="240.400329"
								                xlinkHref="#a"
								                y1="433.480908" y2="-61.463092"></linearGradient>
								<path
									d="m467.617188 347.714844-181.472657-318.9375c-9.957031-17.5-28.539062-28.304688-48.671875-28.304688-20.132812 0-38.714844 10.804688-48.671875 28.304688l-181.472656 318.9375c-9.863281 17.332031-9.765625 38.609375.265625 55.847656 10.027344 17.242188 28.46875 27.847656 48.414062 27.847656h362.929688c19.945312 0 38.386719-10.605468 48.414062-27.847656 10.027344-17.238281 10.128907-38.515625.265626-55.847656zm-14.105469 47.804687c-7.105469 12.371094-20.308594 19.96875-34.574219 19.890625h-362.929688c-14.246093 0-27.417968-7.578125-34.582031-19.890625-7.160156-12.316406-7.230469-27.511719-.183593-39.894531l181.460937-318.9375c7.113281-12.5 20.386719-20.21875 34.769531-20.21875 14.382813 0 27.65625 7.71875 34.769532 20.21875l181.460937 318.9375c7.128906 12.363281 7.058594 27.601562-.191406 39.894531zm0 0"
									fill="url(#b)" data-original="url(#b)"></path>
								<path
									d="m297.289062 159.410156h-97.847656l-36.578125 128h56.847657l-20.636719 103.304688 118.863281-151.304688h-52.648438zm-12.28125 96-57.136718 72.695313 11.359375-56.695313h-55.148438l27.421875-96h62.152344l-32 80zm0 0"
									fill="url(#c)" data-original="url(#c)"></path>
							</g>
						</svg>
						<p className="ml-2 font-proxima-light text-lg leading-6 w-2/3">Контроль юридических и финансовых
							рисков</p>
					</li>
					<li className="flex gap-1 items-center danger__logo">
						<svg className="w-16 lg:w-20" viewBox="0 0 151 151" version="1.1"
						     xmlns="http://www.w3.org/2000/svg"
						     xmlnsXlink="http://www.w3.org/1999/xlink">
							<title>link</title>
							<defs>
								<linearGradient x1="4.28757664%" y1="10.7561398%" x2="102.888087%" y2="74.7759352%"
								                id="linearGradient-1">
									<stop className="danger__logo__color__first" stopColor="#414141" offset="0%"></stop>
									<stop className="danger__logo__color__second" stopColor="#414141"
									      offset="100%"></stop>
								</linearGradient>
							</defs>
							<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
								<g id="Artboard" transform="translate(-35.000000, -18.000000)"
								   fill="url(#linearGradient-1)"
								   fillRule="nonzero">
									<g id="link" transform="translate(35.000000, 18.000000)">
										<path
											d="M85.9312751,107.099121 L54.9854052,138.126269 C44.1801837,148.957784 26.6629554,148.957784 15.8577339,138.126269 L12.8240673,135.08324 C2.03735321,124.243994 2.03735321,106.697095 12.8240673,95.8578491 L40.7378124,67.8721844 C51.5430338,57.0391233 69.0602622,57.0391233 79.8654837,67.8721844 L85.9328172,73.9551505 C86.5296801,74.5690135 87.4087805,74.8133219 88.2339006,74.5968463 C89.0605633,74.3788245 89.705237,73.7309436 89.9226985,72.9036972 C90.1386179,72.0749047 89.8949372,71.1935392 89.2826518,70.5966851 L83.213776,64.5152652 C70.5593594,51.8282449 50.042394,51.8282449 37.3879778,64.5152652 L9.47577498,92.4993838 C-3.15859166,105.194136 -3.15859166,125.746954 9.47577498,138.443252 L12.5094416,141.484735 C25.1638582,154.171755 45.6808235,154.171755 58.3352397,141.484735 L89.2811096,110.457587 C90.1848865,109.526741 90.1756326,108.040791 89.2595178,107.122315 C88.3418605,106.20384 86.8597281,106.193016 85.9312751,107.099121 Z"
											id="Path"></path>
										<path
											d="M138.491792,9.51526516 C125.837064,-3.17175505 105.319594,-3.17175505 92.6648662,9.51526516 L61.7166918,40.5408672 C60.812893,41.4717124 60.8236889,42.9592097 61.7398267,43.8776848 C62.6559644,44.7961603 64.1381329,44.8054377 65.0666088,43.8993326 L96.0132406,12.8737309 C106.818728,2.04066984 124.336388,2.04066984 135.141875,12.8737309 L138.175617,15.9152137 C148.962596,26.7544598 148.962596,44.302905 138.175617,55.142151 L110.262726,83.1278157 C99.4587815,93.9608767 81.9395793,93.9608767 71.1340921,83.1278157 L65.0666088,77.0417569 C64.4712738,76.4278939 63.5921518,76.1835858 62.7654687,76.4016076 C61.9403283,76.6196295 61.2956388,77.2659638 61.0781719,78.0947563 C60.8607046,78.9220027 61.1043912,79.8033681 61.7166918,80.4002223 L67.7841751,86.4847348 C80.4389029,99.1717551 100.956373,99.1717551 113.611101,86.4847348 L141.523992,58.4975237 C154.158669,45.8027723 154.158669,25.2499536 141.523992,12.5552022 L138.491792,9.51526516 Z"
											id="Path"></path>
									</g>
								</g>
							</g>
						</svg>
						<p className="ml-2 font-proxima-light text-lg leading-6 w-2/3">Автоматическая отработка типовых
							шагов </p>
					</li>
					<li className="flex gap-1 items-center suitcase__logo">
						<svg className="w-16 lg:w-20" viewBox="0 0 67 60" fill="none"
						     xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd"
							      className="suitcase__logo__color"
							      d="M22.4905 59.0993H22.4884H22.4861H22.4836H22.4808H22.4777H22.4743C16.7039 59.0988 11.2402 59.0984 6.74083 59.0983C3.02376 59.0983 0 56.0746 0 52.3576V17.7669C0 14.0497 3.02376 11.0261 6.74083 11.0261C14.5251 11.0227 20.2702 11.0251 20.3744 11.0261V5.99268C20.3744 2.68823 23.0632 0 26.3676 0H40.2424C43.5469 0 46.2351 2.68823 46.2351 5.99268V11.0261H60.2592C63.9764 11.0261 67 14.0499 67 17.7669V52.3575C67 56.0746 63.9762 59.0983 60.2592 59.0983C51.9736 59.1019 36.3492 59.1005 22.4905 59.0993ZM48.8131 57.5157V12.6088H18.1869V57.5157H48.8131ZM53.2242 12.6088V57.5157H50.3958V12.6088H53.2242ZM16.6042 57.5157V12.6088H13.7758V57.5157H16.6042ZM65.4173 17.7669V52.3576C65.4173 55.2019 63.1035 57.5157 60.2592 57.5157H54.8068V12.6088H60.2592C63.1035 12.6088 65.4173 14.9224 65.4173 17.7669ZM26.3677 1.58258C23.9355 1.58258 21.9571 3.56094 21.9571 5.99268H21.957V11.0256H24.5948V5.99268C24.5948 5.0154 25.3903 4.22043 26.3676 4.22043H40.2423C41.2195 4.22043 42.0145 5.0154 42.0145 5.99268V11.0256H44.6524V5.99268C44.6524 3.56094 42.674 1.58258 40.2423 1.58258H26.3677ZM26.1775 5.99268C26.1775 5.89166 26.2662 5.80314 26.3676 5.80314H40.2423C40.3433 5.80314 40.4318 5.8918 40.4318 5.99268V11.0261H26.1775V5.99268ZM6.74083 12.6088C3.89647 12.6088 1.58271 14.9226 1.58271 17.7669V52.3576C1.58271 55.2019 3.89647 57.5157 6.74083 57.5157H12.1932V12.6088H6.74083Z"
							      fill="#414141"/>
						</svg>

						<p className="ml-2 font-proxima-light text-lg leading-6 w-2/3">Специализируемся на работе с
							трудовыми мигрантами</p>
					</li>
				</ul>
				:
				<div className="flex flex-col xs+:flex-row">
					<img src={hero_bg} className="w-[100%] xs+:w-[50%] ml-[0px] xs+:ml-[-100px] md:ml-0" alt=""/>
					<ul className="flex flex-col md+:flex px-8 xs+:px-0 gap-4 xs+:[gap-2]  md+:flex-row justify-between items-start max-w-container mx-auto my-8 sm:my-12">
						<li className="flex gap-1 items-center danger__logo">
							<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
							     xmlnssvgjs="http://svgjs.com/svgjs" version="1.1" className="w-12 xs+:w-16 lg:w-20"
							     x="0"
							     y="0" viewBox="0 0 474.94466 474"
							     xmlSpace="preserve">
								<g>
									<linearGradient id="a">
										<stop className="danger__logo__color__first" stopOpacity="1" stopColor="#414141"
										      offset="0"></stop>
										<stop className="danger__logo__color__second" stopOpacity="1"
										      stopColor="#414141"
										      offset="1"></stop>
									</linearGradient>
									<linearGradient id="b" gradientUnits="userSpaceOnUse" x1="237.472329"
									                x2="237.472329"
									                xlinkHref="#a"
									                y1="433.480908" y2="-61.463092"></linearGradient>
									<linearGradient id="c" gradientUnits="userSpaceOnUse" x1="240.400329"
									                x2="240.400329"
									                xlinkHref="#a"
									                y1="433.480908" y2="-61.463092"></linearGradient>
									<path
										d="m467.617188 347.714844-181.472657-318.9375c-9.957031-17.5-28.539062-28.304688-48.671875-28.304688-20.132812 0-38.714844 10.804688-48.671875 28.304688l-181.472656 318.9375c-9.863281 17.332031-9.765625 38.609375.265625 55.847656 10.027344 17.242188 28.46875 27.847656 48.414062 27.847656h362.929688c19.945312 0 38.386719-10.605468 48.414062-27.847656 10.027344-17.238281 10.128907-38.515625.265626-55.847656zm-14.105469 47.804687c-7.105469 12.371094-20.308594 19.96875-34.574219 19.890625h-362.929688c-14.246093 0-27.417968-7.578125-34.582031-19.890625-7.160156-12.316406-7.230469-27.511719-.183593-39.894531l181.460937-318.9375c7.113281-12.5 20.386719-20.21875 34.769531-20.21875 14.382813 0 27.65625 7.71875 34.769532 20.21875l181.460937 318.9375c7.128906 12.363281 7.058594 27.601562-.191406 39.894531zm0 0"
										fill="url(#b)" data-original="url(#b)"></path>
									<path
										d="m297.289062 159.410156h-97.847656l-36.578125 128h56.847657l-20.636719 103.304688 118.863281-151.304688h-52.648438zm-12.28125 96-57.136718 72.695313 11.359375-56.695313h-55.148438l27.421875-96h62.152344l-32 80zm0 0"
										fill="url(#c)" data-original="url(#c)"></path>
								</g>
							</svg>
							<p className="ml-2 font-proxima-light text-md xs+:text-lg leading-6 w-2/3">Контроль
								юридических и финансовых
								рисков</p>
						</li>
						<li className="flex gap-1 items-center danger__logo">
							<svg className="w-12 xs+:w-16 lg:w-20" viewBox="0 0 151 151" version="1.1"
							     xmlns="http://www.w3.org/2000/svg"
							     xmlnsXlink="http://www.w3.org/1999/xlink">
								<title>link</title>
								<defs>
									<linearGradient x1="4.28757664%" y1="10.7561398%" x2="102.888087%" y2="74.7759352%"
									                id="linearGradient-1">
										<stop className="danger__logo__color__first" stopColor="#414141"
										      offset="0%"></stop>
										<stop className="danger__logo__color__second" stopColor="#414141"
										      offset="100%"></stop>
									</linearGradient>
								</defs>
								<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
									<g id="Artboard" transform="translate(-35.000000, -18.000000)"
									   fill="url(#linearGradient-1)"
									   fillRule="nonzero">
										<g id="link" transform="translate(35.000000, 18.000000)">
											<path
												d="M85.9312751,107.099121 L54.9854052,138.126269 C44.1801837,148.957784 26.6629554,148.957784 15.8577339,138.126269 L12.8240673,135.08324 C2.03735321,124.243994 2.03735321,106.697095 12.8240673,95.8578491 L40.7378124,67.8721844 C51.5430338,57.0391233 69.0602622,57.0391233 79.8654837,67.8721844 L85.9328172,73.9551505 C86.5296801,74.5690135 87.4087805,74.8133219 88.2339006,74.5968463 C89.0605633,74.3788245 89.705237,73.7309436 89.9226985,72.9036972 C90.1386179,72.0749047 89.8949372,71.1935392 89.2826518,70.5966851 L83.213776,64.5152652 C70.5593594,51.8282449 50.042394,51.8282449 37.3879778,64.5152652 L9.47577498,92.4993838 C-3.15859166,105.194136 -3.15859166,125.746954 9.47577498,138.443252 L12.5094416,141.484735 C25.1638582,154.171755 45.6808235,154.171755 58.3352397,141.484735 L89.2811096,110.457587 C90.1848865,109.526741 90.1756326,108.040791 89.2595178,107.122315 C88.3418605,106.20384 86.8597281,106.193016 85.9312751,107.099121 Z"
												id="Path"></path>
											<path
												d="M138.491792,9.51526516 C125.837064,-3.17175505 105.319594,-3.17175505 92.6648662,9.51526516 L61.7166918,40.5408672 C60.812893,41.4717124 60.8236889,42.9592097 61.7398267,43.8776848 C62.6559644,44.7961603 64.1381329,44.8054377 65.0666088,43.8993326 L96.0132406,12.8737309 C106.818728,2.04066984 124.336388,2.04066984 135.141875,12.8737309 L138.175617,15.9152137 C148.962596,26.7544598 148.962596,44.302905 138.175617,55.142151 L110.262726,83.1278157 C99.4587815,93.9608767 81.9395793,93.9608767 71.1340921,83.1278157 L65.0666088,77.0417569 C64.4712738,76.4278939 63.5921518,76.1835858 62.7654687,76.4016076 C61.9403283,76.6196295 61.2956388,77.2659638 61.0781719,78.0947563 C60.8607046,78.9220027 61.1043912,79.8033681 61.7166918,80.4002223 L67.7841751,86.4847348 C80.4389029,99.1717551 100.956373,99.1717551 113.611101,86.4847348 L141.523992,58.4975237 C154.158669,45.8027723 154.158669,25.2499536 141.523992,12.5552022 L138.491792,9.51526516 Z"
												id="Path"></path>
										</g>
									</g>
								</g>
							</svg>
							<p className="ml-2 font-proxima-light text-md xs+:text-lg leading-6 w-2/3">Автоматическая
								отработка типовых
								шагов </p>
						</li>
						<li className="flex gap-1 items-center suitcase__logo">
							<svg className="w-12 xs+:w-16 lg:w-20" viewBox="0 0 67 60" fill="none"
							     xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd"
								      className="suitcase__logo__color"
								      d="M22.4905 59.0993H22.4884H22.4861H22.4836H22.4808H22.4777H22.4743C16.7039 59.0988 11.2402 59.0984 6.74083 59.0983C3.02376 59.0983 0 56.0746 0 52.3576V17.7669C0 14.0497 3.02376 11.0261 6.74083 11.0261C14.5251 11.0227 20.2702 11.0251 20.3744 11.0261V5.99268C20.3744 2.68823 23.0632 0 26.3676 0H40.2424C43.5469 0 46.2351 2.68823 46.2351 5.99268V11.0261H60.2592C63.9764 11.0261 67 14.0499 67 17.7669V52.3575C67 56.0746 63.9762 59.0983 60.2592 59.0983C51.9736 59.1019 36.3492 59.1005 22.4905 59.0993ZM48.8131 57.5157V12.6088H18.1869V57.5157H48.8131ZM53.2242 12.6088V57.5157H50.3958V12.6088H53.2242ZM16.6042 57.5157V12.6088H13.7758V57.5157H16.6042ZM65.4173 17.7669V52.3576C65.4173 55.2019 63.1035 57.5157 60.2592 57.5157H54.8068V12.6088H60.2592C63.1035 12.6088 65.4173 14.9224 65.4173 17.7669ZM26.3677 1.58258C23.9355 1.58258 21.9571 3.56094 21.9571 5.99268H21.957V11.0256H24.5948V5.99268C24.5948 5.0154 25.3903 4.22043 26.3676 4.22043H40.2423C41.2195 4.22043 42.0145 5.0154 42.0145 5.99268V11.0256H44.6524V5.99268C44.6524 3.56094 42.674 1.58258 40.2423 1.58258H26.3677ZM26.1775 5.99268C26.1775 5.89166 26.2662 5.80314 26.3676 5.80314H40.2423C40.3433 5.80314 40.4318 5.8918 40.4318 5.99268V11.0261H26.1775V5.99268ZM6.74083 12.6088C3.89647 12.6088 1.58271 14.9226 1.58271 17.7669V52.3576C1.58271 55.2019 3.89647 57.5157 6.74083 57.5157H12.1932V12.6088H6.74083Z"
								      fill="#414141"/>
							</svg>

							<p className="ml-2 font-proxima-light text-md xs+:text-lg leading-6 w-2/3">Специализируемся
								на работе с
								трудовыми мигрантами</p>
						</li>
					</ul>
				</div>
			}

		</header>
	);
};

export default AppHeader;
