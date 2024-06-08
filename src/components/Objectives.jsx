import React from 'react'
import { Bounce } from "react-awesome-reveal";
import "./Objectives.css";
const Objectives = React.forwardRef((props,ref) => {
  return (
    <div className="h-max bg-black " ref={ref}>
      <p className="text-center text-3xl text-gray-400 py-16 ">
        Our key objectives
      </p>
      <div className=" flex justify-center">
        <div className="xyz  ">
          <div className="flex flex-wrap flex-row gap-10 justify-center">
            <Bounce>
              <div className=" bg-gradient-to-br  from-purple-700 via-black to-purple-500 p-0.5 rounded-3xl sm:mx-5">
                <div className="block max-w-sm p-6  rounded-3xl shadow hover:bg-gray-100 bg-gradient-to-br  from-black via-gray-950 to-indigo-950    ">
                  <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    Collaborate
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Best place to meet with Like-minded people, whether
                    it's finding someone to hang out with or seeking a potential
                    co-founder, Synkerr has it all
                  </p>
                </div>
              </div>
              <div className=" bg-gradient-to-br  from-purple-700 via-black to-purple-500 p-0.5 rounded-3xl sm:mx-5">
                <div className="block max-w-sm p-6  rounded-3xl shadow hover:bg-gray-100 bg-gradient-to-br  from-black via-gray-950 to-indigo-950    ">
                  <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    Team
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    team up for diverse purposes such as projects,
                    hackathons, or sports, Enjoy the choice to create or join
                    existing teams to elevate your careers
                  </p>
                </div>
              </div>
              <div className=" bg-gradient-to-br  from-purple-700 via-black to-purple-500 p-0.5 rounded-3xl set sm:mx-5 ">
                <div className="block max-w-sm p-6  rounded-3xl shadow hover:bg-gray-100 bg-gradient-to-br  from-black via-gray-950 to-indigo-950 pb-20 ">
                  <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    Community
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400 h-[90px]">
                  Create or join personalised communities based on interests, school or college clubs, social service groups, alumni networks and more. From local communities to spritual communities, Synkerr has it own growth and peace
                  </p>
                </div>
              </div>
              <div className=" bg-gradient-to-br  from-purple-700 via-black to-purple-500 p-0.5 rounded-3xl mb-20 sm:mx-5">
                <div className="block max-w-sm p-6  rounded-3xl shadow hover:bg-gray-100 bg-gradient-to-br  from-black via-gray-950 to-indigo-950  pb-8  ">
                  <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    Hyperlocal Event
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400 pb-0">
                    Organizers can host diverse Hyperlocal Events from workshops to
                    festivals 🎉. Attendees have diverse options to effortlessly
                    join Synkerr's hyperlocal events for networking, learning, and
                    entertainment and more.
                  </p>
                </div>
              </div>
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Objectives