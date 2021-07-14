import { ReactNode } from "react";
import { BoxContainer } from "./styles";

interface BoxProps {
  children: ReactNode;
}

export const Box = ({ children }: BoxProps) => {
  return <BoxContainer>{children}</BoxContainer>;
};
