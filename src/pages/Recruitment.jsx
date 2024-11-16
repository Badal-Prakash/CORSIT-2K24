import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";
import bot from "./../../public/robot.png";
function Recruitment() {
  const initialFormData = {
    Name: "",
    Email: "",
    PhoneNumber: "",
    Usn: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.PhoneNumber)) {
      toast.error(
        "Phone number must be exactly 10 digits and contain only numbers."
      );
      return;
    }

    setLoading(true);
    const regData = {
      Name: formData.Name,
      Email: formData.Email,
      PhoneNumber: formData.PhoneNumber,
      Usn: formData.Usn,
    };

    axios
      .post(
        "https://corsit-reg-server.onrender.com/api/participant/register",
        regData
      )
      .then((res) => {
        toast.success("Registration Successful");
        setFormData(initialFormData);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message || "Something went wrong");
        setLoading(false);
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="hero bg-[#1F2937] text-white py-20 text-center">
        <h4 className="text-4xl font-bold text-gray-100 mb-2">
          CLUB OF ROBOTICS
        </h4>
        <h5 className="text-2xl font-semibold text-gray-300 mb-6">
          Requirement 2024
        </h5>
        <img
          src={bot}
          alt="bot image"
          className="mx-auto mb-6 rounded-sm shadow-sm max-w-[120px] sm:max-w-[190px] md:max-w-[200px]"
        />

        <div className="formdiv px-4 sm:px-8 md:px-16 lg:px-32 py-8">
          <form
            className="max-w-3xl mx-auto bg-[#2D3748] shadow-sm rounded-sm p-6 border border-[#4A5568]"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label
                htmlFor="Name"
                className="block text-lg font-semibold text-gray-100 mb-2 text-left"
              >
                NAME
              </label>
              <input
                type="text"
                name="Name"
                className="w-full px-4 py-2 bg-[#4A5568] border border-[#E2E8F0] rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] text-white"
                value={formData.Name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="Email"
                className="block text-lg font-semibold text-gray-100 mb-2 text-left"
              >
                EMAIL
              </label>
              <input
                type="email"
                name="Email"
                className="w-full px-4 py-2 bg-[#4A5568] border border-[#E2E8F0] rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] text-white"
                value={formData.Email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="PhoneNumber"
                className="block text-lg font-semibold text-gray-100 mb-2 text-left"
              >
                PHONE NUMBER
              </label>
              <input
                type="tel"
                name="PhoneNumber"
                className="w-full px-4 py-2 bg-[#4A5568] border border-[#E2E8F0] rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] text-white"
                value={formData.PhoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="Usn"
                className="block text-lg font-semibold text-gray-100 mb-2 text-left"
              >
                USN
              </label>
              <input
                type="text"
                name="Usn"
                className="w-full px-4 py-2 bg-[#4A5568] border border-[#E2E8F0] rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] text-white"
                value={formData.Usn}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full py-3 bg-[#007BFF] text-white font-semibold rounded-sm shadow-md hover:bg-[#0056B3] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
              >
                {isLoading ? <Spinner /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Recruitment;
