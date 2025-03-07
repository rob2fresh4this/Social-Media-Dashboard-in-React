import React from "react";
import UpIcon from "../assets/images/icon-up.svg";
import DownIcon from "../assets/images/icon-down.svg";

const CardBig = ({ username, value, percentage, icon, upDownIcon, k, topColor, followSub, darkMode }) => {
    if (!Array.isArray(topColor)) {
        topColor = [topColor, topColor]; // Ensure it's always an array
    } else if (topColor.length < 2) {
        topColor.push(topColor[0]); // Duplicate the first color
    }

    if (!followSub) {
        followSub = "F o l l o w e r s";
    } else {
        followSub = "S u b s c r i b e r s";
    }

    let color = "#333333"; // Default grey color
    if (upDownIcon === UpIcon) {
        color = "#1DB489"; // Green color
    } else if (upDownIcon === DownIcon) {
        color = "#DC414C"; // Red color
    }

    // Set colors based on darkMode
    let cardBackgroundColor, hoverBackgroundColor, textColor, mainTextColor;

    if (darkMode) {
        cardBackgroundColor = "bg-[#D5E0F0]";// Light mode
        hoverBackgroundColor = "hover:bg-[#CBD5E1]";
        textColor = "text-black";
        mainTextColor = "#6D728D";
    } else {
        cardBackgroundColor = "bg-[#252A3A]";// Dark mode
        hoverBackgroundColor = "hover:bg-[#475569]";
        textColor = "text-white";
        mainTextColor = "#7D89B0";
    }


    return (
        <div
            className={`relative w-[100%] mb-[1.5rem] md:mb-0 md:w-[23%] p-4 transition-colors duration-300 rounded-lg overflow-hidden flex justify-center items-center flex-col ${cardBackgroundColor} ${hoverBackgroundColor}`}
            style={{ height: "250px", color: textColor }}
        >
            <div
                className="absolute top-0 left-0 w-full h-[5px]"
                style={{ background: `linear-gradient(to right, ${topColor[0]}, ${topColor[1]})` }}
            />

            <div className="flex justify-center items-center mb-[1.5rem]">
                <img src={icon} alt="icon" />
                <span className="pl-[5px] font-bold text-[14px]" style={{ color: mainTextColor }}>
                    {username}
                </span>
            </div>
            <div className="mt-2">
                <div className={`text-6xl font-bold flex justify-center items-center ${textColor}`}>
                    {value}
                    {k}
                </div>
                <div className="flex justify-center items-center" style={{ color: mainTextColor }}>
                    {followSub}
                </div>
                <div className="flex items-center mt-1 text-sm justify-center">
                    {upDownIcon && (
                        <img src={upDownIcon} alt="Up/Down icon" className="w-2 h-1 mr-1" />
                    )}
                    <span className="font-bold" style={{ color: color }}>
                        {percentage}% Today
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CardBig;
