import { useState } from "react";
import LightTurnedOff from "/images/light-turned-off.svg";
import LightBlue from "/images/light-blue.svg";
import LightGreen from "/images/light-green.svg";
import LightOrange from "/images/light-orange.svg";
import LightPink from "/images/light-pink.svg";
import LightRed from "/images/light-red.svg";
import LightYellow from "/images/light-yellow.svg";

const lights = [
  LightBlue,
  LightGreen,
  LightOrange,
  LightPink,
  LightRed,
  LightYellow,
];

export const SingleLight = () => {
  const [isOn, setOn] = useState(true);

  const randomLight = () => lights[Math.floor(Math.random() * lights.length)];

  const lightImage = isOn ? randomLight() : LightTurnedOff;

  const toggleLight = () => {
    setOn(prevOn => !prevOn);
  };

  return (
    <img src={lightImage} onClick={toggleLight}></img>
  );
};