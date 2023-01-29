import React, {useEffect} from 'react';
import search from "../assets/search.png"
import workers from "../assets/workers.png"
import woman from "../assets/woman.png"
import woman2 from "../assets/woman2.png"
import hiring from "../assets/hiring.png"
import count from "../assets/count.png"
import AOS from "aos";
import "aos/dist/aos.css"
const AppTasks = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000
		})
	}, [])
	return (
		<div className="px-4 xs+:px-8 mt-40 overflow-x-hidden">
			<h2 className="max-w-container mx-auto font-proxima-extrabold text-5xl xs+:text-6xl lg:text-7xl text-[#414141] mb-24">решаемые
				задачи</h2>
			<ul className="">
				<li className="flex flex-col-reverse xs+:flex-row max-w-container items-center justify-between gap-4 xs+:gap-10 ml-auto my-16 xs+:my-10">
					<p className="text-[#414141] text-2xl lg:text-3xl w-[80%] xs+:w-[40%] leading-7 font-proxima-semibold">Поиск сотрудников из
						числа трудовых
						мигрантов и управление процессом найма</p>
						<img data-aos={"fade-right"} className="w-[80%] xs+:w-[50%]" src={search} alt=""/>
				</li>
				<li className="flex flex-col xs+:flex-row max-w-container items-center justify-between gap-4 xs+:gap-10 mr-auto my-16 xs+:my-10">
					<img data-aos={"fade-left"} className="w-[80%] xs+:w-[50%]" src={workers} alt=" "/>
					<p className="text-[#414141] text-2xl lg:text-3xl w-[80%] xs+:w-[40%] leading-7 font-proxima-semibold">Ведение кадрового
						учета трудовых мигрантов</p>
				</li>
				<li className="flex flex-col-reverse xs+:flex-row max-w-container items-center justify-between gap-4 xs+:gap-10 ml-auto my-16 xs+:my-10">
					<p className="text-[#414141] text-2xl lg:text-3xl w-[80%] xs+:w-[40%] leading-7 font-proxima-semibold">Автоматический
						документооборот, соответствующий миграционному законодательству</p>
					<img data-aos={"fade-right"} className="w-[80%] xs+:w-[50%]" src={woman} alt=""/>
				</li>
				<li className="flex flex-col xs+:flex-row max-w-container items-center justify-between gap-4 xs+:gap-10 mr-auto my-16 xs+:my-10">
					<img data-aos={"fade-left"} className="w-[80%] xs+:w-[50%]" src={woman2} alt=" "/>
					<p className="text-[#414141] text-2xl lg:text-3xl w-[80%] xs+:w-[40%] leading-7 font-proxima-semibold">Контроль сроков
						оплаты патентов на работу + переоформление документов</p>
				</li>
				<li className="flex flex-col-reverse xs+:flex-row max-w-container items-center justify-between gap-4 xs+:gap-10 ml-auto my-16 xs+:my-10">
					<p className="text-[#414141] text-2xl lg:text-3xl w-[80%] xs+:w-[40%] leading-7 font-proxima-semibold">Автоматическое
						формирование комплекта документов - уведомления о заключении трудовых договоров с иностранными
						гражданами -
					</p>
					<img data-aos={"fade-right"} className="w-[80%] xs+:w-[50%]" src={hiring} alt=""/>
				</li>
				<li className="flex flex-col xs+:flex-row max-w-container items-center justify-between gap-4 xs+:gap-10 mr-auto my-16 xs+:my-10">
					<img data-aos={"fade-left"} className="w-[80%] xs+:w-[50%]" src={count} alt=" "/>
					<p className="text-[#414141] text-2xl lg:text-3xl w-[80%] xs+:w-[40%] leading-7 font-proxima-semibold">Система учета
						сотрудников в разрезе объектов и юридических лиц</p>
				</li>
			</ul>
		</div>
	);
};

export default AppTasks;
