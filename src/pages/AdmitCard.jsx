import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdmitCard() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    const storedResponse = localStorage.getItem("admitCard");
    if (storedResponse) {
      setData(JSON.parse(storedResponse));
    }
  }, []);

  const handleClearStorage = () => {
    localStorage.clear();
    navigate(-1);
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-[#FFFFFF]">
        <div className="bg-[#E31E24] relative px-[9px] rounded-b-[20px] pt-[30px] pb-[20px] max-w-[360px] flex justify-center items-center m-auto">
          <img
            src="assets/left-arrow.svg"
            onClick={() => navigate(-1)}
            className="absolute left-[9px] cursor-pointer"
            alt=""
          />
          <p className="font-[Lato] font-[600] text-[24px] leading-[28.8px] text-[#FFFFFF]">
            Admit Card
          </p>
        </div>
        <div className="mt-[31px] px-[20px] pb-[148px]">
          <div className="flex justify-center">
            {data && (
              <div className="card">
                <div className="card-content">
                  <div className="flex flex-col gap-[14px]">
                    <div className="grid grid-cols-8 gap-[10px]">
                      <div className="col-span-3">
                        <p className="font-[Poppins]">
                          <strong>Name:</strong>
                        </p>
                      </div>
                      <div className="col-span-5">
                        <p className="font-[Poppins]"> {data?.Name}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-8 gap-[10px]">
                      <div className="col-span-3">
                        <p className="font-[Poppins]">
                          <strong>Father's Name:</strong>
                        </p>
                      </div>
                      <div className="col-span-5">
                        <p className="font-[Poppins]"> {data?.FathersName}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-8 gap-[10px]">
                      <div className="col-span-3">
                        <p className="font-[Poppins]">
                          <strong>Roll Number:</strong>
                        </p>
                      </div>
                      <div className="col-span-5">
                        <p className="font-[Poppins]"> {data?.rollNumber}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-8 gap-[10px]">
                      <div className="col-span-3">
                        <p className="font-[Poppins]">
                          <strong>Mobile No:</strong>
                        </p>
                      </div>
                      <div className="col-span-5">
                        <p className="font-[Poppins]"> {data?.MobileNo}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-8 gap-[10px]">
                      <div className="col-span-3">
                        <p className="font-[Poppins]">
                          <strong>Date of Birth:</strong>
                        </p>
                      </div>
                      <div className="col-span-5">
                        <p className="font-[Poppins]"> {data?.DateOfBirth}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-8 gap-[10px]">
                      <div className="col-span-3">
                        <p className="font-[Poppins]">
                          <strong>Desired Test:</strong>
                        </p>
                      </div>
                      <div className="col-span-5">
                        <p className="font-[Poppins]"> {data?.DesiredTest}</p>
                      </div>
                    </div>
                    {/* <div className="grid grid-cols-8 gap-[10px]">
                      <div className="col-span-3">
                        <p className="font-[Poppins]">
                          <strong>Download Time:</strong>
                        </p>
                      </div>
                      <div className="col-span-5">
                        <p className="font-[Poppins]">
                          {" "}
                          {new Date(data?.DownloadTime).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-8 gap-[10px]">
                      <div className="col-span-3">
                        <p className="font-[Poppins]">
                          <strong>Download Admit Card:</strong>
                        </p>
                      </div>
                      <div className="col-span-5">
                        <p className="font-[Poppins]">
                          {" "}
                          {data?.DownloadadmitCard ? "Yes" : "No"}
                        </p>
                      </div>
                    </div> */}
                    <div className="grid grid-cols-8 gap-[10px]">
                      <div className="col-span-3">
                        <p className="font-[Poppins]">
                          <strong>Exam Center:</strong>
                        </p>
                      </div>
                      <div className="col-span-5">
                        <p className="font-[Poppins]"> {data?.ExamCenter}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-8 gap-[10px]">
                      <div className="col-span-3">
                        <p className="font-[Poppins]">
                          <strong>Qualification:</strong>
                        </p>
                      </div>
                      <div className="col-span-5">
                        <p className="font-[Poppins]"> {data?.Qualification}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-8 gap-[10px]">
                      <div className="col-span-3">
                        <p className="font-[Poppins]">
                          <strong>Address:</strong>
                        </p>
                      </div>
                      {/* <div className="col-span-5">
                        <p className="font-[Poppins]"> {data?.Address}</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="pt-[36px] flex items-center gap-[22px]">
            <button className="flex w-full gap-[7px] items-center justify-center font-[Lato] font-[700] text-[16px] leading-[22.4px] bg-[#47DD00] rounded-[12px] py-[8px] text-[#FFFFFF]">
              <img src="assets/yes-alt.svg" alt="" />
              Approved
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="flex gap-[7px] w-full items-center justify-center font-[Lato] font-[700] text-[16px] leading-[22.4px] bg-[#DD0000] rounded-[12px] py-[8px] text-[#FFFFFF]"
            >
              <img src="assets/denied.svg" alt="" />
              Reject
            </button>
          </div>
        </div>
        <div
          className="rounded-t-[20px] bg-[#FFFFFF] py-[7px] flex justify-center items-center gap-[50px]"
          style={{ boxShadow: "0px -2px 8px 0px #00000040" }}
        >
          <div className="flex gap-[3px] flex-col items-center">
            <img src="assets/home.svg" alt="" />
            <p className="text-[#DD0000] font-[Poppins] font-[500] text-[12px] leading-[18px] text-center">
              Home
            </p>
          </div>
          <div className="flex gap-[3px] flex-col items-center">
            <img src="assets/dash.svg" alt="" />
            <p className="text-[#000000] font-[Poppins] font-[500] text-[12px] leading-[18px] text-center">
              Manage
            </p>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full flex items-center flex-col my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg max-w-[350px] relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-center pt-[36px] pb-[16px]">
                  <img src="assets/close.svg" alt="" />
                </div>
                <p className="px-[64px] pb-[16px] text-[#000000] font-[Lato] font-[500] text-[24px] leading-[33.6px] text-center">
                  Are you Sure Reject Admit card
                </p>
                <div className="flex px-[54px] pb-[36px] gap-[13px]">
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-[#005575] ease-linear duration-500 hover:bg-transparent border border-[#005575] w-full py-[16px] rounded-[12px] text-[#FFFFFF] hover:text-[#005575] font-[Lato] font-[700] text-[16px] leading-[22.4px]"
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleClearStorage}
                    className="hover:bg-[#005575] ease-linear duration-500 bg-transparent border border-[#005575] w-full py-[16px] rounded-[12px] hover:text-[#FFFFFF] text-[#005575] font-[Lato] font-[700] text-[16px] leading-[22.4px]"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      ) : null}
    </>
  );
}

export default AdmitCard;
