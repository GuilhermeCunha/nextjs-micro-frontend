import { StatSimpleCardProps } from "./simple-stat-card.interfaces";

export const StatSimpleCard = ({ name, stat }: StatSimpleCardProps) => {
  return (
    <div
      key={name}
      className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
    >
      <dt className="truncate text-sm font-medium text-gray-500">{name}</dt>
      <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
        {stat}
      </dd>
    </div>
  );
};
