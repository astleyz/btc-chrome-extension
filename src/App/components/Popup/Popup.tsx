import React, { FC } from "react";
import { PopupBox } from "./Popup.styled";

interface PopupProps {
  message: string;
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: FC<PopupProps> = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;
  const closePopup = () => onClose(false);

  return (
    <PopupBox>
      <h1>{message}</h1>
      <span className="close" onClick={closePopup}>
        x
      </span>
    </PopupBox>
  );
};

export default Popup;
