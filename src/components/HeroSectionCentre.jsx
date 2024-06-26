import React from "react";
import HeroSectionAnimation from "./HerosectionAnimation";
export default function HeroSectionCentre() {
	
	return (
		
		<div className="flex flex-col  items-center  relative">
			<div className="flex flex-col">
				<HeroSectionAnimation/>
			</div>

			<a href="https://forms.gle/QK8cgHGN4T4i8FDS9" target="_blank" rel="noopener noreferrer">
    <p className="z-[5] bg-[#a79fff] px-6 py-3 font-medium text-[20px] text-black rounded-full mt-[30px] hover:translate-x-2 duration-300 cursor-pointer hover:bg-[#978dff]">
        Join the waitlist -{">"}
    </p>
</a>
			<p className="z-[5] mt-[20px]">
				🎉 <span className="text-yellow-500"> BETA</span> version Dropping Soon
			</p>
		</div>
	);
}
