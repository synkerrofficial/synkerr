import React from "react";
import { useState } from "react";
import Hamburger from "./Hamburger";
import SocialMedia from "./SocialMedia";

export default function Navbar({ TeamRef,FaqRef,SocialMediaRef,ObjectivesRef}) {
  const [nav, setNav] = useState(false);

  const ScrollToTeam = () => {
    const teamElement = TeamRef.current;
    if (teamElement) {
      const offsetTop = teamElement.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };
  const ScrollToSocialMedia = () => {
    const SocailMediaElement = SocialMediaRef.current;
    if (SocailMediaElement) {
      const offsetTop = SocailMediaElement.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const ScrollToObjectives = () => {
    const ObjectiveElement = ObjectivesRef.current;
    if (ObjectiveElement) {
      const offsetTop = ObjectiveElement.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="w-full h-[100px] flex items-center justify-between z-10 absolute top-0 left-0 px-[60px] bg-cover bg-center"
      style={{
        backgroundImage: "url('purplebackdrop.svg')",
        backgroundSize: "cover",
      }}
    >
      <img src="logo.svg" alt="" className="w-[150px]" />

      <div className="gap-[40px] font-medium hidden md:flex lg:flex">
        <p className="text-[#9d9da4] hover:text-white duration-[200ms] cursor-pointer" onClick={ScrollToObjectives}>
          Our Aim
        </p>
        <p
          className="text-[#9d9da4] hover:text-white duration-[200ms] cursor-pointer"
          onClick={ScrollToTeam}
        >
          Team
        </p>
        <p className="text-[#9d9da4] hover:text-white duration-[200ms] cursor-pointer"
        onClick={ScrollToSocialMedia}>
          What we Do
        </p>
      </div>
      <p className="bg-[#302d50] px-5 py-3 rounded-full hidden lg:block md:block ">
        Contact Us
      </p>
      <div className="px-5 py-3 block rounded-full lg:hidden md:hidden">
        <Hamburger TeamRef={TeamRef} FaqRef={FaqRef} SocialMediaRef={SocialMediaRef} ObjectivesRef={ObjectivesRef}/>
      </div>
    </div>
  );
}