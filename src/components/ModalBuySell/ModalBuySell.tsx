import React, { FC, useState } from "react";
import {
  Container,
  imgStyles,
  containerOpen,
  containerClose,
  modalOpen,
  modalClose,
  buttonRadius,
} from "./ModaBuySell.styled";
import btcimg from "../../assets/btc128.png";
import Authorization from "../Authorization/Authorization";

interface ModalBuySellProps {
  isOpen: boolean;
  toggleModalOpen(): void;
}

const ModalBuySell: FC<ModalBuySellProps> = ({ isOpen, toggleModalOpen }) => {
  const btcAmount = 7;
  const handleLogin = () => setAuthorized(true);

  const [isAuthorized, setAuthorized] = useState(false);
  const btn = isOpen ? {} : buttonRadius;

  return (
    <Container style={isOpen ? containerOpen : containerClose}>
      <button style={btn} className="toggleButton" onClick={toggleModalOpen}>
        <img style={imgStyles} src={btcimg} alt="" />
      </button>
      <div className="modal" style={isOpen ? modalOpen : modalClose}>
        {isAuthorized ? (
          <>
            <h1>Your Bitcoin wallet</h1>
            <div className="inputWrapper">
              <p className="quantity-coins">{btcAmount}</p>
              <label>Bitcoins</label>
            </div>
            <div className="buttonsWrapper">
              <button>Buy Bitcoin</button>
              <button>Sell Bitcoin</button>
            </div>
          </>
        ) : (
          <Authorization onLogin={handleLogin} />
        )}
      </div>
    </Container>
  );
};

export default ModalBuySell;
