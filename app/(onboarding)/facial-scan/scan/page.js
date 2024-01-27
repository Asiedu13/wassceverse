"use client";
import { useRef, useState } from "react";
import Webcam from "react-webcam";

export default function Page() {
  const webcamRef = useRef( null );
  const [shot, setShot] = useState( "" );
  const [shotSaved, setShotSaved] = useState("");

  function capture() {
    const imageSrc = webcamRef.current.getScreenshot();
    // console.log( imageSrc );
    setShot( imageSrc );
    setShotSaved( imageSrc );

  }

  return (
    <section className="relative">
      <div className="absolute z-10 right-0">
        {shot ? <img src={shot} alt="user picture" className="w-[150px] h-[150px]" /> : ''}
      </div>

      <nav className="h-[100px] container absolute z-10 top-0 bg-[#2727272e] flex justify-between px-5 items-center">
        <div className="rounded-full relative .bg-[#cbc9c95d] bg-[#2727272e] w-[50px] h-[50px] flex justify-center items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10.31"
            height="18.034"
            viewBox="0 0 10.31 18.034"
            fill="#fff"
          >
            <path
              id="Icon_ionic-ios-arrow-back"
              data-name="Icon ionic-ios-arrow-back"
              d="M14.359,15.208,21.182,8.39a1.289,1.289,0,0,0-1.825-1.82L11.626,14.3a1.286,1.286,0,0,0-.038,1.777l7.763,7.779a1.289,1.289,0,1,0,1.825-1.82Z"
              transform="translate(-11.251 -6.194)"
            />
          </svg>
        </div>
        <div className="rounded-full relative .bg-[#cbc9c95d] bg-[#2727272e] w-[50px] h-[50px] flex justify-center items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18.033"
            height="18.033"
            viewBox="0 0 18.033 18.033"
            fill="#fff"
          >
            <path
              id="Icon_material-close"
              data-name="Icon material-close"
              d="M25.533,9.316,23.717,7.5l-7.2,7.2-7.2-7.2L7.5,9.316l7.2,7.2-7.2,7.2,1.816,1.816,7.2-7.2,7.2,7.2,1.816-1.816-7.2-7.2Z"
              transform="translate(-7.5 -7.5)"
              fill="#fff"
            />
          </svg>
        </div>
      </nav>
      <header className="absolute top-[100px] z-10 text-white px-[20px]">
        <h2 className="text-2xl my-5">Facial Scan</h2>
        <p>Please look into the camera and hold still</p>
      </header>
      <Webcam
        audio={false}
        ref={webcamRef}
        style={{
          width: "100vh",
          height: "100vh",
          objectFit: "cover",
          transform: "rotateY(180deg)",
        }}
        screenshotFormat="image/jpeg"
        videoConstraints={{ facingMode: "user" }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "10%",
          width: "80%",
          height: "60%",
          border: "2px solid red",
          boxSizing: "border-box",
          pointerEvents: "none",
        }}
      ></div>
      <div className="absolute z-10 bottom-0 transparent h-[100px] p-3 text-white flex justify-center items-center container">
        <button className=" bg-secondary rounded p-3" onClick={capture}>
          Capture Photo
        </button>
      </div>
    </section>
  );
}
