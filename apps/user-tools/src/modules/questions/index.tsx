import React from "react";
import QuestionsHeader from "./components/questions-header";
import useQuestionsModule from "./use-questions-module";

import { Button, SimpleCard } from "@nextjs-micro-frontend/react-components";

const QuestionsModule: React.FC = () => {
  const { questions, createQuestion } = useQuestionsModule({
    defaultQuestions: [
      // {
      //   label: "Text",
      //   isDeleted: true,
      // },
    ],
  });
  return (
    <div className="flex flex-col justify-center">
      <QuestionsHeader />
      <Button
        text="Add random question"
        onClick={() => {
          const randomQuestion = {
            label: `{{Question ${questions.length + 1}}} ?`,
            isDeleted: false,
          };
          createQuestion({
            question: randomQuestion,
          });
        }}
      />
      <div className="grid grid-cols-4 gap-4">
        {questions.map((example) => (
          <SimpleCard key={example.label} text={example.label} />
        ))}
      </div>
    </div>
  );
};

export default QuestionsModule;
