import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import styled from "styled-components";
import useGnb from "../../stores/useGnb";
import Gnb from "./Gnb";
interface Props {
  title: string;
  subTitle: string;
}

const Header = ({ title, subTitle }: Props) => {
  const { open } = useGnb();
  return (
    <>
      <div>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <GnbButton onClick={open}>
          <RxHamburgerMenu />
        </GnbButton>
      </div>
      <Gnb />
    </>
  );
};

export default Header;

const Title = styled.h1``;

const SubTitle = styled.h2``;

const GnbButton = styled.button``;
