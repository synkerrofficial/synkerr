import React from 'react'
import "./Objectives.css";
const Objectives = () => {
  return (
    <div className="h-max bg-black ">
      <p className="text-center text-3xl text-gray-400 py-16 ">
        Our key objectives
      </p>
      <div className=" flex justify-center">
        <div className="xyz  ">
          <div className="flex flex-wrap flex-row gap-10 justify-center">
            <div className=" bg-gradient-to-br  from-purple-700 via-black to-purple-500 p-0.5 rounded-3xl sm:mx-5">
              <div className="block max-w-sm p-6  rounded-3xl shadow hover:bg-gray-100 bg-gradient-to-br  from-black via-gray-950 to-indigo-950    ">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  Team
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Best place to meet with Like-minded Individuals, whether it's
                  finding someone to hang out with or seeking a potential
                  co-founder, Synkerr has it all(for like-minded Individual)
                </p>
              </div>
            </div>
            <div className=" bg-gradient-to-br  from-purple-700 via-black to-purple-500 p-0.5 rounded-3xl sm:mx-5">
              <div className="block max-w-sm p-6  rounded-3xl shadow hover:bg-gray-100 bg-gradient-to-br  from-black via-gray-950 to-indigo-950    ">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  Connect
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  assemble teams for diverse purposes such as projects,
                  hackathons, or sports, Enjoy the choice to create or join
                  existing teams to elevate their careers(for team building)
                </p>
              </div>
            </div>
            <div className=" bg-gradient-to-br  from-purple-700 via-black to-purple-500 p-0.5 rounded-3xl lg:mb-40 sm:mx-5 ">
              <div className="block max-w-sm p-6  rounded-3xl shadow hover:bg-gray-100 bg-gradient-to-br  from-black via-gray-950 to-indigo-950 pb-20 ">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  Community
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Select the best suitable clubs, local groups, educational
                  institutions, and more to join & boost your connections as you
                  desire(for community)
                </p>
              </div>
            </div>
            <div className=" bg-gradient-to-br  from-purple-700 via-black to-purple-500 p-0.5 rounded-3xl mb-40 sm:mx-5">
              <div className="block max-w-sm p-6  rounded-3xl shadow hover:bg-gray-100 bg-gradient-to-br  from-black via-gray-950 to-indigo-950  pb-8  ">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  Event
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 pb-0">
                  Organizers can host diverse events from workshops to festivals
                  🎉. Attendees have diverse options to effortlessly join
                  Synkerr's events for networking, learning, and entertainment
                  and more.(for hyperlocal event)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Objectives