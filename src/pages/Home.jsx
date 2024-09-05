import CollapsibleFAQ from "../components/CollapsibleFAQ";
export default function Home() {
  const FaqQuestions = [
    {
      title: "What documentation is required?",
      content:
        "Primarily, you'll need your Passport and a valid ID such as an Aadhar Card. Additional supporting documents like academic transcripts and marriage certificates may also be necessary.",
    },
    {
      title: "Is it possible to request a specific appointment date or location?",
      content:
        "For appointments within the next couple of months, options are limited and tend to fill up quickly. However, for bookings made a year in advance, you have more flexibility in choosing your preferred date. Regarding location, we can attempt to accommodate your preference, but for the earliest available date, it's recommended to consider any location.",
    },
    {
      title: "What are the payment details and timeline?",
      content:
        "A $185 US Visa Fee is required to submit the DS160 Form. The remaining balance (₹24,999 minus $185) is due after we secure your earliest appointment date.",
    },
    {
      title: "Is a US Visa guaranteed?",
      content:
        "No, we cannot guarantee a confirmed US Visa. We offer a guaranteed US Visa APPOINTMENT within 7 days. The actual visa approval depends on various factors. We'll provide you with the best possible guidance, but the final decision rests with the US authorities.",
    },
    {
      title: "Why should I choose EarlyVisasLots?",
      content:
        "We're proud to be the only company worldwide offering Urgent US Visa Services at the most competitive rates, combined with an exceptional success rate.",
    },
  ];
  return (
    <>
      <main className="desktop:w-[1700px] mx-auto px-4 md:px-8 lg:px-4 lg:w-[980px] 2xl:w-[1250px]">
        <section
          id="hero"
          className="relative mt-12 lg:mt-16 mb-20 lg:mb-0 px-2 md:px-36 lg:px-0"
        >
          <div className="lg:flex justify-between items-center text-center lg:text-left">
            <div className="flex justify-start items-center lg:pt-0 lg:pb-0 lg:w-1/2">
              <div className="space-y-5 lg:space-y-8 desktop:space-y-16 lg:w-[425px] desktop:w-[750px]">
                <h1 className="font-extrabold text-[#141B52]  text-[32px] small:text-[35px] lg:text-[39px] desktop:text-5xl desktop:leading-[66px] lg:leading-[46px] small:leading-[42px] leading-[40px] ">
                  US Visitor Visa appointment in just 7 Days!
                </h1>
                <h1 className="font-medium text-sm md:text-lg lg:text-xl desktop:text-3xl ">
                  EarlyVisasLots helps you present yourself for the US Visa
                  Interview quicker than anyone else.
                </h1>
                <div className="md:flex justify-between items-center place-items-center content-center place-content-center grid grid-cols-2 pb-2">
                  <div className="">
                    <div className="flex -space-x-4 lg:mb-2 mb-1">
                      <img
                        className="border-2 border-white rounded-full w-10 h-10 lg:w-11 lg:h-11 desktop:w-16 desktop:h-16 "
                        src="https://visaontime.co/1.webp"
                        alt="Stacked rounded avatar"
                      />
                      <img
                        className="border-2 border-white rounded-full w-10 h-10 lg:w-11 lg:h-11 desktop:w-16 desktop:h-16"
                        src="https://visaontime.co/2.webp"
                        alt="Stacked rounded avatar"
                      />
                      <img
                        className="border-2 border-white rounded-full  w-10 h-10 lg:w-11 lg:h-11 desktop:w-16 desktop:h-16"
                        src="https://visaontime.co/3.webp"
                        alt="Stacked rounded avatar"
                      />
                    </div>
                    <div className="flex items-center gap-1 text-amber-500 transition-all duration-500">
                      <svg
                        className="w-[16px] h-[16px] lg:w-[16px] lg:h-[16px] desktop:w-[25px] desktop:h-[25px]"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        className="w-[16px] h-[16px] lg:w-[16px] lg:h-[16px] desktop:w-[25px] desktop:h-[25px]"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        className="w-[16px] h-[16px] lg:w-[16px] lg:h-[16px] desktop:w-[25px] desktop:h-[25px]"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        className="w-[16px] h-[16px] lg:w-[16px] lg:h-[16px] desktop:w-[25px] desktop:h-[25px]"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        className="w-[16px] h-[16px] lg:w-[16px] lg:h-[16px] desktop:w-[25px] desktop:h-[25px]"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <p className="px-0 md:px-8 -ml-4 mr-10 small:-ml-12 small:mr-12 md:mr-0 md:-ml-0  font-semibold  text-sm lg:text-sm desktop:text-xl text-center ">
                    250+ Successful Visa Issuance and counting.
                  </p>
                  <div className="col-span-2 mt-6 mb-2 lg:mt-0 lg:mb-0 place-self-center">
                    <h2 className="font-extrabold text-[#141B52] text-3xl lg:text-3xl desktop:text-4xl">
                      ₹24,999/-
                    </h2>
                    <p className="text-base font-medium text-center">
                      (all inclusive)
                    </p>
                  </div>
                </div>
                <div className="shadow shadow-orange-500 hover:shadow-[#141B52] mx-2 md:mx-0 rounded-lg font-semibold text-center text-lg desktop:text-2xl text-white group">
                  <a
                    href="/next"
                    className="group-hover:bg-[#141B52] flex justify-center items-center bg-[#EB560D] py-3 rounded-lg transition duration-300"
                  >
                    Apply US Visa
                    <span className="ml-2 text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M468 26.25c-.8-.02-1.7-.02-2.6.02v-.01c-7.2.28-16.2 2.74-25.5 6.7-18.4 7.91-37.7 21.75-48 31.99L137.4 340.8l10.5 10.5 38.9-38.8 12.8 12.8-38.8 38.9 10.5 10.5 275.8-254.6c10.2-10.3 24.1-29.61 32-48.05 3.9-9.23 6.4-18.25 6.7-25.44.2-7.19-1.3-12.01-4.9-15.55-3.1-3.09-7.1-4.66-12.9-4.81zM167.7 53.16l-14.9 16.47 43 14.36 1.4-1.23c0-.61-.3-1.79-1.1-3.55-1.9-3.97-6-9.47-10.7-14.21-4.7-4.73-10.2-8.81-14.2-10.7-1.7-.83-2.9-1.04-3.5-1.14zm240.4 5.48l34 11.31 11.3 33.95-11.3 11.3-45.3-45.25 11.3-11.31zM90.3 67.77c-8.08.35-17.37 4.63-27.48 12.21C55.09 85.78 47 93.45 38.8 101.5l201.8 100.8 59.6-64.6L90.3 67.77zm143.4 9.85l-13.2 14.6 42.6 14.18c-.1-.6-.4-1.5-1-2.7-1.8-3.99-5.9-9.49-10.7-14.23-4.7-4.73-10.2-8.81-14.2-10.7-1.7-.83-2.9-1.05-3.5-1.15zM374.3 211.8l-64.7 59.7 100.9 201.8c8.1-8.2 15.8-16.4 21.6-24.1 7.5-10.1 11.8-19.4 12.2-27.4l-70-210zm31.3 37.1l14.2 42.6 14.6-13.2c0-.6-.3-1.7-1.1-3.5-1.9-4-6-9.5-10.7-14.2-4.8-4.7-10.3-8.8-14.3-10.7-1.1-.5-2-.8-2.7-1zm23.7 65.9l-1.3 1.4 14.4 43 16.4-14.8c0-.6-.3-1.8-1.1-3.5-1.9-4-6-9.5-10.7-14.3-4.7-4.7-10.2-8.8-14.2-10.7-1.7-.8-2.9-1.1-3.5-1.1zM71.69 340l-22.77 22.7 60.28 40.2 40.1 60.2 22.8-22.8-9.8-49.2-14.3-14.2-27.6 27.6-12.8-12.8 27.6-27.6-14.3-14.3-49.21-9.8z"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end pt-10 lg:pt-0 lg:w-1/2">
              <img
                src="https://visaontime.co/hero.webp"
                alt="Visa On Time Hero"
                className="shadow-2xl rounded-[48px] small:w-[82%] small:h-[82%] "
              />
            </div>
          </div>
        </section>
        <section id="Procedure" className="mt-10 lg:mt-16 mb-14 lg:mb-16">
          <h1 className="mb-2 font-bold text-center text-xl lg:text-2xl desktop:text-4xl">
            What's The Procedure?
          </h1>
          <div className="lg:flex justify-between items-start hidden text-sm">
            <div className="my-4 lg:my-0 lg:pr-6 lg:w-1/3">
              <h2 className="flex items-start my-1 font-semibold text-base md:text-lg desktop:text-2xl">
                <span className="pt-1 pr-1 text-green-500">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z"></path>
                  </svg>
                </span>
                Details and documents gathering
              </h2>
            </div>
            <div className="my-4 lg:my-0 lg:w-1/3">
              <h2 className="flex items-start my-1 font-semibold text-base md:text-lg desktop:text-2xl">
                <span className="pt-1 pr-1 text-green-500">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z"></path>
                  </svg>
                </span>
                DS 160 Form Filling &amp; US Visa Fee payment
              </h2>
            </div>
            <div className="my-4 lg:my-0 lg:pl-6 lg:w-1/3">
              <h2 className="flex items-start my-1 font-semibold text-base md:text-lg desktop:text-2xl">
                <span className="pt-1 pr-1 text-green-500">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z"></path>
                  </svg>
                </span>
                Booking the earliest appointment slot
              </h2>
            </div>
          </div>
          <div className="lg:flex justify-between items-start hidden text-sm">
            <div className="my-4 lg:my-0 lg:pr-6 lg:w-1/3">
              <p className="font-medium text-sm md:text-base desktop:text-xl">
                Our experienced executive will gather all your details and
                documents required to apply for US Visa.
              </p>
            </div>
            <div className="my-4 lg:my-0 lg:w-1/3">
              <p className="font-medium text-sm md:text-base desktop:text-xl">
                Our executive will fill the DS 160 form for US Visa application
                on your behalf.
              </p>
            </div>
            <div className="my-4 lg:my-0 lg:pl-6 lg:w-1/3">
              <p className="font-medium text-sm md:text-base desktop:text-xl">
                Our team of Visa Experts sit through out the day to spot any new
                or cancelled vacancies and provide you with the earliest
                appointment schedule
              </p>
            </div>
          </div>
          <div className="block lg:hidden text-sm">
            <div className="my-4 lg:my-0 lg:pr-6 lg:w-1/3">
              <h2 className="flex items-start my-2 font-semibold text-base md:text-lg desktop:text-2xl">
                <span className="pt-1 pr-1 text-green-500">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z"></path>
                  </svg>
                </span>
                Details and documents gathering
              </h2>
              <p className="font-medium text-sm md:text-base desktop:text-xl">
                Our experienced executive will gather all your details and
                documents required to apply for US Visa.
              </p>
            </div>
            <div className="my-4 lg:my-0 lg:w-1/3">
              <h2 className="flex items-start my-2 font-semibold text-base md:text-lg desktop:text-2xl">
                <span className="pt-1 pr-1 text-green-500">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z"></path>
                  </svg>
                </span>
                DS 160 Form Filling &amp; US Visa Fee payment
              </h2>
              <p className="font-medium text-sm md:text-base desktop:text-xl">
                Our executive will fill the DS 160 form for US Visa application
                on your behalf.
              </p>
            </div>
            <div className="my-4 lg:my-0 lg:pl-6 lg:w-1/3">
              <h2 className="flex items-start my-2 font-semibold text-base md:text-lg desktop:text-2xl">
                <span className="pt-1 pr-1 text-green-500">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z"></path>
                  </svg>
                </span>
                Booking the earliest appointment slot
              </h2>
              <p className="font-medium text-sm md:text-base desktop:text-xl">
                Our team of Visa Experts sit through out the day to spot any new
                or cancelled vacancies and provide you with the earliest
                appointment schedule
              </p>
            </div>
          </div>
        </section>
        <section id="FAQ" className="relative my-10 md:my-16 font-semibold">
          <h1 className="mb-6 font-bold text-center text-xl md:text-2xl desktop:text-4xl">
            Frequently Asked Questions
          </h1>
          <div className="rounded-2xl divide-y faq-content">
            {FaqQuestions.map((each) => {
              return (
                <CollapsibleFAQ title={each.title} content={each.content} />
              );
            })}
          </div>
        </section>
        <section id="AboutUs" className="my-10 md:my-16">
          <h1 className="mb-6 font-bold text-center text-xl md:text-2xl desktop:text-4xl">
            About Us
          </h1>
          <div className="space-y-3 font-medium text-sm md:text-lg  desktop:text-2xl">
            <p className="">
              Welcome to <span className="text-[#141B52]"> EarlyVisasLots</span>,
              your trusted partner in realizing your American dreams!
            </p>
            <p className="">
              We take immense pride in being at the forefront of facilitating
              seamless journeys to the United States, since 2020. At EarlyVisasLots,
              we understand that obtaining a U.S. visa is not just a process;
              it's a gateway to new opportunities, experiences, and a brighter
              future.
            </p>
            <p className="">
              At EarlyVisasLots, we pave the way for your U.S. journey. Your
              American dream starts here.
            </p>
          </div>
        </section>
        <section className="relative my-10 md:my-16 px-2 md:px-0">
          <h1 className="mb-6 font-bold text-center text-xl md:text-2xl desktop:text-4xl">
            Our Customer Stories
          </h1>
          <div className="md:flex justify-center items-center">
            <div className="bg-white shadow-gray-300 shadow-xl md:shadow-2xl p-8 rounded-2xl ring-2 ring-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://visaontime.co/Testimonials/ajeetsingh.webp"
                  alt="Vinay Mehta"
                  width="20%"
                  height="20%"
                  className="rounded-full"
                />
                <div className="gap-1 grid">
                  <h1 className="font-semibold text-[#141B52] text-base md:text-xl desktop:text-2xl">
                    Vinay Mehta
                  </h1>
                  <span className="font-medium text-gray-500 text-sm desktop:text-lg">
                    B.Tect (Mechanical){" "}
                  </span>
                </div>
              </div>
              <p className="font-medium text-base text-gray-500 desktop:text-lg">
                {" "}
                Thanks EarlyVisasLots for making my American dream come true. I had
                been trying to get US Visitor Visa for a long time without any
                success.
              </p>
            </div>
            <div className="bg-white shadow-gray-300 shadow-xl md:shadow-2xl md:mx-8 my-5 md:my-0 p-8 rounded-2xl ring-2 ring-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://visaontime.co/3.webp"
                  alt="Akash Mulani"
                  width="20%"
                  height="20%"
                  className="rounded-full"
                />
                <div className="gap-1 grid">
                  <h1 className="font-semibold text-[#141B52] text-base md:text-xl desktop:text-2xl">
                    Akash Mulani
                  </h1>
                  <span className="font-medium text-gray-500 text-sm desktop:text-lg">
                    H.S.C Passed
                  </span>
                </div>
              </div>
              <p className="font-medium text-base text-gray-500 desktop:text-lg">
                I have been through multiple Visa Consultancy services, no one
                comes close to this, if you really want to get your US Visa, try
                EarlyVisasLots.
              </p>
            </div>
            <div className="bg-white shadow-gray-300 shadow-xl md:shadow-2xl p-8 rounded-2xl ring-2 ring-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://visaontime.co/1.webp"
                  alt="Ajeet Singh"
                  width="20%"
                  height="20%"
                  className="rounded-full"
                />
                <div className="gap-1 grid">
                  <h1 className="font-semibold text-[#141B52] text-base md:text-xl desktop:text-2xl">
                    Ajeet Singh
                  </h1>
                  <span className="font-medium text-gray-500 text-sm desktop:text-lg">
                    Job @ Infosys
                  </span>
                </div>
              </div>
              <p className="font-medium text-base text-gray-500 desktop:text-lg">
                My friends are still surprised how I got US Visa before them
                even after applying late. Kudos to EarlyVisasLots, Highly
                Recommended!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
