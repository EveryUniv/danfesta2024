import React from "react";
import useGnb from "../../stores/useGnb";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
const Gnb = () => {
  const { isOpened, close } = useGnb();

  if (!isOpened) {
    return <></>;
  }

  return (
    <div>
      <CloseButton onClick={close}>
        <IoClose />
      </CloseButton>
      Gnb
    </div>
  );
};

export default Gnb;

const CloseButton = styled.button``;
