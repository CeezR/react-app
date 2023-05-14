import React, { ReactNode, useState } from "react";

interface Props {
  children: string;
  color: string[];
  onClick: () => void;
}

const Button = ({ children, color, onClick }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const colorsLength = color.length;

  const iterateColor = () => {
    if (selectedIndex < colorsLength) {
      setSelectedIndex(selectedIndex + 1);
    } else {
      setSelectedIndex(0);
    }
  };

  return (
    <button
      type="button"
      className={"btn btn-" + color[selectedIndex]}
      onClick={() => {
        onClick();
        iterateColor();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
