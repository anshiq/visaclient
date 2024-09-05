import { useState } from "react";
import { SendEmail } from "../utilsfunctions/Mail";
import { toast } from "react-toastify";

const Form = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    service: "",
    city: "",
    travelledBefore: "",
  });
  const [loading,setLoading] = useState(false)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (
      data.firstName &&
      data.lastName &&
      data.mobileNumber &&
      data.service &&
      data.city &&
      data.travelledBefore
    ) {
     
      try {
        await SendEmail({
          toEmail: "kamalshopify1313@gmail.com",
          subject: data.service,
          
          ...data,
        });
        toast("Form Submitted Succefully, We will Reach you shortly!!", {
            position: "top-right",
            autoClose: 2000,
           type:"success"
          });
          setTimeout(() => {
            window.location.href ="/"
          }, 2000);
      } catch (error) {
        toast("Server Error While Submitting!!", {
            position: "top-right",
            autoClose: 2000,

            type:"error",
         
          });

      }
    } else {
      alert("Please fill all the fields");
    }
    setLoading(false)
  };
  return (
    <>
      <div className="mx-auto px-4 md:px-8 lg:px-4 lg:w-[980px] 2xl:w-[1250px]">
        <h1 className="my-10 lg:my-20 mb-6 font-bold text-2xl text-center lg:text-3xl">
          Submit your details
        </h1>
        <form onSubmit={handleSubmit} className="relative font-bold text-base">
          <div className="relative flex justify-between my-6 w-full">
            <div className="relative w-[49%]">
              <label for="FirstName" className="block w-full">
                First Name*
              </label>
              <input
                type="text"
                id="FirstName"
                className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
                placeholder="Ayush"
                required
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="relative w-[49%]">
              <label for="LastName" className="block w-full">
                Last Name*
              </label>
              <input
                type="text"
                id="LastName"
                className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
                placeholder="Gupta"
                required
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="relative my-6">
            <label for="MobileNumber" className="block w-full">
              Mobile Number*
            </label>
            <input
              type="number"
              id="MobileNumber"
              className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
              placeholder="92585XXXXX"
              required
              name="mobileNumber"
              value={data.mobileNumber}
              onChange={handleChange}
            />
          </div>
          <div className="block my-6 w-full">
            <label for="Service" className="block w-full">
              Service interested in:*
            </label>
            <select
              name="service"
              id="Service"
              className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 h-10  border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
              required
              value={data.service}
              onChange={handleChange}
            >
              <option
                className="font-semibold text-base"
                value=""
                disabled
                selected
              >
                {" "}
                - select -
              </option>
              <option
                className="font-semibold text-base"
                value="Full Visa Application"
              >
                Full Visa Application
              </option>
              <option
                className="font-semibold text-base"
                value="Only Early Appointment"
              >
                Only Early Appointment
              </option>
            </select>
          </div>
          <div className="relative my-6">
            <label for="City" className="block w-full">
              City*
            </label>
            <input
              type="text"
              id="City"
              className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
              placeholder="New Delhi"
              required
              name="city"
              value={data.city}
              onChange={handleChange}
            />
          </div>
          <div className="block my-6 w-full">
            <label for="TravelledBefore" className="block w-full">
              Have you ever travelled outside of India?*
            </label>
            <select
              name="travelledBefore"
              id="TravelledBefore"
              className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4  h-10  border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
              required
              value={data.travelledBefore}
              onChange={handleChange}
            >
              <option
                className="font-semibold text-base"
                value=""
                disabled=""
                selected=""
              >
                - select -
              </option>
              <option className="font-semibold text-base" value="Yes">
                Yes
              </option>
              <option className="font-semibold text-base" value="No">
                No
              </option>
            </select>
          </div>
          <button
            type="submit"
            className="flex justify-center items-center bg-[#EB560D] hover:bg-[#141B52] shadow shadow-orange-500 py-3 rounded-lg w-full font-semibold text-lg text-white transition duration-300"
          >
            <h1 className="pr-3">{loading?"Loading...":"Submit"} </h1>
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
