import React, {useState} from 'react';
import line_mob from "../assets/mob_izo_line_black.svg"
import blue_line_mob from "../assets/mob_izo_line_color.svg"
import line from "../assets/izo_line _black.svg"
import blue_line from "../assets/izo_line_color.svg"
import whoarebg from "../assets/whoarebg.png"
import phone from "../assets/phone.png"
import arrow from "../assets/arrow.svg"

const AppWhoAre = () => {
	const [firstLine, setFirstLine] = useState(false)
	const handleFirstLine = () => {
		setFirstLine(!firstLine)
		document.querySelector(".first__line__black").classList.toggle('first__line__black__hidden')
		document.querySelector(".first__line__blue").classList.toggle('first__line__blue__hidden')
	}
	const handleFirstLineMob = () => {
		setFirstLine(!firstLine)
		document.querySelector(".first__line__mob__black").classList.toggle('first__line__mob__black__hidden')
		document.querySelector(".first__line__mob__blue").classList.toggle('first__line__mob__blue__hidden')
	}

	const handleSecondLineMob = () => {
		setFirstLine(!firstLine)
		document.querySelector(".second__line__mob__black").classList.toggle('second__line__mob__black__hidden')
		document.querySelector(".second__line__mob__blue").classList.toggle('second__line__mob__blue__hidden')
	}

	const handleThirdLineMob = () => {
		setFirstLine(!firstLine)
		document.querySelector(".third__line__mob__black").classList.toggle('third__line__mob__black__hidden')
		document.querySelector(".third__line__mob__blue").classList.toggle('third__line__mob__blue__hidden')
	}



	const [secondLine, setSecondLine] = useState(false)
	const handleSecondLine = () => {
		setSecondLine(!secondLine)
		document.querySelector(".second__line__black").classList.toggle('second__line__black__hidden')
		document.querySelector(".second__line__blue").classList.toggle('second__line__blue__hidden')
	}
	const [thirdLine, setThirdLine] = useState(false)
	const handleThirdLine = () => {
		setThirdLine(!thirdLine)
		document.querySelector(".third__line__black").classList.toggle('third__line__black__hidden')
		document.querySelector(".third__line__blue").classList.toggle('third__line__blue__hidden')
	}
	const testHandleFirstLine = () => {
		// for (let i = 0; i < 53; i++) {
		// 	document.querySelectorAll(".line_mob path")
		// }
		console.log(document.querySelectorAll(".line_mob"))

	}
	return (
		<div className="relative">
			<div className="max-w-container mx-auto px-4 sm:px-8 mt-20">
				<h2 className="font-proxima-extrabold text-4xl xs+:text-6xl lg:text-7xl text-[#414141] mb-12 xs+:mb-24">для
					кого мы</h2>
				<div>
					{window.innerWidth < 920
						?
						<div>
							<div
								className={" relative " +
									" pb-40 mb-40 sm:mb-40"}
								onMouseEnter={handleFirstLineMob}
								onMouseLeave={handleFirstLineMob}>
								<img className="absolute w-[100%] first__line__mob__black top-32 sm+:top-24 sm-:top-4 line_mob" src={line_mob} alt=""/>
								<img className="absolute w-[100%] first__line__mob__blue first__line__mob__blue__hidden top-32
								sm+:top-24 sm-:top-4 line_mob__blue" src={blue_line_mob} alt=""/>
								<div>
									<div>
										<p className="font-proxima-extrabold mb-0 sm:mb-4 text-2xl sm:text-4xl text-[#414141] tracking-[-2px]">малый
											бизнес. <span className="block text-[#1db6ff]">старт</span></p>
										<p className="font-proxima-extrabold text-2xl sm:text-4xl leading-8 text-[#414141] tracking-[-2px]">>
											5 <br/> мигрантов</p>
									</div>
									<p className="max-w-[220px] xs+:max-w-[340px] text-sm xs-:text-xl xs+:text-2xl md:text-3xl md+:text-2xl xl:text-[1.6rem] tracking-[-1.2px] md:tracking-[-2px]
								 text-[#414141] ml-2 font-proxima-regular leading-7 mt-16 xs+:mt-20 sm:mt-10 pb-12 xs-:pb-20 xs+:pb-4 md:mt-16 ">
										штраф 800 тыс. руб. за каждого неоформенного гражданина СНГ; проверки редки, но
										критичны
										для бизнеса
									</p>
								</div>

								<div className="flex flex-col mt-0 xs+:mt-20">
									<p className="max-w-[220px] xs+:max-w-[340px] text-sm xs-:text-xl xs+:text-2xl mt-10 xs+:mt-20 font-proxima-regular translate-y-[-30px]
								 md:translate-y-0 md:text-3xl md+:text-2xl xl:text-[1.6rem] sm+-:mt-40
								  tracking-[-1.2px] md:tracking-[-2px] text-[#414141] xl:ml-28 ml-auto leading-7">не
										хватает времени и знаний для легального трудоустройства сотрудников</p>
									<p className="max-w-[210px] xs-:mt-20 font-proxima-regular translate-y-[-30px]
								 md:translate-y-0 max-w-[220px] xs+:max-w-3480px] text-sm xs-:text-xl xs+:text-2xl md:text-3xl md+:text-2xl xl:text-[1.6rem]
								  tracking-[-1.2px] md:tracking-[-2px] text-[#414141] leading-7 mr-auto mt-10 xs+:pb-0 xs+:mt-36 md+:mt-28 xl:mt-32  mr-2">
										<span className="font-proxima-black text-[#1db6ff]">ТУТЖДУТ.ЦИФРА</span>
										<br/>
										снижение рисков и затрат на учет за
										4 990руб./мес.</p>
								</div>
								<img src={arrow} className="absolute bouncing -bottom-14 right-[40%]" alt=""/>
							</div>
							<div
								className={"relative" +
									" pb-40 mb-40 sm:mb-40"}
								onMouseEnter={handleSecondLineMob}
								onMouseLeave={handleSecondLineMob}>
								<img className="absolute w-[100%] second__line__mob__black top-32 sm+:top-24 sm-:top-4 line_mob" src={line_mob} alt=""/>
								<img className="absolute w-[100%] second__line__mob__blue second__line__mob__blue__hidden top-32
								sm+:top-24 sm-:top-4 line_mob__blue" src={blue_line_mob} alt=""/>
								<div>
									<div>
										<p className="font-proxima-extrabold mb-0 sm:mb-4 text-2xl sm:text-4xl text-[#414141] tracking-[-2px]">малый
											бизнес. <span className="block text-[#1db6ff]">развитие</span></p>
										<p className="font-proxima-extrabold text-2xl sm:text-4xl leading-8 text-[#414141] tracking-[-2px]">>
											20 <br/> мигрантов</p>
									</div>
									<p className="max-w-[220px] xs+:max-w-[340px] text-sm xs-:text-xl xs+:text-2xl md:text-3xl
								 md+:text-2xl xl:text-[1.6rem] tracking-[-1.2px] md:tracking-[-2px]
								 text-[#414141] ml-2 font-proxima-regular leading-7 mt-20 xs-:mt-16 xs+:mt-20 sm:mt-10 pb-12 xs-:pb-20 xs+:pb-4 md:mt-16 ">
										штраф 800 тыс. руб. за каждого неоформенного мигранта; необходим консалтинг и
										слаженный продукт, экономящий время
									</p>
								</div>

								<div className="flex flex-col mt-0 xs+:mt-20">
									<p className="max-w-[220px] xs+:max-w-[340px] text-sm xs-:text-xl xs+:text-2xl mt-8 xs-:mt-10 xs+:mt-20
									font-proxima-regular translate-y-[-30px]
								    md:translate-y-0 md:text-3xl md+:text-2xl xl:text-[1.6rem]
								    tracking-[-1.2px] md:tracking-[-2px] text-[#414141] xl:ml-28 ml-auto leading-7">не
										проблема текучки кадров; проблема подбора, оформления и контроля
									</p>
									<p className="max-w-[210px] xs-:mt-20 font-proxima-regular translate-y-[-30px]
								 md:translate-y-0 max-w-[220px] xs+:max-w-3480px] text-sm xs-:text-xl xs+:text-2xl md:text-3xl md+:text-2xl xl:text-[1.6rem]
								  tracking-[-1.2px] md:tracking-[-2px] text-[#414141] leading-7 mr-auto mt-12 xs+:pb-0 xs+:mt-36 md+:mt-28 xl:mt-32  mr-2">
										<span className="font-proxima-black text-[#1db6ff]">ТУТЖДУТ.ЦИФРА</span>
										<br/>
										помощь с подбором, оформлением и текучкой за 15 990руб./мес.
									</p>
								</div>
								<img src={arrow} className="absolute bouncing -bottom-12 right-[40%]" alt=""/>
							</div>
							<div
								className={"relative pb-28  xs:pb-16 sm:pb-20 mb-40"}
								onMouseEnter={handleThirdLineMob}
								onMouseLeave={handleThirdLineMob}>
								<img className="absolute w-[100%] third__line__mob__black top-24 sm+:top-24 sm-:top-4 line_mob" src={line_mob} alt=""/>
								<img className="absolute w-[100%] third__line__mob__blue third__line__mob__blue__hidden top-24
								sm+:top-24 sm-:top-4 line_mob__blue" src={blue_line_mob} alt=""/>
								<div>
									<div>
										<p className="font-proxima-extrabold mb-0 sm:mb-4 text-2xl sm:text-4xl text-[#414141] tracking-[-2px]">малый
											бизнес. <span className="block text-[#1db6ff]">развитие</span></p>
										<p className="font-proxima-extrabold text-2xl sm:text-4xl leading-8 text-[#414141] tracking-[-2px]">>
											20 <br/> мигрантов</p>
									</div>
									<p className="max-w-[200px] xs+:max-w-[340px] text-sm xs-:max-w-[260px] xs-:text-xl xs+:text-2xl md:text-3xl
								 md+:text-2xl xl:text-[1.6rem] tracking-[-1.2px] md:tracking-[-2px]
								 text-[#414141] ml-2 font-proxima-regular leading-7 mt-10 sm:mt-6 sm:mb-8 md:mt-16 ">
										необходимость контороля всех этапов найма и управления персоналом, много
										«рутины»
										бухгалтерии и отдела кадров
									</p>
								</div>

								<div className="flex flex-col mt-20 xs-:mt-32 xs+:mt-48 sm-:mt-56 md:mt-32">
									<p className="max-w-[200px] pt-6 xs+:max-w-[340px] pt-0 text-sm xs-:max-w-[290px] xs-:text-xl xs+:text-2xl font-proxima-regular translate-y-[-30px]
								 md:translate-y-0 md:text-3xl md+:text-2xl xl:text-[1.6rem]
									md:mt-14
								  tracking-[-1.2px] md:tracking-[-2px] text-[#414141] xl:ml-28 ml-auto leading-7">
										частые проверки, высокие риски, много повторяющихся процессов; неэффективное
										расходование времени бэк-офиса
									</p>
									<p className=" font-proxima-regular translate-y-[-30px]
								 md:translate-y-0 max-w-[240px] xs-:max-w-[260px] xs+:max-w-[340px] text-sm xs-:text-xl xs+:text-2xl
								  md:text-3xl md+:text-2xl xl:text-[1.6rem]
								  tracking-[-1.2px] md:tracking-[-2px] text-[#414141]
								  leading-7 mr-auto xs+:pb-0 xs+:mt-24 mt-8 xs:mt-12 md+:mt-28 xl:mt-32  mr-2">
										<span className="font-proxima-black text-[#1db6ff]">ТУТЖДУТ.ЦИФРА</span>
										<br/>
										уменьшение нагрузки на бухгалтерию и отдел кадров в 3 раза —
										<a className="relative border-b-4 border-dashed border-[#1DB6FF]" href="#">
											получите спецпредложение
											<img className="absolute hidden xs+:block -right-12 top-6 w-10" src={phone}
											     alt=""/>
										</a>
									</p>
								</div>

							</div>
						</div>
						:
						<div>
							<div className="mb-40 relative"
							     onMouseEnter={handleFirstLine}
							     onMouseLeave={handleFirstLine}
							>
								<img className="absolute left-[14%] first__line__blue first__line__blue__hidden  w-[70%]  md+:top-20 lg:top-12 " src={blue_line} alt=""/> :
								<img className="absolute left-[14%] first__line__black  w-[70%]  md+:top-20 lg:top-12" src={line} alt=""/>
								<div className="flex">
									<div>
										<p className="font-proxima-extrabold mb-4 text-4xl text-[#414141] tracking-[-2px]">малый
											бизнес. <span className="block text-[#1db6ff]">старт</span></p>
										<p className="font-proxima-extrabold text-4xl leading-8 text-[#414141] tracking-[-2px]">>
											5 <br/> мигрантов</p>
									</div>
									<p className="max-w-[300px] font-proxima-semibold  text-[1.4rem] md+:text-2xl xl:text-[1.6rem] tracking-[-2px] text-[#414141] ml-auto xl:mr-40 mr-24 leading-7 mt-8 xl:mt-14">
										штраф 800 тыс. руб. за каждого неоформенного гражданина СНГ; проверки редки, но
										критичны
										для бизнеса
									</p>
								</div>
								<div className="flex mt-10">
									<p className="max-w-[240px] font-proxima-semibold  text-[1.4rem] md+:text-2xl xl:text-[1.6rem] tracking-[-2px] text-[#414141] xl:ml-28 ml-10 leading-7">не
										хватает времени и знаний для легального трудоустройства сотрудников</p>
									<p className="max-w-[220px] font-proxima-semibold  text-[1.4rem] md+:text-2xl xl:text-[1.6rem] tracking-[-2px] text-[#414141] leading-7 ml-auto mt-20 md+:mt-28 xl:mt-32  mr-2">
										<span className="font-proxima-black text-[#1db6ff]">ТУТЖДУТ.ЦИФРА</span>
										<br/>
										снижение рисков и затрат на учет за
										4 990руб./мес.</p>
								</div>
							</div>
							<div className="mb-40 relative" onMouseEnter={handleSecondLine}
							     onMouseLeave={handleSecondLine}>
								<img className="absolute left-[14%] second__line__blue second__line__blue__hidden  w-[70%]  md+:top-20 lg:top-12 " src={blue_line} alt=""/> :
								<img className="absolute left-[14%] second__line__black  w-[70%]  md+:top-20 lg:top-12" src={line} alt=""/>
								<div className="flex">
									<div>
										<p className="font-proxima-extrabold mb-4 text-4xl text-[#414141] tracking-[-2px]">малый
											бизнес. <span className="block text-[#1db6ff]">развитие</span></p>
										<p className="font-proxima-extrabold text-4xl leading-8 text-[#414141] tracking-[-2px]">>
											20 <br/> мигрантов</p>
									</div>
									<p className="max-w-[300px] font-proxima-semibold text-[1.4rem] md+:text-2xl xl:text-[1.6rem] tracking-[-2px] text-[#414141] ml-auto xl:mr-40 mr-24 leading-7 mt-8 xl:mt-12">
										штраф 800 тыс. руб. за каждого неоформенного мигранта; необходим консалтинг и
										слаженный
										продукт, экономящий время
									</p>
								</div>
								<div className="flex mt-10">
									<p className="max-w-[240px] font-proxima-semibold text-[1.4rem] md+:text-2xl xl:text-[1.6rem] tracking-[-2px] text-[#414141] xl:ml-28 ml-10 leading-7">проблема
										текучки кадров; проблема подбора, оформления и контроля</p>
									<p className="max-w-[240px] font-proxima-semibold text-[1.4rem] md+:text-2xl xl:text-[1.6rem] tracking-[-2px] text-[#414141] leading-7 ml-auto mt-20 md+:mt-28 xl:mt-32  mr-2">
										<span className="font-proxima-black text-[#1db6ff]">ТУТЖДУТ.ЦИФРА</span>
										<br/>
										помощь с подбором, оформлением и текучкой за 15 990руб./мес.</p>
								</div>
							</div>
							<div className="mb-40 relative line" onMouseEnter={handleThirdLine}
							     onMouseLeave={handleThirdLine}>
								<img className="absolute left-[14%] third__line__blue third__line__blue__hidden  w-[70%]  top-36 " src={blue_line} alt=""/> :
								<img className="absolute left-[14%] third__line__black  w-[70%]  top-36" src={line} alt=""/>
								<div className="flex">
									<div>
										<p className="font-proxima-extrabold mb-4 text-4xl text-[#414141] tracking-[-2px]">
											<span className="block text-[#1db6ff]">свой бизнес</span>
											по аутсорсу <br/>
											и аутстаффингу
										</p>
										<p className="font-proxima-extrabold text-4xl leading-8 text-[#414141] tracking-[-2px]"> 20+<br/>
											<span className="text-3xl">мигрантов</span></p>

									</div>
									<p className="max-w-[300px] font-proxima-semibold text-[1.4rem] md+:text-2xl
								 xl:text-[1.6rem] tracking-[-2px] text-[#414141] ml-auto xl:mr-40 mr-24 leading-7 mt-10 xl:mt-20">
										частые проверки, высокие риски, много повторяющихся процессов; неэффективное
										расходование времени бэк-офиса
									</p>
								</div>
								<div className="flex mt-10">
									<p className="max-w-[240px] font-proxima-semibold text-[1.4rem] md+:text-2xl xl:text-[1.6rem] tracking-[-2px] text-[#414141] xl:ml-28 ml-10 leading-7">необходимость
										контороля всех этапов найма и управления персоналом, много «рутины» бухгалтерии
										и
										отдела
										кадров</p>
									<p className="max-w-[280px] px-4 relative font-proxima-semibold mr-4 text-[1.4rem] md+:text-2xl xl:text-[1.6rem] tracking-[-2px] text-[#414141] leading-7 ml-auto mt-28 md+:mt-40 xl:mt-40  mr-2">
										<span className="font-proxima-black text-[#1db6ff]">ТУТЖДУТ.ЦИФРА</span>
										<br/>
										уменьшение нагрузки на бухгалтерию и отдел кадров в 3 раза — <br/><span
										className="border-b-[6px] leading-8 border-dashed border-[#1db6ff]">получите спецпредложение</span>
										<a className="absolute right-3 -bottom-3" href="tel:+74993500797">
											<img className="w-12" src={phone} alt=""/>
										</a>
									</p>

								</div>
							</div>
						</div>
					}


				</div>

			</div>
			<img className="absolute top-12 xs+:top-0 w-28 xs+:w-10 right-0" src={whoarebg} alt=""/>
		</div>);
};

export default AppWhoAre;
