import React from "react";
import Navbar from "./Navbar";
import HeroSectionCentre from "./HeroSectionCentre";

export default function HeroSection( {TeamRef} ) {
	
	return (
		<div className="w-full h-[100vh] relative flex items-center justify-center ">
			<Navbar TeamRef={TeamRef} />
			<img
				className="absolute w-[100%] max-w-[1000px] top-0 left-0 "
				src="purplebackdrop.svg"
			/>
			<HeroSectionCentre />
			<div className="flex">
				<p className="absolute bottom-[30px] px-6 py-3 left-[50%] transform translate-x-[-50%] font-medium text-[15px] text-[#888888] rounded-full mt-[25px] border-solid border-[#2b2b2b] border-[1px]">
					Scroll Down ↓
				</p>
				<img
					src="rotatepattern.svg"
					style={{ animationDuration: "60s" }}
					className="absolute bottom-[-20px] lg:w-auto md:w-auto lg:w-[200px] md:w-[145px] w-[140px] left-[-30px] animate-spin duration-[4s]"
					alt=""
				/>
			</div>
			
		</div>
	);
}
