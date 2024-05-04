import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const Banner = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Banner;

const Container = styled.div`
  margin-inline: 22px;
`;
