import React from "react";
import "../../index.css";
import bgvideo from "../../video/bg_video.mp4";
import All_contant from "../Hero/All_contant";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Video = () => {
  return (
    <div id="Hero_video">
      <div id="hero_blur"></div>
      <video src={bgvideo} autoPlay loop muted></video>
      <div className=" absolute top-[250px] left-14 text-white z-50   w-[5%] h-[30vh] p-5   ">
        <FaFacebook className=" text-yellow-500 text-[35px] mt-2 hover:border-2 rounded-[50%] p-2" />
        <FaSquareInstagram className="text-yellow-500 text-[35px] mt-4 hover:border-2 rounded-[50%] p-2" />
        <FaXTwitter className="text-yellow-500 text-[35px] mt-4 hover:border-2 rounded-[50%] p-2" />
        <FaWhatsapp className="text-yellow-500 text-[35px] mt-4 hover:border-2 rounded-[50%] p-2 " />
      </div>

      <div className=" absolute top-[22%] text-yellow-400 text-[20px] text-center w-full tracking-widest ">
        <h5>WELCOME TO APROSIS</h5>
        <h1 className="text-white text-[50px] mt-10">Empower Your Tech Journey</h1>
        
      </div>
      <div className=" absolute top-[40%]  w-[70vw] right-[15%] text-center">
      <p  className="text-[#7b7878] text-[20px] mt-10">Our service-based company is dedicated to empowering your business with excellence and innovation. We understand your needs and deliver tailored solutions to help you achieve the next level of success.</p>

     
      </div>
      <div className=" absolute top-[65%]  w-[70vw] right-[15%] text-center  ">
      <button className=" bg-yellow-500 px-4 py-2 rounded-lg font-bold hover:text-black hover:bg-[white] ease-in-out duration-500  ">CONTECT US <FaArrowRight className="ml-[44%]" />
      </button>
      </div>

      <All_contant />
    </div>
  );
};

export default Video;
