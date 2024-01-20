"use client";

import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function CustomProgressBar() {
  return (
    <div className="w-[60px] h-[60px]">
      <CircularProgressbarWithChildren value={20}>
        <img
          src="/images/avatar.png"
          alt="Circular Image"
          style={{
            width: "60%",
            height: "60%",
            borderRadius: "30%",
            objectFit: "cover",
            position: "absolute",
          }}
        />
        <div style={{ fontSize: 12, marginTop: -5 }}>
          {/* <strong>66%</strong> */}
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}
