import React from "react";
import Stories from "../components/ Stories";
import Header from "../components/mobile/Header";
import Posts from "../components/Posts";
import Rightbar from "../components/Rightbar";
export default function Home() {
  return (
    <div className="bg-brand lg:w-screen w-screen flex justify-center">
      <div className="lg:w-[470px] w-full lg:px-0 lg:mr-8">
        <Header />
        <div className="px-3">
          <Stories />
          <Posts />
        </div>
      </div>
      <Rightbar />
    </div>
  );
}
