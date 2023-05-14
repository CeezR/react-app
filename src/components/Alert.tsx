import { ReactNode } from "react";

interface Props {
  // By specifing it as a ReactNode type we can pass more complex
  // data structure such as html text!
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
