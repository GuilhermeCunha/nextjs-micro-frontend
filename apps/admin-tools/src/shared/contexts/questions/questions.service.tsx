import React, { createContext, useState, useContext } from "react";
import { Question } from "shared/entities/question";
import { QuestionsContextContextData } from "./questions.interfaces";

const QuestionsContextContext = createContext<QuestionsContextContextData>(
  {} as QuestionsContextContextData
);

const QuestionsContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  return (
    <QuestionsContextContext.Provider
      value={
        {
          questions,
          setQuestions,
        } as QuestionsContextContextData
      }
    >
      {children}
    </QuestionsContextContext.Provider>
  );
};

function useQuestionsContext(): QuestionsContextContextData {
  const context = useContext(QuestionsContextContext);

  if (!context) {
    throw new Error(
      "useQuestionsContext must be used within a QuestionsContextProvider"
    );
  }

  return context;
}

export { QuestionsContextProvider, useQuestionsContext };
