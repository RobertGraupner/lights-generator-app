import { useState } from "react";
import LightTurnedOff from "/images/light-turned-off.svg";
import LightBlue from "/images/light-blue.svg";

export const SingleLight = () => {
  const [isOn, setOn] = useState(true);

  const lightImage = isOn ? LightBlue : LightTurnedOff;

  const toggleLight = () => {
    setOn(prevOn => !prevOn);
  };

  return (
    <img src={lightImage} onClick={toggleLight}></img>
  );
};