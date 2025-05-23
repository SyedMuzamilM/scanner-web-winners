import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../config/BaseUrl";
import { Scanner } from "@yudiel/react-qr-scanner";

function Scan() {
  const [result, setResult] = useState("No result");
  const [userID, setUserID] = useState();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rollNumber: "",
  });
  const id = localStorage.getItem("loggedInId");

  const handleScanCode = async (data) => {
    if (data) {
      try {
        const response = await axios.post(
          `${BaseUrl}api/admit-card/scan/${data}`,
          { scannedBy: id },
        );
        if (response?.status === 200) {
          localStorage.setItem(
            "admitCard",
            JSON.stringify(response?.data?.data),
          );
          navigate(`/admit-card`);
        }
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    } else {
      setResult("No result");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rollNumber = formData?.rollNumber || userID;
    if (!rollNumber) {
      alert("Please enter a roll number or scan the QR code.");
      return;
    }

    try {
      const response = await axios.post(
        `${BaseUrl}api/admit-card/scan/${rollNumber}`,
        { scannedBy: id },
      );
      if (response?.status === 200) {
        localStorage.setItem("admitCard", JSON.stringify(response?.data?.data));
        navigate(`/admit-card`);
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <>
      <div className="bg-[#E31E24] py-[14px] px-[15px]">
        <div className="bg-[#FFFFFF] rounded-[20px] max-w-[360px] pb-[30px] flex flex-col justify-center items-center m-auto">
          <div className="flex items-center pb-[57px] justify-center">
            <img src="/assets/logo.svg" alt="" />
          </div>
          <div className="px-[12px] w-full">
            <div className="w-full px-[6px] mb-[16px]">
              <input
                name="rollNumber"
                value={formData?.rollNumber}
                onChange={handleChange}
                placeholder="Enter Roll Number"
                type="text"
                className="p-[18px] w-full bg-[#F5F4F8] outline-none rounded-[10px] font-[Lato] font-[400] text-[14px] leading-[19.6px] text-[#252B5C]"
              />
            </div>
            <div className="flex justify-center w-full px-[6px] items-center">
              <button
                onClick={handleSubmit}
                className="bg-[#E31E24] w-full hover:bg-transparent border border-transparent hover:border-[#E31E24] duration-500 ease-linear font-[Lato] font-[700] text-[16px] leading-[22.4px] text-[#FFFFFF] hover:text-[#E31E24] rounded-[12px] py-[16px]"
              >
                Enter Roll Number
              </button>
            </div>
            <p className="py-[14px] font-[Lato] font-[500] text-[16px] leading-[22px] text-[#000000] text-center">
              Or
            </p>
            <Scanner
              onResult={(result) => handleScanCode(result)}
              onError={(error) => console.log(error?.message)}
            />
            <div className="flex justify-center px-[6px] items-center">
              <button
                onClick={() => {}}
                className="bg-[#E31E24] w-full hover:bg-transparent border border-transparent hover:border-[#E31E24] duration-500 ease-linear font-[Lato] font-[700] text-[16px] leading-[22.4px] text-[#FFFFFF] hover:text-[#E31E24] rounded-[12px] py-[16px]"
              >
                Scan QR
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scan;
