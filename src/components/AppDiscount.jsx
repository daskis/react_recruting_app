import React, {useState} from 'react';
import discountbg from "../assets/discountbg.png"

const AppDiscount = () => {
	const [tel, setTel] = useState("")
	const handleTel = (e) => {
		const limit = 10;
		setTel(event.target.value.slice(0, limit))
	}
	return (
		<div className={window.innerWidth < 769 ?  "mx-auto relative bg-discount-mob bg-cover px-4 xs+:px-8 py-10" +
			" bg-no-repeat" : "mx-auto relative bg-discount-mob bg-cover px-4 xs+:px-8 py-10"}>
			<div className="relative z-10 max-w-[80%] xs+:max-w-[70%] mx-auto md:max-w-[50%] ml-auto pt-6 xl:pt-16">
				<h3 className="text-white font-proxima-extrabold text-4xl xs+:text-5xl md:text-4xl lg:text-6xl xl:text-7xl leading-10 md:leading-8 xl:leading-[3.8rem]">
					Получите скидку
					<span className="block mt-4 md:mt-0 text-5xl xs+:text-7xl ">30%</span>
				</h3>
				<p className="text-white font-proxima-extrabold text-2xl xs+:text-3xl md:text-2xl lg:text-3xl xl:text-5xl">при покупке годового
					тарифа</p>
				<div className="flex flex-col items-center md:flex-row gap-4 lg:gap-8 xl:gap-16 mt-4 lg:mt-8 xl:mt-10">
					<div
						className="bg-white pl-4 pr-5 xl:px-6 rounded-2xl py-3 max-w-[320px] xs+:max-w-[275px]
						md:max-w-[160px] lg:max-w-[190px] xl:max-w-[270px] flex">
						<p className="text-[#414141] font-proxima-semibold md:font-proxima-thin text-xl xs:text-2xl
						md:text-xl lg:text-2xl xl:text-3xl mr-1">+7</p>
						<input
							className="border-b-2 border-[#414141] tracking-wider outline-0 text-[#414141]
							 font-proxima-semibold md:font-proxima-thin text-2xl xs:text-2xl
							 md:text-xl lg:text-2xl xl:text-3xl w-[90%] md:w-[120px] lg:w-[80%] xl:w-[80%]"
							name="phone_number" type="number"
							maxLength={10}
							value={tel}
							onChange={handleTel}
						/>
					</div>
					<button
						className="uppercase bg-white w-[100%] text-[#1DB6FF] shadow-xl text-xl xs:text-xl
						 xs+:text-lg md:text-sm lg:text-lg xl:text-2xl font-proxima-black xs:font-proxima-extrabold
						 rounded-2xl py-3 md:py-3 px-2 xs:px-4 px-4 xs+:px-4 md:px-3 lg:px-4">получить
						скидку
					</button>
				</div>
			</div>

		</div>
	);
};

export default AppDiscount;
