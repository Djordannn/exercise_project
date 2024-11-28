import "./App.css";
import React from "react";
import { GoSignOut } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgPlayButtonO } from "react-icons/cg";
import { FaPlay } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import img1 from "./assets/images/img1.png";
import profile from "./assets/images/profile.avif";
import team1 from "./assets/images/team1.avif";
import { Accordion, AccordionTab } from "primereact/accordion";

const App: React.FC = () => {
  return (
    <div>
      <div className="px-[8%] py-4">
        {/* Navbar */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-2xl">Logo</h2>
          </div>
          <div className="hidden">
            <ul className="flex">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Elements</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
            </ul>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#">Get App</a>
                </li>
                <li className="flex items-center gap-2">
                  <i>
                    <GoSignOut />
                  </i>
                  <a href="#">Sign in</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <i className="text-2xl">
              <GiHamburgerMenu />
            </i>
          </div>
        </div>
        {/* Jumbotron */}
        <div className="pt-20 pb-14">
          <div className="flex flex-col gap-8 text-center">
            <h2 className="text-3xl font-semibold">
              Here are the things that make our product so special and our
              customer so happy
            </h2>
            <p className="text-[#61677A] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis aliquam nam error, porro repellendus tenetur provident
              impedit?
            </p>
            <div className="flex items-center justify-evenly gap-2 bg-[#2d2d2d] w-[40%] mx-auto text-white p-2 rounded-lg">
              <i>
                <CgPlayButtonO />
              </i>
              <a href="#" className="text-sm">
                Our Story
              </a>
            </div>
          </div>
        </div>
        {/* Blog */}
        <div className="py-14 pb-5">
          <div className="hidden">
            <img src={img1} alt="img" className="w-[100%]" />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2">
                <i className="bg-[#dcdcdc] p-2 rounded-lg">
                  <IoKeyOutline />
                </i>
                <h3>Cutting-edge technologies</h3>
              </div>
              <h2 className="text-2xl font-semibold mt-2">
                Thinking forward and designing for the future
              </h2>
            </div>
            <div className="card">
              <Accordion activeIndex={0}>
                <AccordionTab header="What are my option?">
                  <p className="text-[#61677A] m-0">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam nostrum, perferendis molestiae hic adipisci nisi
                    illo dolores assumenda quis reprehenderit.
                  </p>
                </AccordionTab>
                <AccordionTab header="Is it safe to my card data?">
                  <p className="text-[#61677A] m-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse harum sint reiciendis dicta. Dolore, labore!
                  </p>
                </AccordionTab>
                <AccordionTab header="Can't switch to plans any time?">
                  <p className="text-[#61677A] m-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugit eum quos illum asperiores unde. Aliquam, placeat
                    fugit.
                  </p>
                </AccordionTab>
              </Accordion>
            </div>
            <div>
              <a
                href="#"
                className="bg-[#2d2d2d] py-2 px-4 text-white rounded-lg text-[12px] mr-3"
              >
                Road FAQ
              </a>
              <a
                href="#"
                className=" py-2 px-6 rounded-lg text-[12px] shadow-lg"
              >
                Contact support
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4 py-14">
              <div className="bg-[#2d2d2d] h-32 flex flex-col justify-between p-5 text-white rounded-lg">
                <h2 className="text-2xl font-semibold">10+</h2>
                <p>Years of experience</p>
              </div>
              <div className="bg-[#F1F0E8] h-32 flex flex-row justify-between p-5">
                <div className="flex flex-col justify-between">
                  <h2 className="text-2xl font-semibold">115 000+</h2>
                  <p>Daily transaction</p>
                </div>
                <div className="bg-[#D8DBBD] p-5 text-[12px] flex items-center rounded-lg">
                  <a href="#">Learn more</a>
                </div>
              </div>
              <div className="bg-[#2d2d2d] h-32 flex flex-col justify-between p-5 text-white rounded-lg">
                <h2 className="text-2xl font-semibold">3M+</h2>
                <p>Active user</p>
              </div>
            </div>
          </div>
        </div>
        {/* Client */}
        <div className="py-14">
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <i className="bg-[#dcdcdc] p-2 rounded-lg">
                    <IoKeyOutline />
                  </i>
                  <h3>Testimonial</h3>
                </div>
                <h2 className="text-2xl font-semibold">
                  Learn what our clients think
                </h2>
              </div>
              <div className="flex items-center gap-2 mt-4 shadow-lg rounded-lg w-[60%] p-3">
                <a href="#" className="text-sm">
                  More client sotries{" "}
                </a>
                <i className="bg-[#2d2d2d] text-white p-2 rounded-lg">
                  <FaPlay />
                </i>
              </div>
            </div>
            <div>
              <div className="bg-[#F1F0E8] p-5 rounded-lg">
                <div className="flex items-center gap-3">
                  <img
                    src={profile}
                    alt=""
                    className="w-[40px] h-[40px] object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold">Jhon Smith</h3>
                    <p className="text-[#61677A] text-[13px]">Enginering</p>
                  </div>
                </div>
                <p className="text-[#61677A] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="bg-[#F1F0E8] p-5 rounded-lg">
              <div className="flex items-center gap-3">
                <img
                  src={profile}
                  alt=""
                  className="w-[40px] h-[40px] object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">Jhon Smith</h3>
                  <p className="text-[#61677A] text-[13px]">Enginering</p>
                </div>
              </div>
              <p className="text-[#61677A] mt-4 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        {/* Section */}
        <div className="py-14">
          <div>
            <div>
              <div className="flex items-center gap-2">
                <i className="bg-[#dcdcdc] p-2 rounded-lg">
                  <IoKeyOutline />
                </i>
                <h3>Roadmap</h3>
              </div>
              <h2 className="text-2xl font-semibold mt-2">
                Heading towards better tomorrow experience
              </h2>
            </div>
            <div className="flex flex-col gap-10">
              <div className="mt-5">
                <p className="text-[#61677A] text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <div className="relative shadow-lg rounded-lg p-4 mt-2">
                  <input type="text" placeholder="Input your email" />
                  <button className="absolute right-0 bg-[#D2FF72] py-2 px-4 rounded-lg">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="py-3 pl-6 border-l-2 border-[#bcbcbc]">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="font-semibold">rs-04-2021</h3>
                    <p className="text-[#61677A] text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">rs-04-2021</h3>
                    <p className="text-[#61677A] text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">rs-04-2021</h3>
                    <p className="text-[#61677A] text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">rs-04-2021</h3>
                    <p className="text-[#61677A] text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">rs-04-2021</h3>
                    <p className="text-[#61677A] text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team */}
        <div className="py-14">
          <div className="flex flex-col gap-4 justify-between">
            <div>
              <div className="flex items-center gap-2">
                <i className="bg-[#dcdcdc] p-2 rounded-lg">
                  <IoKeyOutline />
                </i>
                <h3>Testimonial</h3>
              </div>
              <h2 className="text-2xl font-semibold">
                Learn what our clients think
              </h2>
            </div>
            <a
              href="#"
              className="bg-[#2d2d2d] text-white py-2 px-4 rounded-lg flex items-center justify-between gap-3 w-[65%] text-sm"
            >
              Meet the expert team <MdNavigateNext />
            </a>
          </div>
          <div className="mt-[4rem]">
            <div className="">
              <div className="px-10">
                <img
                  src={team1}
                  alt=""
                  className="w-full h-[250px] object-cover object-top rounded-lg"
                />
              </div>
              <div className="relative bottom-[2.2rem]">
                <div className="shadow-lg rounded-lg p-3 z-50 bg-white w-[50%]">
                  <h3 className="font-semibold">Mike Bradford</h3>
                  <p className="text-[#6167aa] text-sm">CEO / Founder</p>
                </div>
                <div className="flex gap-3 mt-4">
                  <i className="bg-[#dcdcdc] p-3 rounded-lg">
                    <FaLinkedinIn />
                  </i>
                  <i className="bg-[#dcdcdc] p-3 rounded-lg">
                    <FaFacebookF />
                  </i>
                  <i className="bg-[#dcdcdc] p-3 rounded-lg">
                    <FaInstagram />
                  </i>
                </div>
              </div>
            </div>
            <div className="">
              <div className="px-10">
                <img
                  src={team1}
                  alt=""
                  className="w-full h-[250px] object-cover object-top rounded-lg"
                />
              </div>
              <div className="relative bottom-[2.2rem]">
                <div className="shadow-lg rounded-lg p-3 z-50 bg-white w-[50%]">
                  <h3 className="font-semibold">Mike Bradford</h3>
                  <p className="text-[#6167aa] text-sm">CEO / Founder</p>
                </div>
                <div className="flex gap-3 mt-4">
                  <i className="bg-[#dcdcdc] p-3 rounded-lg">
                    <FaLinkedinIn />
                  </i>
                  <i className="bg-[#dcdcdc] p-3 rounded-lg">
                    <FaFacebookF />
                  </i>
                  <i className="bg-[#dcdcdc] p-3 rounded-lg">
                    <FaInstagram />
                  </i>
                </div>
              </div>
            </div>
            <div className="">
              <div className="px-10">
                <img
                  src={team1}
                  alt=""
                  className="w-full h-[250px] object-cover object-top rounded-lg"
                />
              </div>
              <div className="relative bottom-[2.2rem]">
                <div className="shadow-lg rounded-lg p-3 z-50 bg-white w-[50%]">
                  <h3 className="font-semibold">Mike Bradford</h3>
                  <p className="text-[#6167aa] text-sm">CEO / Founder</p>
                </div>
                <div className="flex gap-3 mt-4">
                  <i className="bg-[#dcdcdc] p-3 rounded-lg">
                    <FaLinkedinIn />
                  </i>
                  <i className="bg-[#dcdcdc] p-3 rounded-lg">
                    <FaFacebookF />
                  </i>
                  <i className="bg-[#dcdcdc] p-3 rounded-lg">
                    <FaInstagram />
                  </i>
                </div>
              </div>
            </div>
            <div className="">
              <div className="px-10">
                <img
                  src={team1}
                  alt=""
                  className="w-full h-[250px] object-cover object-top rounded-lg"
                />
              </div>
              <div className="relative bottom-[2.2rem]">
                <div className="shadow-lg rounded-lg p-3 z-50 bg-white w-[50%]">
                  <h3 className="font-semibold">Mike Bradford</h3>
                  <p className="text-[#6167aa] text-sm">CEO / Founder</p>
                </div>
                <div className="flex gap-3 mt-4">
                  <i className="bg-[#dcdcdc] p-3 rounded-lg">
                    <FaLinkedinIn />
                  </i>
                  <i className="bg-[#dcdcdc] p-3 rounded-lg">
                    <FaFacebookF />
                  </i>
                  <i className="bg-[#dcdcdc] p-3 rounded-lg">
                    <FaInstagram />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Get in touch */}
        <div className="py-14 bg-[#2d2d2d] text-white p-4 rounded-lg">
          <div className="flex flex-col gap-4 justify-between">
            <div>
              <div className="flex items-center gap-2">
                <i className="bg-[#D2FF72] p-2 rounded-lg text-black">
                  <IoKeyOutline />
                </i>
                <h3>Testimonial</h3>
              </div>
              <h2 className="text-2xl font-semibold mt-2">
                Subsricbe to out newsletter to always be in the loop
              </h2>
            </div>
            <div>
              <p className="text-[#61677A] text-sm">
                Lorem ipsum dolor sit amet.
              </p>
              <div className="relative rounded-lg mt-2">
                <input
                  type="text"
                  placeholder="Input your email"
                  className="p-2 rounded-lg"
                />
                <button className="absolute right-0 bg-[#D2FF72] text-black py-2 px-4 rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
