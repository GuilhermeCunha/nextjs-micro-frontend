import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useState } from "react";
import Image from "next/image";

import {
  Button,
  StatSimpleCard,
} from "@nextjs-micro-frontend/react-components";

const Index: React.FC = () => {
  const [examples, setExamples] = useState([
    {
      name: "Users",
      count: 100,
    },
  ]);
  return (
    <div className="flex flex-col justify-center">
      <span className="text-2xl font-bold bg-blue-800">User tools</span>
      <Image src="/user-tools/vercel.svg" width={50} height={50} />
      <Button
        text="Add example"
        onClick={() => {
          setExamples((old) => {
            return [
              ...old,
              {
                name: `Example ${old.length + 1}`,
                count: Math.floor(Math.random() * 100),
              },
            ];
          });
        }}
      />
      <div className="grid grid-cols-4 gap-4">
        {examples.map((example) => (
          <StatSimpleCard
            key={example.name}
            name={example.name}
            stat={example.count.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Index;
