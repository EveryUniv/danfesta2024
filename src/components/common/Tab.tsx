import React from "react";
import styled from "styled-components";

export interface TabContent {
  id: number;
  title: string;
}

interface Props {
  selectedId: number;
  contents: TabContent[];
  select: (id: number) => void;
}

const Tab = ({ selectedId, contents, select }: Props) => {
  return (
    <div>
      {contents.map(({ id, title }) => (
        <Button
          key={id}
          $isSelected={id === selectedId}
          onClick={() => select(id)}
        >
          {title}
        </Button>
      ))}
    </div>
  );
};

export default Tab;

const Button = styled.button<{ $isSelected: boolean }>`
  background-color: ${(p) => (p.$isSelected ? "blue" : "white")};
`;
