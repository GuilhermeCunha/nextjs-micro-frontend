import { ButtonProps } from "./interfaces";

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="bg-green-500 p-4 rounded-md" onClick={onClick}>
      <span className="font-bold">{text}</span>
    </button>
  );
};
