import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../config/BaseUrl";
import QrReader from "react-qr-scanner";
import { Scanner } from "@yudiel/react-qr-scanner";

function Scan() {
  const [delay, setDelay] = useState(100);
  const [result, setResult] = useState("No result");

  const handleScan = (data) => {
    setResult(data || "No result");
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };
  const navigate = useNavigate();
  // const scanner = useRef(null);
  // const videoEl = useRef(null);
  // const qrBoxEl = useRef(null);
  // const [qrOn, setQrOn] = useState(true);
  // const [scannedResult, setScannedResult] = useState("");
  const [formData, setFormData] = useState({
    rollNumber: "",
  });

  // const handleButtonClick = () => {
  //   setQrOn(true);
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData?.rollNumber) {
      alert("Please enter a roll number.");
      return;
    }

    try {
      const response = await axios.get(
        `${BaseUrl}api/admit-card/scan/${formData.rollNumber}`,
      );
      // const id = response?.data?.data?.user?._id;
      if (response?.data?.statusCode === 200) {
        localStorage.setItem("admitCard", JSON.stringify(response?.data?.data));
        navigate(`/admit-card`);
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  // const onScanSuccess = (result) => {
  //   console.log("QR Code detected:", result);
  //   // Handle the QR code data as needed
  //   setScannedResult(result?.data);
  // };

  // const onScanFail = (error) => {
  //   console.warn("QR Code scan failed:", error);
  //   // Handle the scanning error if needed
  // };

  // useEffect(() => {
  //   if (videoEl.current && !scanner.current) {
  //     // Instantiate the QR Scanner
  //     scanner.current = new QrScanner(videoEl.current, onScanSuccess, {
  //       onDecodeError: onScanFail,
  //       preferredCamera: "environment",
  //       highlightScanRegion: true,
  //       highlightCodeOutline: true,
  //       overlay: qrBoxEl.current || undefined,
  //     });

  //     // Start QR Scanner
  //     scanner.current
  //       .start()
  //       .then(() => setQrOn(true))
  //       .catch((err) => {
  //         console.error("Failed to start QR Scanner:", err);
  //         setQrOn(false);
  //       });
  //   }

  //   return () => {
  //     if (scanner.current) {
  //       scanner.current.stop();
  //     }
  //   };
  // }, []);
  // useEffect(() => {
  //   if (!qrOn)
  //     alert(
  //       "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
  //     );
  // }, [qrOn]);
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
              onResult={(text, result) =>
                console.log("scanned : ", text, result)
              }
              onError={(error) => console.log("Error", error?.message)}
            />
            {/* {qrOn && (
              <div>
                <video ref={videoEl}></video>
                <div ref={qrBoxEl} className="qr-box">
                  <img
                    src="/assets/qr-frame.svg"
                    alt="Qr Frame"
                    width={256}
                    height={256}
                    className="qr-frame"
                  />
                </div>
              </div>
            )}
            {scannedResult && (
              <p
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 99999,
                  color: "white",
                }}
              >
                Scanned Result: {scannedResult}
              </p>
            )} */}
            <div className="flex justify-center px-[6px] items-center">
              <button
                // onClick={handleButtonClick}
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
