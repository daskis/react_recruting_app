import React from 'react';
import photo from "../assets/photo.png"
import quote from "../assets/quote.svg"

const AppQuote = () => {
	return (
		<div className="max-w-container mx-auto px-4 xs+:px-8  mt-40 mb-24 flex flex-col lg:flex-row items-center">
			<img src={photo} className="w-[50%] lg:w-full" alt=""/>
			<div className="flex-col lg:ml-20 px-6 xs+:px-12">
				<img className="ml-[-30px] w-[50px] lg:w-[60px]" src={quote} alt=""/>
				<p className="font-proxima-light text-2xl lg:text-[30px] text-[#414141] tracking-[-2px] leading-10">
					Наша жизнь и без того слишком сложна, чтобы пытаться усложнять ее еще больше. Мы по-максимуму
					оцифровали все процессы, чтобы облегчить работу с трудовыми мигрантами из СНГ — как со стороны
					работодателя, так и со стороны самих мигрантов.</p>
				<p className="font-proxima-extrabold text-2xl lg:text-3xl text-[#414141] tracking-[-2px] leading-8">Наталья Хмельницкая, <br/>основатель</p>
			</div>
		</div>
	);
};

export default AppQuote;
