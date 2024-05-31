import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
const Hamburger = () => {
      const [open, setOpen] = useState(false);

      //handle open
      const handleOpen = () => {
        setOpen(!open);
      };

  return (
    <div>
      <div className="flex flex-col items-end ">
        <div className="overflow-hiddenw-11 p-3 bg-violet-950 text-white rounded-full">
          {open ? (
            <AiOutlineMenuFold
              size={10}
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
            <div className="rounded-2xl mx-5 mt-[100px]">
              <div className="h-auto w-[60px]  pb-5 p-2.5  rounded-2xl">
                <div className="text-white cursor-pointer flex flex-col gap-5 items-center ">
                  <div>Home</div>
                  <div>About</div>
                  <div>Goal</div>
                  <div>FAQ</div>
                  <div>Team</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hamburger