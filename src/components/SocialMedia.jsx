import React from 'react';
import './SocialMedia.css';
import { BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs';

function SocialMedia() {
  return (
    <div className="bg-[#A79FFF] flex flex-col md:flex-row p-10">
      <div className="w-full md:w-[50%] p-4">
        <h1 className="text-black text-4xl md:text-8xl font-bold font-gilroy">
          Who <br />
          Are We ?
        </h1>
        <br />
        <p className="text-black text-lg md:text-2xl">
        We're the passionate team from NITK, revolutionizing how individuals collaborate with like-minded peers for formal endeavors. Our platform simplifies the process, matching professionals based on skills and objectives, fostering meaningful connections for freelancers, teams, and businesses seeking collaboration and growth.
        <br /><br />
        Whether you're a passionate entrepreneur seeking a co-founder or a college student looking to build a team for your next project, Synkerr is designed specifically for the younger generation. If you want to join the Synkerr team or be one of the first users to experience what Synkerr has to offer, stay connected with us on our social media accounts.
        </p>
      </div>
      <div className="w-full md:w-[50%] p-4">
        <div className="flex flex-col md:flex-row">
          <p className="text-[#2C1A4D] text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            Check Out Our <br /> Social Media Handle
          </p>
          <div className="flex justify-center">
            <img className="w-32 h-32 md:w-64 md:h-64" src="SocialMediaArrow.svg" alt="Social Media Arrow" />
          </div>
        </div>
        <div className="flex flex-col md:flex-col justify-center">
          <div className="flex TD justify-center ">
            <a href="https://www.linkedin.com/company/synkerr/" target="_blank" rel="noopener noreferrer" className="mr-4 flex flex-col">
              <BsLinkedin size={48} /><span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/synkerrofficial?igsh=MXExNzNhaDIxbGF5dA==" rel="noopener noreferrer" target="_blank" className="mr-4 flex flex-col">
              <BsInstagram size={48} /><span>Instagram</span>
            </a>
            <a href="https://twitter.com/Kakashi8654" target="_blank" rel="noopener noreferrer" className='flex flex-col mr-4'>
              <BsTwitter size={48} /><span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;