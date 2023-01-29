import AppHeader from "./components/AppHeader.jsx";
import AppWhoAre from "./components/AppWhoAre.jsx";
import AppDiscount from "./components/AppDiscount.jsx";
import AppTasks from "./components/AppTasts.jsx";
import AppSecondDiscount from "./components/AppSecondDiscount.jsx";
import AppBenefits from "./components/AppBenefits.jsx";
import AppQuote from "./components/AppQuote.jsx";
import AppMap from "./components/AppMap.jsx";
import AppFooter from "./components/AppFooter.jsx";
import AppVideo from "./components/AppVideo.jsx";
import {Helmet} from "react-helmet";

function App() {

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8"/>
				<meta name="description"
				      content="Автоматизированная платформа для работы с мигрантами, оформление документов, облегчение работы бухгалтерии и отдела кадров, патенты, работа с несколькими юрлицами и аналитика. Все для аутсорсинга и аутстаффинга граждан СНГ с работой в РФ. Сводим к 0 риск проверок и получения штрафов."/>
				<meta name="keywords" content="работа с снг, рекрутинг мигрантов, облачная платформа мигранты, saas бухгалтерия мигранты, бухгалтерия мигранты, оформление мигрантов"/>
				<link rel="shortcut icon" href="dist/favicon.ico" type="image/x-icon"/>
				<title>
					ТУТЖДУТ.ЦИФРА - облачное решение для рекрутинга и трудоустройства граждан СНГ. Работа с
					мигрантами, автоматизация бухгалтерии, создания, продления и переоформления документов.
				</title>

			</Helmet>

			<AppHeader/>
			<AppWhoAre/>
			<AppDiscount/>
			<AppTasks/>
			<AppVideo/>
			<AppSecondDiscount/>
			<AppBenefits/>
			<AppQuote/>
			<AppMap/>
			<AppFooter/>
		</div>
	)
}

export default App
