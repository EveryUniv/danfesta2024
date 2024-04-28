import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <Frame>{children}</Frame>;
};

export default Layout;

const Frame = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  background-color: white;
`;
