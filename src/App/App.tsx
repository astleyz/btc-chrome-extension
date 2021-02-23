import React, { FC, useState } from "react";
import { ShadowRoot } from "./components/ShadowRoot/ShadowRoot";
import ModalBuySell from "./components/ModalBuySell/ModalBuySell";

const App: FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const toggleModalOpen = () => {
    setModalOpen((prevState: boolean) => !prevState);
  };

  return (
    <ShadowRoot>
      <ModalBuySell isOpen={isModalOpen} toggleModalOpen={toggleModalOpen} />
    </ShadowRoot>
  );
};

export default App;
