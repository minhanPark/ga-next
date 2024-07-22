"use client";

import { sendGTMEvent } from "@next/third-parties/google";

export default function Home() {
  const handleClick = () => {
    console.log("clicked");
    sendGTMEvent({ event: "buttonClicked", value: "xyz" });
  };
  return (
    <div className="">
      <h2>nextjs - ga4</h2>
      <button onClick={handleClick}>send event</button>
    </div>
  );
}
