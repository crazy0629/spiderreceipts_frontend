import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import type { IDarkSwitchProps } from "../../types";
import * as PiIcon from "react-icons/pi";
import * as Styled from "./switch.styles";

export const DarkModeSwitch: React.FC<IDarkSwitchProps> = ({
  setTheme,
  theme,
}) => {
  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const [isDark, setIsDark] = useState(true);

  const handleChange = () => {
    const updatedTheme = isDark ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
    setIsDark((prev) => !prev);
  };

  return (
    <Styled.DarkSwitchWrapper>
      <Switch
        checked={isDark}
        onChange={handleChange}
        handleDiameter={28}
        offColor="#000"
        onColor="#fff"
        offHandleColor="#fff"
        onHandleColor="#000"
        height={40}
        width={70}
        borderRadius={6}
        activeBoxShadow="0px 0px 1px 2px #fffc35"
        uncheckedIcon={
          <Styled.IconWrapper>
            <PiIcon.PiMoonStarsFill color="#fff" />
          </Styled.IconWrapper>
        }
        checkedIcon={
          <Styled.IconWrapper>
            <PiIcon.PiSunFill color="#000" />
          </Styled.IconWrapper>
        }
        uncheckedHandleIcon={
          <Styled.IconWrapper>
            <PiIcon.PiSunFill color="#000" />
          </Styled.IconWrapper>
        }
        checkedHandleIcon={
          <Styled.IconWrapper>
            <PiIcon.PiMoonStarsFill color="#fff" />
          </Styled.IconWrapper>
        }
        className="react-switch"
        id="small-radius-switch"
      />
    </Styled.DarkSwitchWrapper>
  );
};
