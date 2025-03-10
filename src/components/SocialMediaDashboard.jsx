import React, { useState } from 'react';
import CardBig from "./CardBig";
import CardMini from "./CardMini";
import DownIcon from "../assets/images/icon-down.svg";
import UpIcon from "../assets/images/icon-up.svg";
import FaceBook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Youtube from "../assets/images/icon-youtube.svg";

function SocialMediaDashboard() {
    const [isChecked, setIsChecked] = useState(false);
    if (isChecked) {
        console.log("Dark Mode is On");
    } else {
        console.log("Dark Mode is Off");
    }

    let FollowersInt = "23,004";
    let topCard = isChecked ? "#E1ECF8 " : "#1D1F2D";
    let bottomCard1 = isChecked ? "white" : "#1E2139";
    let titleColor = isChecked ? "black" : "white";
    let overviewColor = isChecked ? "#6D728D" : "white";

    return (
        <>
            <div className='w-[100%] h-[250px] fixed top-0 right-0 hidden md:block rounded-md' style={{ backgroundColor: topCard }}></div>
            <div className="flex justify-center md:h-screen" style={{ backgroundColor: bottomCard1 }}>
                <div className="" style={{ width: "80%" }}>
                    <div className="flex flex-col md:flex-row justify-between pt-[2rem] pb-[2.5rem]">
                        <div className='border-b-[.01px] border-[#6D728D] md:border-b-0 mb-[0.5rem]'>
                            <h1 className='text-2xl font-bold relative' style={{ color: titleColor }}>Social Media Dashboard</h1>
                            <p className='text-[#6D728D] font-bold relative mb-[0.5rem]'>Total Followers: <span>{FollowersInt}</span></p>
                        </div>
                        <label className="md:inline-flex md:items-center md:me-5 cursor-pointer flex justify-between">
                            <span className='mr-[8px] text-[#6D728D] font-bold relative'>Dark Mode</span>
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                            />
                            <div
                                className={`relative w-[45px] h-7 rounded-full transition-colors 
                                peer-focus:ring-4 peer-focus:outline-none dark:peer-focus:outline-none 
                                ${isChecked ? "bg-[#A6A9CD]" : "bg-gradient-to-r from-[#1992D4] to-[#23C98B]"} dark:bg-gray-700`}
                            >
                                <div
                                    className={`absolute top-1/2 left-[2px] h-5 w-5 rounded-full border border-gray-300 transition-all 
                                    transform -translate-y-1/2
                                    ${isChecked ? "translate-x-full bg-white border-white" : "bg-[#1B1E29] dark:border-gray-600"}`}
                                />
                            </div>
                        </label>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <CardBig username="@robertg" value={1987} percentage={12} icon={FaceBook} upDownIcon={UpIcon} topColor="#198FF5" darkMode={isChecked} />
                        <CardBig username="@robertg" value={1044} percentage={99} icon={Twitter} upDownIcon={UpIcon} topColor="#1DA1F2" darkMode={isChecked} />
                        <CardBig username="@robertg" value={11} k="k" percentage={1099} icon={Instagram} upDownIcon={UpIcon} topColor={["#FDC366", "#D6249F"]} darkMode={isChecked} />
                        <CardBig username="@robertg" value={8239} percentage={144} icon={Youtube} upDownIcon={DownIcon} topColor="#C4032A" followSub={true} darkMode={isChecked} />
                    </div>
                    <br /><br />
                    <h1 className='text-2xl font-bold relative' style={{ color: overviewColor }}>Overview - Today</h1>
                    <br />
                    <div className="">
                        <div className="flex flex-col md:flex-row justify-between">
                            <CardMini title="Page Views" value={87} percentage={3} icon={FaceBook} upDownIcon={UpIcon} darkMode={isChecked} />
                            <CardMini title="Likes" value={52} percentage={2} icon={FaceBook} upDownIcon={DownIcon} darkMode={isChecked} />
                            <CardMini title="Likes" value={5462} percentage={2257} icon={Instagram} upDownIcon={UpIcon} darkMode={isChecked} />
                            <CardMini title="Profile Views" value={52} percentage={1375} k="k" icon={Instagram} upDownIcon={UpIcon} darkMode={isChecked} />
                        </div>
                        <br className='hidden md:block' /><br className='hidden md:block' />
                        <div className="flex flex-col md:flex-row justify-between">
                            <CardMini title="Retweets" value={117} percentage={303} icon={Twitter} upDownIcon={UpIcon} darkMode={isChecked} />
                            <CardMini title="Likes" value={507} percentage={553} icon={Twitter} upDownIcon={UpIcon} darkMode={isChecked} />
                            <CardMini title="Likes" value={107} percentage={19} icon={Youtube} upDownIcon={DownIcon} darkMode={isChecked} />
                            <CardMini title="Total Views" value={1407} percentage={12} icon={Youtube} upDownIcon={DownIcon} darkMode={isChecked} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SocialMediaDashboard;
