import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import QuestionsPage from "modules/questions";

const QuestionsModule: React.FC = () => {
  return <QuestionsPage />;
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default QuestionsModule;
