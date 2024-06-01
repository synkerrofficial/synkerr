import React, { useState, useRef, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";

export default function Hamburger({ TeamRef, FaqRef ,SocialMediaRef,ObjectivesRef}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const ScrollToTeam = () => {
    const teamElement = TeamRef.current;
    if (teamElement) {
      const offsetTop = teamElement.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const ScrollToFaq = () => {
    const faqElement = FaqRef.current;
    if (faqElement) {
      const offsetTop = faqElement.offsetTop;
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
    <div ref={menuRef}>
      <div className="flex flex-col items-end">
        <div className="w-11 p-3 bg-violet-950 text-white rounded-full">
          {open ? (
            <AiOutlineMenuFold
              size={20}
              className="text-[white] cursor-pointer"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={20}
              className="text-[white] cursor-pointer"
              onClick={handleOpen}
            />
          )}
        </div>
        <div>
          {open && (
            <div className="rounded-2xl mt-[55px]">
              <div className="h-[auto] w-[auto] rounded-2xl bg-violet-950 p-5">
                <div className="text-white cursor-pointer flex flex-col gap-3.5 items-center">
                  <div>Home</div>
                  <div onClick={ScrollToSocialMedia}>About</div>
                  <div onClick={ScrollToObjectives}>Goal</div>
                  <div onClick={ScrollToTeam}>Team</div>
                  <div onClick={ScrollToFaq}>FAQ</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}