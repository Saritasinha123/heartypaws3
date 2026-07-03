import React from "react";
import pawLogoImg from "../assets/images/Hearty Paws Logo.png";

interface PawLogoProps {
  className?: string;
  isDarkBackground?: boolean;
}

export default function PawLogo({
  className = "w-5 h-5",
  isDarkBackground = false,
}: PawLogoProps) {
  return (
    <img
      src={pawLogoImg}
      alt="Hearty Paws Logo"
      width={24}
      height={24}
      decoding="async"
      className={`${className} object-contain ${
        isDarkBackground ? "brightness-0 invert" : ""
      }`}
    />
  );
}
