const NextPage = () => {
  return (
    <>
      <div className="desktop:w-[1700px] mx-auto px-5 md:px-8 lg:px-4 lg:w-[980px] 2xl:w-[1250px] ">
        <div className="mt-10 mb-6 lg:my-20">
          <h1 className=" mb-6 font-bold text-[22px] text-center lg:text-2xl desktop:text-4xl">
            Welcome to EarlyVisasLots.com US Visa Services!
          </h1>
          <div className="font-medium text-base lg:text-lg">
            <div className="bg-red-700 py-2 px-4 rounded-xl text-white flex  items-center">
              <div className="w-[75px] md:w-[30px] ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="w-full h-full"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17z"
                  ></path>
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="m250.26 195.39 5.74 122 5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95z"
                  ></path>
                  <path d="M256 397.25a20 20 0 1 1 20-20 20 20 0 0 1-20 20z"></path>
                </svg>
              </div>
              <p className="pl-3 text-xl md:text-2xl lg:text-3xl  font-bold">
                Read these points carefully about our service before proceeding
                further.
              </p>
            </div>
            <p className="mt-6  lg:leading-8 ">
              We only provide USA Visitor Visa (B1/B2),{" "}
              <span className="text-textsecondary">
                {" "}
                WE DO NOT PROVIDE STUDENT VISAs.
              </span>
            </p>
            <p className="mt-2 mb-6  lg:leading-8">
              The total cost of applying a US Visitor Visa with EarlyVisasLots will
              be <span className="text-textsecondary"> ₹39,999</span>, this also
              includes the official US Visa Fees of{" "}
              <span className="text-textsecondary"> 185$</span>(approx. ₹15,500)
            </p>
            <div className="my-6  lg:leading-8">
              <h1 className="font-bold mt-6 mb-3">What will be the process?</h1>
              <h2 className="font-semibold my-3">
                Filling the DS160 and payment of Visa Fees
              </h2>
              <p className="pl-2 lg:pl-6 my-3">
                - Govt. Visa Fees that need to be paid on their website is
                around ₹15,500 paid from your bank account, debit or credit
                card.
              </p>
              <h2 className="font-semibold mt-2 my-3">
                {" "}
                Scheduling appointment dates for (a)Fingerprint &amp; (b)
                Interview
              </h2>
              <div className="">
                <p className="pl-2 lg:pl-6  ">
                  - If you check, all the available dates are generally for 2026
                  or later.
                  <br />- Our team is constantly checking throughout the day for
                  vacant new dates or cancelled dates in next weeks or month. So
                  we provide you with an appointment slot as early as next week.
                </p>
                <p className="pl-2 lg:pl-6  my-3">
                  - If you have already filled DS160 form and paid the visa
                  fees, we will charge only ₹24,999 for Urgent Slot Booking
                  Service.
                </p>
              </div>
            </div>
            <div className="my-6  lg:leading-8">
              <h1 className="font-bold  mt-6 mb-2">
                Other Terms &amp; Conditions
              </h1>
              <p className="pl-2 lg:pl-6 my-3">
                - $185 Visa Fee has to be paid by you on official US Visa
                Scheduling website
              </p>
              <p className="pl-2 lg:pl-6 my-3">
                - You need to provide us with your Username, Password &amp;
                Security Question-Answers for usvisascheduling.com account for
                booking the appointment slot.{" "}
              </p>
              <p className="pl-2 lg:pl-6 my-3">
                -{" "}
                <span className="text-textsecondary">
                  {" "}
                  We cannot guarantee any specific date
                </span>{" "}
                requested by you it all depends on US Embassy. We will try to
                get earliest date, and that could be NEXT WEEK or NEXT MONTH not
                late than that.
              </p>
              <p className="pl-2 lg:pl-6 my-3">
                <span className="text-textsecondary">NO BARGAINS PLEASE </span>,
                We really work very hard to get you the earliest date among
                lakhs of US Visa applicants and we also have people that need to
                be paid.
              </p>
            </div>
          </div>
          <h1 className=" mb-6 font-bold text-base text-center lg:text-base">
            Tap PROCEED below to move further, Happy USA Journey:)
          </h1>
          <div className="flex justify-center items-center">
            <a
              href="/form"
              className=" flex justify-center items-center w-[300px] bg-[#EB560D] py-3 shadow shadow-orange-500  rounded-lg font-semibold text-center text-base small:text-lg text-white "
            >
              Proceed
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default NextPage;