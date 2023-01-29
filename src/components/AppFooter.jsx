import React, {useEffect, useState} from 'react';

const AppFooter = () => {
	const [date, setDate] = useState()
	useEffect(()=> {
		setDate(() => {
			const date = new Date().getFullYear()
			return date
		})
	}, [])
	return (
		<div className="bg-[#414141]">
			<div className="flex flex-col items-start gap-3 lg:flex-row justify-between mx-auto px-4 max-w-container py-6">
				<a href="#"
				   className="border-b-4 border-dashed text-lg md:text-xl font-proxima-semibold text-white border-white">История
					компании</a>
				<p className="text-lg md:text-xl text-white font-proxima-extrabold">Другие проекты:</p>
				<ul className="flex flex-col gap-3 sm-:flex-row text-sm">
					<li className="border-b-4 mr-3 border-dashed font-proxima-semibold  text-white border-white">
						<a href="#"
						   >Кадровое
							агентство для мигрантов</a>
					</li>
					<li className="border-b-4 mr-3 border-dashed font-proxima-semibold  text-white border-white">
						<a href="#"
						   >МФЦ
							ТУТЖДУТ </a>
					</li>
					<li className="border-b-4 border-dashed font-proxima-semibold  text-white border-white">
						<a href="#"
						   >Договор
							Оферты</a>
					</li>


				</ul>
				<p className="text-[#1db6ff] font-proxima-black text-lg md:text-xl">
					<span className="font-proxima-semibold">©</span> 2021-{date}
				</p>
			</div>
		</div>
	);
};

export default AppFooter;
