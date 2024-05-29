import React, { useRef } from "react";
import HeroSectiontwo from "./components/HeroSection";
import Globe from "./components/Globe";
import Carousel from "./components/Carousel";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
import Objectives from "./components/Objectives";
import FAQ from "./components/FAQ";
const App = () => {
	const bottomRef = useRef(null);
	const TeamRef = useRef(null);

	return (
		<div className="App min-w-full min-h-screen overflow-x-hidden">
			<HeroSectiontwo TeamRef={TeamRef}/>
			<Globe />
			<SocialMedia/>
			<Objectives/>
			<FAQ/>
			<Carousel ref={TeamRef} />
			<Footer/>
		</div>
	);
};

export default App;
