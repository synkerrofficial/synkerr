import React, { useRef } from "react";
import HeroSection from "./components/HeroSection";
import Globe from "./components/Globe";
import Carousel from "./components/Carousel";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
import Objectives from "./components/Objectives";
import FAQ from "./components/FAQ";
const App = () => {
	const FaqRef = useRef(null);
	const TeamRef = useRef(null);
	const SocialMediaRef=useRef(null);
	const ObjectivesRef=useRef(null);
	return (
		<div className="App min-w-full min-h-screen overflow-x-hidden">
			<HeroSection TeamRef={TeamRef} FaqRef={FaqRef} SocialMediaRef={SocialMediaRef} ObjectivesRef={ObjectivesRef}/>
			<Globe />
			<SocialMedia ref={SocialMediaRef}/>
			<Objectives ref={ObjectivesRef}/>
			<FAQ ref={FaqRef}/>
			<Carousel ref={TeamRef} />
			<Footer/>
		</div>
	);
};

export default App;
