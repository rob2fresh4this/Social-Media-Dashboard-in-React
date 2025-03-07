import React, { useState, useEffect  } from 'react';
import DownIcon from "../assets/images/icon-down.svg";
import UpIcon from "../assets/images/icon-up.svg";

const CardMini = ({ title, value, percentage, icon, upDownIcon, k, darkMode }) => {
    const [bgColor, setBgColor] = useState(darkMode ? '#D5E0F0' : '#252A3A'); // Set initial background color based on darkMode

    let color = 'grey';
    if (upDownIcon === UpIcon) {
        color = '#1DB489';
    } else if (upDownIcon === DownIcon) {
        color = '#DC414C';
    }

    useEffect(() => {
        setBgColor(darkMode ? '#D5E0F0' : '#252A3A');
    }, [darkMode]); // Only runs when darkMode changes
    

    let cardBackgroundColor, textColor, mainTextColor;
    if (!darkMode) {
        cardBackgroundColor = "#252A3A";// Dark mode
        textColor = "white";
        mainTextColor = "#7D89B0";
    } else {
        cardBackgroundColor = "#F0F2FA";// Light mode
        textColor = "black";
        mainTextColor = "#6D728D";
    }

    return (
        <div
            className={`w-[100%] mb-[1.5rem] md:mb-0 md:w-[23%] p-4 transition-colors duration-300 rounded-lg`}
            style={{ backgroundColor: bgColor }} // Dynamic background color state
            onMouseOver={() => setBgColor(darkMode ? '#D1D5DB' : '#475569')} // Hover color change based on darkMode
            onMouseOut={() => setBgColor(darkMode ? '#D5E0F0' : '#252A3A')} // Default color based on darkMode
        >
            <div className="flex justify-between items-center">
                <span className="font-bold text-[14px]" style={{ color: mainTextColor }}>{title}</span>
                <img src={icon} alt="icon" />
            </div>
            <div className="mt-2 flex justify-between items-center">
                <span className="text-2xl font-bold" style={{ color: textColor }}>
                    {value}{k}
                </span>
                <div className="flex items-center mt-1 text-sm">
                    {upDownIcon && <img src={upDownIcon} alt="Up/Down icon" className="w-2 h-1 mr-1" />}
                    <span className="font-bold" style={{ color: color }}>
                        {percentage}%
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CardMini;
