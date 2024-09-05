import { useState } from "react";

export default function Navbar() {
    const [toggleNav, setToggleNav] = useState(false);
    return (
      <>
        <div>
          <div className="flex justify-between  items-center mx-auto pt-6  px-4  lg:w-[980px] 2xl:w-[1250px]  desktop:w-[1700px] font-semibold md:text-lg  desktop:text-2xl lg:text-xl">
            <div className="w-40 md:w-40 desktop:w-60">
              <a href="http://earlyvisaslots.com" className="">
                {" "}
                <img
                  src="/logo.png"
                  alt="Visa On Time Logo"
                />
              </a>
            </div>
            <div className="md:flex items-center space-x-10 md:space-x-12 hidden">
              <a
                href="/#AboutUs"
                className="hover:text-[#0088ff] hover:underline"
              >
                About Us
              </a>
              <a
                href="/#Procedure"
                className="hover:text-[#0088ff] hover:underline"
              >
                Procedure
              </a>
              <a href="/#FAQ" className="hover:text-[#0088ff] hover:underline">
                FAQs
              </a>
            </div>
            <div onClick={()=>{setToggleNav(!toggleNav)}} className="top-8 right-4 absolute md:hidden text-3xl text-black cursor-pointer">
              {toggleNav === false ? (
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z"
                    fill="currentColor"
                  ></path>
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M368 368 144 144m224 0L144 368"
                  ></path>
                </svg>
              )}
            </div>
          </div>
          <div
           className={`md:hidden pt-6 w-full ${toggleNav ? "" : "hidden"}`}
          >
            <div className="my-4 ml-6 ">
              <a
                className="pb-1 font-semibold text-lg hover:text-[#0088ff] transition duration-300 cursor-pointer"
                href="/#AboutUs"
              >
                About Us
              </a>
            </div>
            <div className="my-4  ml-6 ">
              <a
                className="pb-1 font-semibold text-lg hover:text-[#0088ff] transition duration-300 cursor-pointer"
                href="/#Procedure"
              >
                Procedure
              </a>
            </div>
            <div className="my-4  ml-6 ">
              <a
                href="/#FAQ"
                className="pb-1  font-semibold text-lg hover:text-[#0088ff] transition duration-300 cursor-pointer"
              >
                FAQs
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }