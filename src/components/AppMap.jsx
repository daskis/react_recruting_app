import React from 'react';
import tgblue from "../assets/tg-blue.svg"
import mapMob from "../assets/map-mob.png"
const AppMap = () => {
	return (
		<div className={window.innerWidth < 769 ? "flex flex-col" :"bg-map bg-cover bg-no-repeat"}>
			<div className="max-w-container mx-auto px-4 flex justify-end">
				<div className={window.innerWidth < 769 ? "bg-white rounded-xl my-6 lg:my-12 md:max-w-md" :"bg-white" +
					" p-6 rounded-xl my-6 lg:my-12 md:max-w-md"}>
					<p className="font-proxima-extrabold text-4xl lg:text-7xl pr-16 mb-2 text-[#414141]">Контакты</p>
					<p className="font-proxima-semibold text-xl lg:text-2xl max-w-[90%] text-[#414141] mb-4 lg:mb-8">
						Москва, Новоясеневский проспект 2Ас1,
						Твин Плаза, 4 этаж, головной офис «ТУТЖДУТ».
					</p>
					<div>
						<a href="tel:+74993500797" className="font-proxima-black text-2xl lg:text-3xl leading-4 text-[#414141]">+7 499
							350 07 97</a>
						<span className="opacity-50 text-[#414141] block text-lg lg:text-xl font-proxima-regular mb-4 lg:mb-8 leading-4">будние дни с 10 до 19ч</span>
					</div>
					<div>
						<a href="#" className="flex items-center gap-4 mb-4 lg:mb-8 ">
							<img src={tgblue} className="w-9 lg:w-12" alt=""/>
							<p className="font-proxima-black text-2xl lg:text-4xl leading-4 tracking-[-1px] text-[#414141]">@tutjdut_migrants</p>
						</a>
					</div>
					<p className="font-proxima-regular text-xl lg:text-2xl lg:text-4xl leading-5 tracking-[-1px] opacity-[65%] text-[#414141]">Технический чат в Telegram. с 8 до 22 по Мск. Ежедневно.</p>
				</div>
			</div>
			{window.innerWidth < 769 ? <img src={mapMob} className="w-full" alt=""/> : <></>}
		</div>
	);
};

export default AppMap;
