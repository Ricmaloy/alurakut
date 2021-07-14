import { ReactNode } from "react";

import { Container } from './styles';

interface LeftContainerProps {
  children: ReactNode;
}

export const LeftContainer = ({ children }: LeftContainerProps) => {
  return <Container>{children}</Container>;
};
