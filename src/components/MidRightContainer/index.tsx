import { ReactNode } from "react";

import { Container } from './styles';

interface MidRightContainer {
  children: ReactNode;
}

export const MidRightContainer = ({ children }: MidRightContainer) => {
  return <Container>{children}</Container>;
};
