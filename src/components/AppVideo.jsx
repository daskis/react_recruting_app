import React from 'react';
import videobg from "../assets/videobg.png"
const AppVideo = () => {
	const openVideo = (e) => {
		e.target.style = "display: none"
		document.querySelector(".video").setAttribute("src", "https://www.youtube.com/embed/Ydpfv9DZYL4?autoplay=1")
	}
	return (
		<div className="max-w-container mx-auto px-4 xs+:px-8 py-24">
			<h2 className="font-proxima-extrabold sm:tracking-[-5px] text-3xl sm:text-4xl xs+:text-6xl lg:text-7xl mb-8 text-[#414141]">Гайд по системе</h2>
			<p className="font-proxima-semibold tracking-[-2px] text-2xl xs+:text-3xl text-[#414141] mb-14">Мы сняли 1,5 минутный ролик-руководство. Все предельно наглядно и просто</p>
			<div className="relative">
				<img src={videobg} onClick={openVideo} className="absolute cursor-pointer left-0 right-0 top-0 bottom-0 w-[100%] h-[100%] rounded-[40px]" alt=""/>
				<iframe className="w-[100%] h-[180px] sm:h-[220px] xs+:h-[280px] sm:h-[340px] md:h-[400px] lg:h-[550px] video rounded-[46px]" src="https://www.youtube.com/embed/Ydpfv9DZYL4"
				        title="YouTube video player" frameBorder="0"
				        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				        allowFullScreen></iframe>
			</div>
		</div>
	);
};

export default AppVideo;
