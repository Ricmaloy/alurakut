import { ReactNode } from "react";

import { Container } from "./styles";

interface MidContainerProps {
  children: ReactNode;
}

export const MidContainer = ({ children }: MidContainerProps) => {
  return <Container>{children}</Container>;
};
