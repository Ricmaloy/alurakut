import { ReactNode } from "react";

import { Container } from "./styles";

interface RightContainerProps {
  children: ReactNode;
}

export const RightContainer = ({ children }: RightContainerProps) => {
  return <Container>{children}</Container>;
};
