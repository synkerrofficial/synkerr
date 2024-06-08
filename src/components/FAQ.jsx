import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./FAQ.css";
import React from "react";
import { useState } from "react";
import Accordian from "./Accordian.jsx";

const FAQ = React.forwardRef((props, ref) => {
  const datas = [
    {
      title: "What is Synkerr?",
      ans: "SSynkerr is collaboration Marketplace dedicated to like-minded people. It's a place where people can team up for their projects, Ideas and fun. Synkerr facilitates with hyperlocal events where one can organise or attend hyperlical events. Also we provide users to build or join personalised communities like School or college alumni network, college clubs, social service groups and interests based communities.⚡",
    },
    {
      title: "How does Synkerr work?",
      ans: "Users have to find motto before collaborating with like-minded people. Based on users profile and need we recommend best suitable people, teams or events that can fulfill your purpose in efficient ways",
    },
    {
      title: "Who can join Synkerr?",
      ans: "Synkerr is best place for college & school students, freelancers, self-employed people, travellers and people who enjoys offline hangouts. Our goal is to Accomplish users motto by connecting them with right people, teams, and community.",
    },
    {
      title: "What features does Synkerr offer?",
      ans: " Synkerr offers a range of features including profile customization, team building, community creation, messaging, collaboration tools, event listings, and more.",
    },
    {
      title: "Can I use Synkerr for buisness networking?",
      ans: "Yes, Synkerr is an ideal platform for business networking, allowing users to connect with potential clients, partners, investors, and industry peers.",
    },
    {
      title: "Can I join communities on Synkerr?",
      ans: " Yes, Synkerr offers communities on various topics, industries, and interests. You can join existing groups or create your own to connect with like-minded people.",
    },
    {
      title: "Can I promote events or initiatives in Synkerr?",
      ans: "Yes, users can not only promote events but also host and participate the hyperlocal events like hackathons, book reading, startup pitches, parties etc.",
    },
    {
      title: "Is Synkerr available as a mobile app?",
      ans: "Very soon we'll be launching the app on both android and iOS. Be among the 1st synkerr users by clicking on the button \"Join the Waitlist\" now.",
    },
  ];

  const toggled = useState(null);

  return (
    <div className="bg-black mt" ref={ref}>
      <div className="flex flex-col justify-center items-center  h-max lg:gap-30 sm:gap-10">
        <div className=" bg-gradient-to-br  from-purple-700 via-black to-purple-500 p-0.5 rounded-3xl ">
          <div className="block w-auto px-16 py-5  rounded-3xl shadow hover:bg-gray-100 bg-gradient-to-br  from-black via-gray-950 to-indigo-950 ">
            <span className=" text-center text-white lg:text-3xl sm:text-2xl font-bold">
              Frequently Asked Questions
            </span>
          </div>
        </div>
        <div className=" flex justify-center">
          <div className="xyz  ">
            <div className="flex flex-wrap justify-center gap-10 py-10">
              {datas.map((data, index) => (
                <Accordian index={index} data={data} toggled={toggled} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FAQ;