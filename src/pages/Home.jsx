import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../config/BaseUrl";

function Home() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BaseUrl}api/Scanner/ScannerTeamlogin`,
        formData,
      );
      const id = response?.data?.data?.user?._id;
      localStorage.setItem("loggedInId", id);
      if (response?.data?.statusCode === 200) {
        navigate(`/scan/${id}`);
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };
  return (
    <>
      <div className="bg-[#E31E24] py-[14px] px-[15px]">
        <div className="bg-[#FFFFFF] rounded-[20px] max-w-[360px] m-auto pt-[65px]">
          <div className="flex items-center pb-[70px] justify-center">
            <img src="assets/logo.svg" alt="" />
          </div>
          <div className="px-[12px]">
            <p className="text-[#252B5C] font-[Lato] font-[500] text-[25px] leading-[40px] pb-[30px]">
              Let’s <span className="font-[800]">Log In</span>
            </p>
            <div className="flex flex-col gap-[9px] pb-[16px]">
              <p className="font-[Lato] font-[500] text-[16px] leading-[22px] text-[#000000]">
                Email
              </p>
              <input
                name="email"
                value={formData?.email}
                onChange={handleChange}
                type="text"
                className="p-[18px] bg-[#F5F4F8] outline-none rounded-[10px] font-[Lato] font-[400] text-[14px] leading-[19.6px] text-[#252B5C]"
              />
            </div>
            <div className="flex flex-col gap-[9px] pb-[9px]">
              <p className="font-[Lato] font-[500] text-[16px] leading-[22px] text-[#000000]">
                Password
              </p>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData?.password}
                onChange={handleChange}
                className="p-[18px] bg-[#F5F4F8] outline-none rounded-[10px] font-[Lato] font-[400] text-[14px] leading-[19.6px] text-[#252B5C]"
              />
            </div>
            <div className="flex justify-end">
              <p
                onClick={togglePasswordVisibility}
                className="font-[Raleway] font-[600] text-[12px] leading-[20px] text-right text-[#1F4C6B]"
              >
                {showPassword ? "Hide" : "Show"} Password
              </p>
            </div>
            <div className="flex justify-center pt-[84px] pb-[71px] px-[6px] items-center">
              <button
                onClick={handleSubmit}
                className="bg-[#E31E24] hover:bg-transparent border border-transparent hover:border-[#E31E24] duration-500 ease-linear font-[Lato] font-[700] text-[16px] leading-[22.4px] w-full text-[#FFFFFF] hover:text-[#E31E24] rounded-[12px] py-[16px]"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
