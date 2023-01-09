import { SimpleCardProps } from "./simple-card.interfaces";

export const SimpleCard = ({ text }: SimpleCardProps) => {
  return (
    <div className="flex overflow-hidden rounded-lg bg-gray-300 px-4 py-5 shadow sm:p-6 justify-center items-center">
      <dt className="truncate text-sm font-medium text-black justify-center items-center">
        {text}
      </dt>
    </div>
  );
};
